"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight, Loader2 } from "lucide-react";

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

export default function NewsPage() {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/news");
      if (response.ok) {
        const data = await response.json();
        // Only show published posts
        setPosts(data.filter((post: NewsPost) => post.isPublished));
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream pt-16 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-h1 mb-4 heading-underline">News & Updates</h1>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Stay informed with the latest from our community
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-deep-teal" />
          </div>
        ) : posts.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-20">
            <p className="text-warm-gray text-lg mb-4">
              No news posts available at the moment.
            </p>
            <p className="text-warm-gray">
              Check back soon for updates from our community!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/news/${post.id}`}
                className="card p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {post.imageUrl && (
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h2 className="text-xl font-heading font-bold text-navy-blue mb-3 group-hover:text-deep-teal transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-warm-gray mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-warm-gray pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
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
                  <ArrowRight className="w-5 h-5 text-deep-teal group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
