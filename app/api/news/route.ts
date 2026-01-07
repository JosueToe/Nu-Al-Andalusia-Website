import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "news.json");

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
  }
}

// GET - Fetch all news posts
export async function GET() {
  try {
    ensureDataDirectory();
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const posts = JSON.parse(fileContents || "[]");
    
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

    ensureDataDirectory();
    const body = await request.json();
    
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const posts = JSON.parse(fileContents || "[]");
    
    const newPost = {
      id: Date.now().toString(),
      title: body.title,
      content: body.content,
      excerpt: body.excerpt,
      author: body.author,
      publishedAt: body.publishedAt || new Date().toISOString(),
      imageUrl: body.imageUrl || "",
      isPublished: body.isPublished || false,
      createdAt: new Date().toISOString(),
    };
    
    posts.push(newPost);
    fs.writeFileSync(dataFilePath, JSON.stringify(posts, null, 2));
    
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating news post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

