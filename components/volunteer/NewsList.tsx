"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Edit, Trash2, Eye, Plus, Loader2, Calendar, User } from "lucide-react";
import Link from "next/link";

interface NewsPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  imageUrl?: string;
  isPublished: boolean;
}

interface NewsListProps {
  onNewPost?: () => void;
}

export default function NewsList({ onNewPost }: NewsListProps) {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/news");
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      const response = await fetch(`/api/news/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== id));
      } else {
        alert("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-deep-teal" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-h3">All Posts ({posts.length})</h2>
        <button
          onClick={() => onNewPost ? onNewPost() : router.push("/volunteer/dashboard?tab=create")}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>New Post</span>
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-warm-gray text-lg mb-4">No posts yet.</p>
          <button
            onClick={() => onNewPost ? onNewPost() : router.push("/volunteer/dashboard?tab=create")}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Create Your First Post</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-heading font-bold text-navy-blue">
                      {post.title}
                    </h3>
                    {post.isPublished ? (
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
                        Published
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                        Draft
                      </span>
                    )}
                  </div>
                  <p className="text-warm-gray mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-warm-gray">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Link
                    href={`/news/${post.id}`}
                    target="_blank"
                    className="p-2 rounded-lg border-2 border-gray-300 text-warm-gray hover:border-deep-teal hover:text-deep-teal transition-colors"
                    title="View post"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => router.push(`/volunteer/dashboard/edit/${post.id}`)}
                    className="p-2 rounded-lg border-2 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white transition-colors"
                    title="Edit post"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-2 rounded-lg border-2 border-red-300 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                    title="Delete post"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

