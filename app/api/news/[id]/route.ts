import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getStore } from "@netlify/blobs";

const STORE_NAME = "news-posts";

// GET - Fetch single news post
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const store = getStore(STORE_NAME);
    const data = await store.get("posts", { type: "json" });
    const posts = data || [];
    const post = posts.find((p: any) => p.id === params.id);
    
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    
    return NextResponse.json(post);
  } catch (error) {
    console.error("Error reading news post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

// PUT - Update news post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const store = getStore(STORE_NAME);
    const body = await request.json();
    
    // Clean and validate image URL or embed code (same logic as POST)
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
    
    const data = await store.get("posts", { type: "json" });
    const posts = data || [];
    
    const index = posts.findIndex((p: any) => p.id === params.id);
    if (index === -1) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    
    posts[index] = {
      ...posts[index],
      ...body,
      imageUrl: imageUrl || posts[index].imageUrl || "",
      updatedAt: new Date().toISOString(),
    };
    
    await store.set("posts", JSON.stringify(posts));
    
    return NextResponse.json(posts[index]);
  } catch (error) {
    console.error("Error updating news post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

// DELETE - Delete news post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const store = getStore(STORE_NAME);
    const data = await store.get("posts", { type: "json" });
    const posts = data || [];
    
    const filteredPosts = posts.filter((p: any) => p.id !== params.id);
    
    if (posts.length === filteredPosts.length) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    
    await store.set("posts", JSON.stringify(filteredPosts));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting news post:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}

