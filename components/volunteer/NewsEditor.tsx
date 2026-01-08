"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Save, X, Loader2 } from "lucide-react";

interface NewsPost {
  id?: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  imageUrl?: string;
  isPublished: boolean;
}

export default function NewsEditor({ post }: { post?: NewsPost }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<NewsPost>({
    title: post?.title || "",
    content: post?.content || "",
    excerpt: post?.excerpt || "",
    author: post?.author || "",
    publishedAt: post?.publishedAt || new Date().toISOString(),
    imageUrl: post?.imageUrl || "",
    isPublished: post?.isPublished || false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const url = post?.id
        ? `/api/news/${post.id}`
        : "/api/news";
      const method = post?.id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save post");
      }

      // Redirect to list view and refresh
      router.push("/volunteer/dashboard?tab=list");
      router.refresh();
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Failed to save post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card p-8 shadow-lg">
      <h2 className="text-h2 mb-6 heading-underline">
        {post?.id ? "Edit Post" : "Create New Post"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-navy-blue mb-2"
          >
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-deep-teal focus:outline-none transition-colors"
            placeholder="Enter post title"
          />
        </div>

        <div>
          <label
            htmlFor="excerpt"
            className="block text-sm font-semibold text-navy-blue mb-2"
          >
            Excerpt/Summary *
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-deep-teal focus:outline-none transition-colors resize-none"
            placeholder="Brief summary of the post (will be shown in previews)"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-semibold text-navy-blue mb-2"
          >
            Content *
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={12}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-deep-teal focus:outline-none transition-colors resize-none font-mono text-sm"
            placeholder="Write your post content here..."
          />
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-sm font-semibold text-navy-blue mb-2"
          >
            Author *
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-deep-teal focus:outline-none transition-colors"
            placeholder="Author name"
          />
        </div>

          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-semibold text-navy-blue mb-2"
            >
              Image URL (optional)
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-deep-teal focus:outline-none transition-colors"
              placeholder="https://example.com/image.jpg"
            />
            <p className="text-xs text-warm-gray mt-2">
              Paste an image URL from Imgur, Cloudinary, or any image hosting service
            </p>
            <p className="text-xs text-amber-600 mt-1">
              <strong>For Imgur:</strong> Use the direct image link (i.imgur.com/xxxxx.jpg) or right-click the image and select "Copy image address"
            </p>
          </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isPublished"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
            className="w-4 h-4 text-deep-teal border-gray-300 rounded focus:ring-deep-teal"
          />
          <label
            htmlFor="isPublished"
            className="text-sm font-semibold text-navy-blue"
          >
            Publish immediately
          </label>
        </div>

        <div className="flex items-center space-x-4 pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                <span>Save Post</span>
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => router.push("/volunteer/dashboard")}
            className="px-6 py-3 rounded-lg border-2 border-gray-300 text-warm-gray font-semibold hover:border-deep-teal hover:text-deep-teal transition-colors flex items-center space-x-2"
          >
            <X className="w-5 h-5" />
            <span>Cancel</span>
          </button>
        </div>
      </form>
    </div>
  );
}

