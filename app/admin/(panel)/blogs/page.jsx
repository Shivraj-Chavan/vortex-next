'use client';

import { Plus, Search, Filter, Edit, Trash2, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchBlogs, createBlog, updateBlog, deleteBlog } from './.././../../lib/api.js';
import { getImageUrl, FALLBACK_IMAGE } from './../../../lib/imageUtils.js';
import toast from 'react-hot-toast';

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [formData, setFormData] = useState({
    title: '', author: '', slug: '', category: '',
    image: null, imagePreview: '', content: ''
  });
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => { loadBlogs(); }, []);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetchBlogs();
      const blogsData = response.data?.data || response.data?.blogs || response.data || [];
      const formatted = Array.isArray(blogsData) ? blogsData.map((blog) => ({
        id: blog.id,
        title: blog.title || 'Untitled',
        author: blog.author || 'Admin',
        slug: blog.slug || `blog-${blog.id}`,
        category: blog.category || 'General',
        image: getImageUrl(blog.image), 
        rawImage: blog.image,
        content: blog.content || '',
        date: blog.created_at
          ? new Date(blog.created_at).toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' })
          : new Date().toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }),
        status: blog.status || 'Published'
      })) : [];
      setBlogs(formatted);
      setError(null);
    } catch (err) {
      console.error('Failed to load blogs:', err);
      toast.error('Failed to load blogs');
      setError('Failed to load blogs: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + itemsPerPage);

  const generateUniqueSlug = (title) => {
    const base = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `${base}`;
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      const file = files[0];
      setFormData(prev => ({ ...prev, image: file, imagePreview: URL.createObjectURL(file) }));
    } else if (name === 'title' && !editMode) {
      setFormData(prev => ({ ...prev, title: value, slug: generateUniqueSlug(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const resetForm = () => {
    setFormData({ title: '', author: '', slug: '', category: '', image: null, imagePreview: '', content: '' });
    setEditMode(false);
    setSelectedBlogId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitLoading(true);
      const fd = new FormData();
      fd.append('title', formData.title);
      fd.append('author', formData.author);
      fd.append('slug', formData.slug || generateUniqueSlug(formData.title));
      fd.append('category', formData.category);
      fd.append('content', formData.content);
      if (formData.image) fd.append('image', formData.image);

      if (editMode && selectedBlogId) {
        await updateBlog(selectedBlogId, fd, true);
      } else {
        await createBlog(fd);
      }

      await loadBlogs();
      setShowModal(false);
      resetForm();
      toast.success('Blog saved successfully!');
    } catch (err) {
      console.error('Failed to save blog:', err);
      toast.error('Failed to save blog');
      let msg = 'Failed to save blog. ';
      if (err.code === 'ECONNABORTED') msg = 'Timeout: Server took too long.';
      else if (err.response?.status === 404) msg = '404: API not found. Check backend.';
      else if (err.response?.status === 409) msg = 'Slug already exists. Change the slug.';
      else if (err.response?.status === 401) msg = 'Not authorized. Check adminToken.';
      else if (err.response?.status === 400) msg = 'Bad request: ' + (err.response.data?.message || 'Check all fields');
      else msg += err.response?.data?.message || err.message;
      alert(msg);
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleEdit = (blog) => {
    setEditMode(true);
    setSelectedBlogId(blog.id);
    setFormData({
      title: blog.title, author: blog.author, slug: blog.slug,
      category: blog.category, image: null,
      imagePreview: blog.image || '',
      content: blog.content
    });
    // toast.success('Blog edited Successfully !')
    setShowModal(true);
  };

  const handleDelete = async (blogId) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      await deleteBlog(blogId);
      await loadBlogs();
      toast.success('Blog deleted successfully!');
    } catch (err) {
      toast.error('Failed to delete: ' + (err.response?.data?.message || err.message));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 mt-15">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Blog Posts</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage all your blog content</p>
        </div>
        <button onClick={() => { resetForm(); setShowModal(true); }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
          <Plus className="w-5 h-5" /> New Post
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Posts', value: blogs.length, color: 'text-gray-900 dark:text-white' },
          { label: 'Published', value: blogs.filter(b => b.status === 'Published').length, color: 'text-green-600 dark:text-green-400' },
          { label: 'Drafts', value: blogs.filter(b => b.status === 'Draft').length, color: 'text-orange-600 dark:text-orange-400' },
          { label: 'Categories', value: new Set(blogs.map(b => b.category)).size, color: 'text-purple-600 dark:text-purple-400' },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{label}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search posts..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Filter className="w-4 h-4" /><span className="text-sm">Filter</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">{error}</div>
      )}

      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
              <tr>
                {['Image','Title','Author','Slug','Category','Status','Actions'].map(h => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {currentBlogs.length === 0 ? (
                <tr><td colSpan={7} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">No blog posts found.</td></tr>
              ) : currentBlogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-16 rounded-lg object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900 dark:text-white truncate max-w-xs">{blog.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{blog.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-semibold">{blog.author.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{blog.author}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">{blog.slug}</code>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">{blog.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${blog.status === 'Published' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'}`}>
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleEdit(blog)} className="p-2 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors group">
                        <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                      </button>
                      {/* <a href="/blog" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors group">
                        <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                      </a> */}
                      <button
                        onClick={() => setSelectedBlog(blog)}
                        className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors group"
                      >
                        <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                      </button>
                      <button onClick={() => handleDelete(blog.id)} className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors group">
                        <Trash2 className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredBlogs.length)} of {filteredBlogs.length} posts
          </p>
          <div className="flex items-center gap-2">
            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button key={page} onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === page ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                {page}  
              </button>
            ))}
            <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{editMode ? 'Edit Post' : 'Add New Post'}</h2>
              <button onClick={() => { setShowModal(false); resetForm(); }} disabled={submitLoading}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-50">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Title *</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required disabled={submitLoading}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white disabled:opacity-50"
                  placeholder="Enter post title" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Author Name *</label>
                <input type="text" name="author" value={formData.author} onChange={handleInputChange} required disabled={submitLoading}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white disabled:opacity-50"
                  placeholder="Enter author name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Slug *</label>
                <input type="text" name="slug" value={formData.slug} onChange={handleInputChange} required disabled={submitLoading}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white font-mono text-sm disabled:opacity-50"
                  placeholder="post-url-slug" />
                <p className="text-xs text-gray-500 mt-1">Auto-generated from title. Editable.</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Category *</label>
                <select name="category" value={formData.category} onChange={handleInputChange} required disabled={submitLoading}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white disabled:opacity-50">
                  <option value="">Select a category</option>
                  {['Development','Design','AI & ML','Architecture','Backend','Security','Performance','General','Other'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Image {editMode ? '(leave empty to keep existing)' : ''}
                </label>
                <input type="file" name="image" accept="image/*" onChange={handleInputChange} disabled={submitLoading}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white disabled:opacity-50" />
                {formData.imagePreview && (
                  <div className="mt-3 flex items-center gap-3">
                    <img src={formData.imagePreview} alt="Preview"
                      className="w-32 h-32 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                      onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }} />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formData.image ? '✅ New image selected' : '📌 Current image (kept if no new file chosen)'}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Content *</label>
                <textarea name="content" value={formData.content} onChange={handleInputChange} required disabled={submitLoading} rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white resize-none disabled:opacity-50"
                  placeholder="Write your post content here..." />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => { setShowModal(false); resetForm(); }} disabled={submitLoading}
                  className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium disabled:opacity-50">
                  Cancel
                </button>
                <button type="submit" disabled={submitLoading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {submitLoading
                    ? <><div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>Saving...</>
                    : <>{editMode ? 'Update Post' : 'Add Post'}</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

{selectedBlog && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
    <div className="bg-white dark:bg-gray-900 w-full max-w-3xl rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto relative">

      {/* Close Button */}
      <button
        onClick={() => setSelectedBlog(null)}
        className="absolute top-4 right-4 text-black cursor-pointer bg-white px-2 py-1 rounded-full font-extrabold"
      >
        ✕
      </button>

      {/* Image */}
      {selectedBlog.image && (
        <img
          src={selectedBlog.image}
          alt={selectedBlog.title}
          className="w-full h-64 object-cover"
        />
      )}

      {/* Content */}
      <div className="p-6 space-y-4">

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {selectedBlog.title}
        </h2>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 border-b pb-3">
          <span><strong>Author:</strong> {selectedBlog.author}</span>
          <span><strong>Category:</strong> {selectedBlog.category}</span>
          <span>
            <strong>Created:</strong>{" "}
            {new Date(selectedBlog.created_at).toLocaleDateString()}
          </span>
          <span>
            <strong>Updated:</strong>{" "}
            {new Date(selectedBlog.updated_at).toLocaleDateString()}
          </span>
          {selectedBlog.read_time && (
            <span><strong>Read Time:</strong> {selectedBlog.read_time} min</span>
          )}
        </div>

        {/* Slug */}
        <div className="text-xs text-gray-400 break-all">
          Slug: {selectedBlog.slug}
        </div>

        {/* Content */}
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {selectedBlog.content}
        </div>

      </div>
    </div>
  </div>
)}
    </div>
  );
}