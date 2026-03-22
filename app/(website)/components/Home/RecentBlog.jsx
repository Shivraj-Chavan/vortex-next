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
        console.error("RecentBlog: Failed to load blogs:", err);
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
      <div className="relative bg-transparent text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white/80 mb-4"></div>
          <p className="text-white/70">Loading recent blogs...</p>
        </div>
      </div>
    );
  }

  if (recentPosts.length === 0) return null;

  return (
    <section
      id="recent-blog"
      className="relative bg-transparent text-white py-20"
    >
      {/* Glow Effects */}
      <div className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 mt-15">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            RECENT BLOG POSTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Welcome to our Blog, your ultimate source for everything related
            to web development, technology, and digital innovation.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = FALLBACK_IMAGE;
                  }}
                />

                {/* Date */}
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-lg">
                  {post.date.toUpperCase()}
                </div>

                {/* Category */}
                <div className="absolute top-4 left-4 bg-white/90 text-gray-900 px-4 py-2 rounded-xl text-xs font-semibold shadow-lg">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 line-clamp-2 hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    👤 {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    📂 {post.category}
                  </span>
                </div>

                <p className="text-gray-300 mb-5 line-clamp-2 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:gap-3 transition-all"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:scale-105 transition-all shadow-lg"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;