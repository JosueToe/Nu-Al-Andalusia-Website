import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getStore } from "@netlify/blobs";

const STORE_NAME = "news-posts";

// GET - Fetch all news posts
export async function GET() {
  try {
    const store = getStore(STORE_NAME);
    const data = await store.get("posts", { type: "json" });
    const posts = data || [];
    
    // Sort by published date (newest first)
    const sortedPosts = posts.sort(
      (a: any, b: any) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    
    return NextResponse.json(sortedPosts);
  } catch (error) {
    console.error("Error reading news:", error);
    return NextResponse.json([], { status: 200 });
  }
}

// POST - Create new news post
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const store = getStore(STORE_NAME);
    const body = await request.json();
    
    const data = await store.get("posts", { type: "json" });
    const posts = data || [];
    
    // Clean and validate image URL or embed code
    let imageUrl = (body.imageUrl || "").trim();
    
    // If it's an embed code, store it as-is
    if (imageUrl.includes('<blockquote class="imgur-embed-pub"')) {
      // Embed code - store as-is, no validation needed
    } else if (imageUrl && imageUrl.includes("imgur.com")) {
      // Handle regular Imgur URLs
      if (imageUrl.includes("/a/") || imageUrl.includes("/gallery/")) {
        // Gallery links - suggest using embed code instead
        return NextResponse.json(
          { 
            error: "Gallery links are not supported as direct image URLs. Please use the Imgur embed code instead. Click 'Embed' on your Imgur gallery/image and paste the embed code here." 
          },
          { status: 400 }
        );
      } else if (!imageUrl.includes("i.imgur.com")) {
        // Try to convert regular imgur.com/xxxxx to i.imgur.com/xxxxx.jpg
        const match = imageUrl.match(/imgur\.com\/([a-zA-Z0-9]+)/);
        if (match && match[1]) {
          imageUrl = `https://i.imgur.com/${match[1]}.jpg`;
        }
      }
    }
    
    const newPost = {
      id: Date.now().toString(),
      title: body.title,
      content: body.content,
      excerpt: body.excerpt,
      author: body.author,
      publishedAt: body.publishedAt || new Date().toISOString(),
      imageUrl: imageUrl,
      isPublished: body.isPublished || false,
      createdAt: new Date().toISOString(),
    };
    
    posts.push(newPost);
    await store.set("posts", JSON.stringify(posts));
    
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating news post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

