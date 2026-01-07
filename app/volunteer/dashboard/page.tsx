"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import NewsEditor from "@/components/volunteer/NewsEditor";
import NewsList from "@/components/volunteer/NewsList";
import { LogOut, Plus, FileText, Loader2 } from "lucide-react";
import Link from "next/link";

export default function VolunteerDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"list" | "create">("list");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "create") {
      setActiveTab("create");
    } else {
      setActiveTab("list");
    }
  }, [searchParams]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/volunteer/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-deep-teal" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-cream pt-16 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-h1 mb-2 heading-underline">Volunteer Dashboard</h1>
            <p className="text-warm-gray">
              Manage news and updates for Nu Al Andalusia
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/news"
              className="px-4 py-2 rounded-lg border-2 border-deep-teal text-deep-teal font-semibold text-sm transition-all duration-300 hover:bg-deep-teal hover:text-white"
            >
              View Public Page
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold text-sm transition-all duration-300 hover:bg-red-700 flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-300">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("list")}
              className={`pb-4 px-2 font-semibold transition-colors duration-300 flex items-center space-x-2 ${
                activeTab === "list"
                  ? "text-deep-teal border-b-2 border-deep-teal"
                  : "text-warm-gray hover:text-deep-teal"
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>All Posts</span>
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className={`pb-4 px-2 font-semibold transition-colors duration-300 flex items-center space-x-2 ${
                activeTab === "create"
                  ? "text-deep-teal border-b-2 border-deep-teal"
                  : "text-warm-gray hover:text-deep-teal"
              }`}
            >
              <Plus className="w-5 h-5" />
              <span>Create New Post</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div>
          {activeTab === "list" ? (
            <NewsList onNewPost={() => setActiveTab("create")} />
          ) : (
            <NewsEditor />
          )}
        </div>
      </div>
    </div>
  );
}

