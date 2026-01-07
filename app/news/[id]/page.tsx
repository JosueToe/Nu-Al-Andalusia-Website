"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Loader2 } from "lucide-react";

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

export default function NewsPostPage() {
  const params = useParams();
  const [post, setPost] = useState<NewsPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetchPost(params.id as string);
    }
  }, [params.id]);

  const fetchPost = async (id: string) => {
    try {
      const response = await fetch(`/api/news/${id}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream pt-16 pb-20 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-deep-teal" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-cream pt-16 pb-20">
        <div className="container-custom text-center py-20">
          <h1 className="text-h2 mb-4">Post Not Found</h1>
          <Link href="/news" className="text-deep-teal hover:text-rich-gold">
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-cream pt-16 pb-20">
      <div className="container-custom max-w-4xl">
        <Link
          href="/news"
          className="inline-flex items-center space-x-2 text-deep-teal hover:text-rich-gold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to News</span>
        </Link>

        {post.imageUrl && (
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-h1 mb-4 heading-underline">{post.title}</h1>
          <div className="flex items-center space-x-6 text-warm-gray">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="font-semibold">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="text-body text-warm-gray leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/news"
            className="btn-outline inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>View All News</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

