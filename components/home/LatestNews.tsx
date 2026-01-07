"use client";

import Link from "next/link";
import Image from "next/image";

export default function LatestNews() {
  // Placeholder news data - will be replaced with Sanity CMS data
  const newsItems = [
    {
      id: 1,
      category: "NEWS",
      title: "Community Gathering Success",
      excerpt: "Our recent community gathering brought together over 200 members to celebrate our heritage and discuss future initiatives.",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      slug: "community-gathering-success",
    },
    {
      id: 2,
      category: "EVENT",
      title: "Heritage Preservation Workshop",
      excerpt: "Join us for an upcoming workshop focused on preserving and sharing the rich cultural heritage of Al-Andalusia.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      slug: "heritage-preservation-workshop",
    },
    {
      id: 3,
      category: "UPDATE",
      title: "New Service Programs Launch",
      excerpt: "We're excited to announce the launch of new community service programs designed to support and empower our members.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
      slug: "new-service-programs-launch",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-4">Stay Informed</h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Latest updates from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-deep-teal text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-h4 mb-2 group-hover:text-deep-teal transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-warm-gray mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-warm-gray">{item.date}</span>
                  <span className="text-deep-teal font-semibold group-hover:translate-x-2 transition-transform duration-300 inline-block">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/news" className="btn-primary">
            View All News →
          </Link>
        </div>
      </div>
    </section>
  );
}

