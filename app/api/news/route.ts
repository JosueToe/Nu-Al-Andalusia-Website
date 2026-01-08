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
    
    // Clean and validate image URL
    let imageUrl = (body.imageUrl || "").trim();
    
    // Convert Imgur gallery links to direct image links
    if (imageUrl && imageUrl.includes("imgur.com")) {
      // If it's a gallery link (imgur.com/a/... or imgur.com/gallery/...), we can't convert it
      // But if it's a direct link (i.imgur.com/...), it should work
      // For regular imgur.com links without /a/ or /gallery/, try to convert to direct link
      if (imageUrl.includes("/a/") || imageUrl.includes("/gallery/")) {
        // Gallery links need special handling - user should use direct image link
        console.warn("Imgur gallery link detected. Use direct image link (i.imgur.com/...) instead.");
      } else if (!imageUrl.includes("i.imgur.com")) {
        // Try to convert imgur.com/xxxxx to i.imgur.com/xxxxx.jpg
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

