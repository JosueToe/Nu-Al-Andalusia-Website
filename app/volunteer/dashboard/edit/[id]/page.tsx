"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import NewsEditor from "@/components/volunteer/NewsEditor";
import { Loader2 } from "lucide-react";

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

export default function EditNewsPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [post, setPost] = useState<NewsPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/volunteer/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (params.id && status === "authenticated") {
      fetchPost(params.id as string);
    }
  }, [params.id, status]);

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

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center pt-16">
        <Loader2 className="w-8 h-8 animate-spin text-deep-teal" />
      </div>
    );
  }

  if (!session || !post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-cream pt-16 pb-20">
      <div className="container-custom">
        <NewsEditor post={post} />
      </div>
    </div>
  );
}

