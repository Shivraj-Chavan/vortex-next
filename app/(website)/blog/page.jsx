"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { fetchBlogs } from '../../lib/api.js';
import { getImageUrl, FALLBACK_IMAGE } from '../../lib/imageUtils.js';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const postsPerPage = 4;

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetchBlogs();
        let blogsData = [];

        if (response.data) {
          blogsData = response.data.data || response.data.blogs || response.data || [];
        }

        if (!Array.isArray(blogsData)) {
          throw new Error('Invalid response format from API');
        }

        const formatted = blogsData.map((blog) => ({
          id: blog.id || Math.random(),
          title: blog.title || 'Untitled',
          slug: blog.slug || `blog-${blog.id}`,
          excerpt: blog.content?.length > 140
            ? blog.content.slice(0, 140) + "..."
            : blog.content || "No content available",
          content: blog.content || "",
          author: blog.author || "Admin",
          date: blog.created_at
            ? new Date(blog.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
          comments: blog.comments || 0,
          // FIX: use shared utility
          image: getImageUrl(blog.image),
          category: blog.category || "General",
          tags: Array.isArray(blog.tags) ? blog.tags : [],
        }));

        setBlogPosts(formatted);
        setRetryCount(0);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);

        let errorMessage = "Failed to load blogs. ";
        if (err.code === 'ECONNABORTED') {
          errorMessage += "The server is taking too long to respond.";
        } else if (err.response) {
          errorMessage += `Server error: ${err.response.status}`;
        } else if (err.request) {
          errorMessage += "No response from server. Please check if the server is running at http://69.62.84.113:5025";
        } else {
          errorMessage += err.message || "Unknown error occurred.";
        }

        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [retryCount]);

  const handleRetry = () => setRetryCount(prev => prev + 1);

  const recentPosts = useMemo(() => {
    if (!Array.isArray(blogPosts) || blogPosts.length === 0) return [];
    return blogPosts.slice(0, 5).map((p) => ({
      id: p.id,
      title: p.title.length > 52 ? p.title.slice(0, 52) + "..." : p.title,
      date: p.date,
      image: p.image,
    }));
  }, [blogPosts]);

  const categories = useMemo(() => {
    if (!Array.isArray(blogPosts) || blogPosts.length === 0) return [];
    const categoryMap = {};
    blogPosts.forEach((p) => {
      categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
    });
    return Object.entries(categoryMap).map(([name, count]) => ({ name, count }));
  }, [blogPosts]);

  const allTags = ["App", "IT", "Business", "Mac", "Design", "Office", "Creative", "Studio", "Smart", "Tips", "Marketing"];

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesSearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [blogPosts, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const goToPage = (p) => {
    const next = Math.min(Math.max(p, 1), Math.max(totalPages, 1));
    setCurrentPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReadMore = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => setSelectedPost(null);

  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    setSelectedPost(null);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // FIX: single reusable onError handler — sets onerror to null first to
  // prevent infinite loop if the fallback image also fails to load
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = FALLBACK_IMAGE;
  };

  const Pagination = () => (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-black/80 hover:bg-white/10 disabled:opacity-40 disabled:hover:bg-white/5 transition"
      >‹</button>

      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => goToPage(p)}
          className={`h-10 w-10 rounded-xl border transition ${
            currentPage === p
              ? "border-indigo-400/60 bg-indigo-500/20 text-black"
              : "border-white/10 bg-white/5 text-black/80 hover:bg-black/10"
          }`}
        >{p}</button>
      ))}

      {totalPages > 5 && (
        <>
          <span className="px-2 text-white/60">…</span>
          <button
            onClick={() => goToPage(totalPages)}
            className={`h-10 w-10 rounded-xl border transition ${
              currentPage === totalPages
                ? "border-indigo-400/60 bg-indigo-500/20 text-black"
                : "border-white/10 bg-white/5 text-black/80 hover:bg-white/10"
            }`}
          >{totalPages}</button>
        </>
      )}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
        className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-black/80 hover:bg-white/10 disabled:opacity-40 disabled:hover:bg-white/5 transition"
      >›</button>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen pt-[88px] bg-[#0b0f1a] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white/80 mb-4"></div>
          <p className="text-black/70 text-lg">Loading blogs...</p>
          <p className="text-black/50 text-sm mt-2">Connecting to server...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-[88px] bg-[#0b0f1a] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-black mb-2">Error Loading Blogs</h2>
          <p className="text-red-400 mb-6">{error}</p>
          <button
            onClick={handleRetry}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-black rounded-lg hover:shadow-lg transition-all w-full"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <div className="min-h-screen pt-[88px] bg-[#0b0f1a] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-black/40 text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-black mb-2">No Blogs Found</h2>
          <p className="text-black/60 mb-6">There are no blog posts available at the moment.</p>
          <button
            onClick={handleRetry}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-black rounded-lg hover:shadow-lg transition-all"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[88px] bg-[#F6F8FC] relative overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-4 py-10">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-black/70 mb-6">
          <Link href="/" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          {selectedPost ? (
            <>
              <button onClick={handleBackToList} className="hover:text-black underline-offset-4 hover:underline">
                Blog
              </button>
              <span className="mx-2">/</span>
              <span className="text-black">
                {selectedPost.title.length > 32 ? selectedPost.title.slice(0, 32) + "..." : selectedPost.title}
              </span>
            </>
          ) : (
            <span className="text-balck/90">Blog</span>
          )}
        </div>

        {!selectedPost && (
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black">Blog</h1>
            <p className="mt-3 text-black/70 max-w-2xl mx-auto text-sm sm:text-base">
              Tips, insights, and updates about web development, design, and digital growth.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          {/* Main */}
          <main className="lg:col-span-8 order-1">
            {selectedPost ? (
              <article className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-xl">
                <div className="relative h-[220px] sm:h-[360px] bg-gray-800">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    onError={handleImgError}
                  />
                </div>

                <div className="p-5 sm:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-black/80">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    {selectedPost.category}
                  </div>

                  <h1 className="mt-4 text-xl sm:text-3xl font-bold text-black leading-tight">
                    {selectedPost.title}
                  </h1>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-black/70">
                    <span>👤 {selectedPost.author}</span>
                    <span>📅 {selectedPost.date}</span>
                    <span>💬 {selectedPost.comments} Comments</span>
                  </div>

                  {/* <div className="mt-6 space-y-4 text-white/80 leading-relaxed text-sm sm:text-base">
                    <p>{selectedPost.content}</p>
                  </div> */}

                  <div className="prose max-w-none text-sm text-black">
                    <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                  </div>

                  {selectedPost.tags && selectedPost.tags.length > 0 && (
                    <div className="mt-8 flex flex-wrap items-center gap-2">
                      <span className="text-black font-semibold text-sm">Tags:</span>
                      {selectedPost.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => handleTagClick(tag)}
                          className="px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5 text-black hover:bg-white/10 transition"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={handleBackToList}
                    className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 shadow-lg hover:scale-[1.02] transition-all"
                  >
                    ← Back to Blog
                  </button>
                </div>
              </article>
            ) : (
              <>
                <div className="flex flex-col gap-3 mb-6">
                  <div className="relative w-full">
                    <input
                      value={searchQuery}
                      onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                      placeholder="Search posts..."
                      className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 text-black placeholder:text-black/50 outline-none border border-gray-100 shadow focus:border-indigo-400/60"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-black/60">🔍</span>
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                    <button
                      onClick={() => handleCategory("all")}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm border transition ${
                        selectedCategory === "all"
                          ? "border-indigo-400/60 bg-indigo-500/20 text-black"
                          : "border-white/10 bg-white/5 text-black/70 hover:bg-white/10"
                      }`}
                    >All</button>

                    {categories.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => handleCategory(c.name)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm border transition ${
                          selectedCategory === c.name
                            ? "border-indigo-400/60 bg-indigo-500/20 text-black"
                            : "border-white/10 bg-white/5 text-black/70 hover:bg-white/10"
                        }`}
                      >{c.name}</button>
                    ))}
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {currentPosts.length ? (
                    currentPosts.map((post) => (
                      <article
                        key={post.id}
                        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                      >
                        <div className="relative h-44 sm:h-48 bg-gray-800">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            onError={handleImgError}
                          />
                          <div className="absolute top-4 left-4 rounded-xl bg-white/90 text-gray-900 px-3 py-1.5 text-xs font-semibold shadow-lg">
                            {post.category}
                          </div>
                        </div>

                        <div className="p-5 sm:p-6">
                          <h2 className="text-base sm:text-lg font-bold text-black line-clamp-2">
                            {post.title}
                          </h2>
                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-black/70">
                            <span>👤 {post.author}</span>
                            <span>📅 {post.date}</span>
                            <span>💬 {post.comments}</span>
                          </div>
                          <p className="mt-4 text-black line-clamp-3 leading-relaxed text-sm">
                            {post.excerpt}
                          </p>
                          <button
                            onClick={() => handleReadMore(post)}
                            className="mt-5 w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:shadow-lg transition-all"
                          >
                            Read More
                          </button>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-14">
                      <p className="text-black text-base">No blog posts found matching your search.</p>
                    </div>
                  )}
                </div>

                {totalPages > 1 && <Pagination />}

                {/* Newsletter */}
                <div className="mt-10 sm:mt-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8 text-center shadow-lg">
                  <h2 className="text-xl sm:text-2xl font-bold text-black">Join Our Newsletter</h2>
                  <p className="mt-2 text-black/70 text-sm sm:text-base">
                    Subscribe and receive the latest updates about our services and tips.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full sm:w-[360px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-black placeholder:text-black/50 shadow outline-none focus:border-indigo-400/60"
                    />
                    <button
                      type="button"
                      className="w-full sm:w-auto px-6 py-3 rounded-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 shadow-lg hover:scale-[1.02] transition-all"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </>
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-none space-y-6 lg:sticky lg:top-[110px] h-fit">
            {recentPosts.length > 0 && (
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-lg">
                <h3 className="text-lg font-bold text-black">Recent Posts</h3>
                <div className="mt-5 space-y-4">
                  {recentPosts.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleReadMore(blogPosts.find((x) => x.id === p.id))}
                      className="w-full text-left flex gap-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-3"
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-14 w-14 rounded-xl object-cover flex-shrink-0 bg-gray-800"
                        onError={handleImgError}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-black line-clamp-2">{p.title}</p>
                        <p className="text-xs text-black/60 mt-1">{p.date}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {categories.length > 0 && (
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-lg">
                <h3 className="text-lg font-bold text-black">Categories</h3>
                <div className="mt-4 space-y-2">
                  <button
                    onClick={() => handleCategory("all")}
                    className={`w-full flex items-center justify-between rounded-2xl border px-4 py-3 transition ${
                      selectedCategory === "all"
                        ? "border-indigo-400/60 bg-indigo-500/20 text-black"
                        : "border-white/10 bg-white/5 text-black/75 hover:bg-white/10"
                    }`}
                  >
                    <span>All Categories</span>
                    <span className="text-black/60">{blogPosts.length}</span>
                  </button>

                  {categories.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => handleCategory(c.name)}
                      className={`w-full flex items-center justify-between rounded-2xl border px-4 py-3 transition ${
                        selectedCategory === c.name
                          ? "border-indigo-400/60 bg-indigo-500/20 text-black"
                          : "border-white/10 bg-white/5 text-black/75 hover:bg-white/10"
                      }`}
                    >
                      <span>{c.name}</span>
                      <span className="text-black/60">{c.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-lg">
              <h3 className="text-lg font-bold text-black">Tags</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className="px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/5 text-black/75 hover:bg-white/10 transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}