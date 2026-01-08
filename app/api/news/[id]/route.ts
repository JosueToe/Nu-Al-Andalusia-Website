import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "news.json");

function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
  }
}

// GET - Fetch single news post
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    ensureDataDirectory();
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const posts = JSON.parse(fileContents || "[]");
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

    ensureDataDirectory();
    const body = await request.json();
    
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const posts = JSON.parse(fileContents || "[]");
    
    const index = posts.findIndex((p: any) => p.id === params.id);
    if (index === -1) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    
    posts[index] = {
      ...posts[index],
      ...body,
      updatedAt: new Date().toISOString(),
    };
    
    fs.writeFileSync(dataFilePath, JSON.stringify(posts, null, 2));
    
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

    ensureDataDirectory();
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const posts = JSON.parse(fileContents || "[]");
    
    const filteredPosts = posts.filter((p: any) => p.id !== params.id);
    
    if (posts.length === filteredPosts.length) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    
    fs.writeFileSync(dataFilePath, JSON.stringify(filteredPosts, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting news post:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}

