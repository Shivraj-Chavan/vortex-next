"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBlogs } from "../../../lib/api.js";
import { getImageUrl, FALLBACK_IMAGE } from "../../../lib/imageUtils.js";

const RecentBlog = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecentBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetchBlogs();
        const blogsData =
          response.data?.data ||
          response.data?.blogs ||
          response.data ||
          [];

        if (!Array.isArray(blogsData))
          throw new Error("Invalid response format");

        const formatted = blogsData.slice(0, 3).map((blog) => ({
          id: blog.id || Math.random(),
          title: blog.title || "Untitled",
          excerpt:
            blog.content?.length > 120
              ? blog.content.slice(0, 120) + "..."
              : blog.content || "No excerpt available",
          author: blog.author || "Admin",
          date: blog.created_at
            ? new Date(blog.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })
            : "Recent",
          image: getImageUrl(blog.image),
          category: blog.category || "General",
          slug: blog.slug || `blog-${blog.id}`,
        }));

        setRecentPosts(formatted);
      } catch (err) {
        setError(err.message);
        setRecentPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadRecentBlogs();
  }, []);

  if (loading) {
    return (
      <div className="py-20 bg-white text-center">
        <div className="animate-spin h-12 w-12 border-4 border-gray-200 border-t-indigo-600 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600">Loading recent blogs...</p>
      </div>
    );
  }

  if (recentPosts.length === 0) return null;

  return (
    <section id="recent-blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 pt-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Recent Blog Posts
          </h2>

          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6" />

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Insights on web development, technology, and digital innovation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = FALLBACK_IMAGE;
                  }}
                />

                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">
                  {post.date.toUpperCase()}
                </div>

                <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-xs font-semibold shadow">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 line-clamp-2 hover:text-indigo-600 transition">
                  {post.title}
                </h3>

                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                  <span>👤 {post.author}</span>
                  <span>📂 {post.category}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2">
                  {post.excerpt}
                </p>

                <Link
                  href="/blog"
                  className="inline-flex items-center text-indigo-600 font-semibold hover:gap-2 transition-all"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-14 pb-10">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 rounded-xl font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition shadow"
          >
            View All Blog Posts
          </Link>
        </div>

      </div>
    </section>
  );
};

export default RecentBlog;