import axios from "axios";

const API = axios.create({
  baseURL: "http://69.62.84.113:5025/api",
  timeout: 60000,
});

API.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// LOGIN
export const adminLoginApi = (data) => API.post("/admin/login", data);

// BLOG - Public
export const fetchBlogs = () => API.get("/blog");
export const fetchBlogBySlug = (slug) => API.get(`/blog/slug/${slug}`);

// BLOG - Admin
export const fetchBlogById = (id) => API.get(`/blog/id/${id}`);

export const createBlog = (formData) =>
  API.post("/blog", formData, {
    headers: { "Content-Type": "multipart/form-data" }, 
    timeout: 60000,
  });

  export const updateBlog = (id, data, token) =>  
  API.put(`/blog/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` } 
  });

export const deleteBlog = (id) => API.delete(`/blog/${id}`);

// CONTACT
export const createContact = (data) => API.post("/contact", data);
export const getContacts = () => API.get("/contact");
export const deleteContactApi = (id) => API.delete(`/contact/${id}`);


// DASHBOARD - Admin
export const fetchDashboard = () => API.get("/dashboard");

export default API;