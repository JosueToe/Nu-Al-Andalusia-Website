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
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to save post");
      }

      // Redirect to list view and refresh
      router.push("/volunteer/dashboard?tab=list");
      router.refresh();
    } catch (error: any) {
      console.error("Error saving post:", error);
      alert(error.message || "Failed to save post. Please try again.");
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
              placeholder="https://i.imgur.com/xxxxx.jpg"
            />
            <p className="text-xs text-warm-gray mt-2">
              Paste an image URL from Imgur, Cloudinary, or any image hosting service
            </p>
            <div className="text-xs text-amber-600 mt-1 p-2 bg-amber-50 rounded border border-amber-200">
              <p className="font-semibold mb-1">⚠️ Important for Imgur:</p>
              <p className="mb-1">❌ <strong>Don't use:</strong> Gallery links (imgur.com/a/xxxxx)</p>
              <p className="mb-1">✅ <strong>Use instead:</strong> Direct image link</p>
              <p className="text-xs mt-1">To get the direct link:</p>
              <ol className="list-decimal list-inside ml-2 mt-1 space-y-1">
                <li>Open your Imgur gallery</li>
                <li>Click on the image to view it</li>
                <li>Right-click the image → "Copy image address"</li>
                <li>Paste that URL here (should look like: i.imgur.com/xxxxx.jpg)</li>
              </ol>
            </div>
            
            {/* Image Preview */}
            {formData.imageUrl && (
              <div className="mt-4">
                <p className="text-xs font-semibold text-navy-blue mb-2">Preview:</p>
                <div className="relative h-48 rounded-lg overflow-hidden border-2 border-gray-300 bg-gray-100">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center text-red-500 p-4">
                            <p class="mb-2 font-semibold">❌ Image failed to load</p>
                            <p class="text-xs text-gray-600 break-all text-center">Check the URL format</p>
                            <p class="text-xs text-gray-500 break-all text-center mt-2">${formData.imageUrl}</p>
                          </div>
                        `;
                      }
                    }}
                    onLoad={() => {
                      console.log("Preview image loaded successfully");
                    }}
                  />
                </div>
                <p className="text-xs text-green-600 mt-1">✓ If you see the image above, it will work on the post</p>
              </div>
            )}
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

