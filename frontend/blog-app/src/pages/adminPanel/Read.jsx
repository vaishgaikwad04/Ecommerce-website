// src/pages/BlogList.jsx
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaTrash,
  FaEdit,
  FaPlus,
  FaSearch
} from "react-icons/fa";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // table state
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  // simplified fixed columns for clarity
  const [sortState, setSortState] = useState({ key: "", direction: "asc" });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get("https://ecommerce-website-blog.onrender.com/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      setError("Failed to load blogs");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Delete blog (single)
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`https://ecommerce-website-blog.onrender.com//api/blogs/${id}`);
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
      } catch (err) {
        console.error(err);
        alert("Delete failed");
      }
    }
  };

  // Sorting helper from dropdown
  const setSortFromOption = (option) => {
    switch (option) {
      case "TITLE_ASC":
        setSortState({ key: "title", direction: "asc" });
        break;
      case "TITLE_DESC":
        setSortState({ key: "title", direction: "desc" });
        break;
      case "AUTHOR_ASC":
        setSortState({ key: "author", direction: "asc" });
        break;
      case "AUTHOR_DESC":
        setSortState({ key: "author", direction: "desc" });
        break;
      default:
        setSortState({ key: "", direction: "asc" });
    }
  };

  const sortedBlogs = useMemo(() => {
    if (!sortState.key) return blogs;
    const sorted = [...blogs].sort((a, b) => {
      const aVal = (a[sortState.key] || "").toString().toLowerCase();
      const bVal = (b[sortState.key] || "").toString().toLowerCase();
      if (aVal < bVal) return sortState.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortState.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [blogs, sortState]);

  // Filtered
  const filteredBlogs = useMemo(() => {
    const term = search.trim().toLowerCase();
    return sortedBlogs.filter((b) => {
      const matchesSearch = term
        ? [b.title, b.author, b.type, b.content]
            .filter(Boolean)
            .some((x) => x.toString().toLowerCase().includes(term))
        : true;
      const matchesType = typeFilter === "All" ? true : b.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [sortedBlogs, search, typeFilter]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pagedBlogs = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredBlogs.slice(start, start + pageSize);
  }, [filteredBlogs, currentPage, pageSize]);


  return (
    <div className="min-h-screen bg-[#f6f7fb] text-gray-900">
      {/* App bar */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">blog</div>
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search posts, authors…"
              className="w-full pl-9 pr-3 py-2 rounded-full bg-gray-100 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <Link to="/create" className="hidden sm:inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-md text-sm hover:bg-indigo-500">
            <FaPlus /> New
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6">
        {/* Slim sidebar */}
        <aside className="hidden md:flex flex-col items-center gap-3 w-16 pt-2">
          <div className="w-12 h-12 rounded-xl bg-white shadow border flex items-center justify-center text-indigo-600">B</div>
          <Link to="/read" className="w-12 h-12 rounded-xl bg-white shadow border flex items-center justify-center hover:text-indigo-600" title="All Blogs">🏷️</Link>
          <Link to="/create" className="w-12 h-12 rounded-xl bg-white shadow border flex items-center justify-center hover:text-indigo-600" title="Create">＋</Link>
          <Link to="/" className="w-12 h-12 rounded-xl bg-white shadow border flex items-center justify-center hover:text-indigo-600" title="Home">⌂</Link>
        </aside>

        {/* Main grid */}
        <main className="flex-1">
          {/* Filters row */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                      <div>
              <div className="flex items-center gap-2">
                <select
                  value={typeFilter}
                  onChange={(e) => { setTypeFilter(e.target.value); setPage(1); }}
                  className="py-2 px-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="All">All Types</option>
                  <option value="Tech">Tech</option>
                  <option value="Travel">Travel</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
                <select
                  onChange={(e) => setSortFromOption(e.target.value)}
                  className="py-2 px-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue="TITLE_ASC"
                >
                  <option value="TITLE_ASC">Title A–Z</option>
                  <option value="TITLE_DESC">Title Z–A</option>
                  <option value="AUTHOR_ASC">Author A–Z</option>
                  <option value="AUTHOR_DESC">Author Z–A</option>
                </select>
              </div>
            </div>
          </div>

          {/* Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border rounded-xl shadow-sm p-4">
              <p className="text-sm text-gray-500">Total Posts</p>
              <p className="text-2xl font-semibold">{blogs.length}</p>
            </div>
            <div className="bg-white border rounded-xl shadow-sm p-4">
              <p className="text-sm text-gray-500">Filtered</p>
              <p className="text-2xl font-semibold">{filteredBlogs.length}</p>
            </div>
            <div className="bg-white border rounded-xl shadow-sm p-4">
              <p className="text-sm text-gray-500">This Page</p>
              <p className="text-2xl font-semibold">{pagedBlogs.length}</p>
            </div>
          </div>

          {/* Two-column layout like inspiration */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent posts card list */}
            <section className="lg:col-span-2 space-y-4">
              {loading && (
                <div className="bg-white border rounded-xl shadow-sm p-8 text-center text-gray-500">Loading blogs…</div>
              )}
              {!loading && error && (
                <div className="bg-white border rounded-xl shadow-sm p-8 text-center text-red-600">{error}</div>
              )}
              {!loading && !error && pagedBlogs.length === 0 && (
                <div className="bg-white border rounded-xl shadow-sm p-8 text-center text-gray-500">No results found.</div>
              )}
              {!loading && !error && pagedBlogs.map((blog) => (
                <article key={blog._id} className="bg-white border rounded-2xl shadow-sm overflow-hidden">
                  <div className="flex gap-4 p-4">
                    <div className="flex-shrink-0">
                      {blog.image && blog.image.length > 0 ? (
                        <img src={blog.image[0]} alt={blog.title} className="h-24 w-40 object-cover rounded-lg border" />
                      ) : (
                        <div className="h-24 w-40 rounded-lg bg-gray-100 border flex items-center justify-center text-gray-400">No Image</div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold truncate">{blog.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">{blog.type || 'Other'}</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">by {blog.author || 'Unknown'}</p>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">{blog.content}</p>
                      <div className="mt-3 flex items-center justify-end gap-2">
                        <Link to={`/edit/${blog._id}`} className="inline-flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 px-3 py-1.5 rounded-md text-xs font-medium text-white">
                          <FaEdit /> Edit
                        </Link>
                        <button onClick={() => handleDelete(blog._id)} className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-500 px-3 py-1.5 rounded-md text-xs font-medium text-white">
                          <FaTrash /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              {/* Pagination */}
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, filteredBlogs.length)} of {filteredBlogs.length}
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={pageSize}
                    onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
                    className="border rounded-md bg-white px-2 py-1"
                  >
                    {[5, 10, 20, 50].map((n) => (
                      <option key={n} value={n}>{n} / page</option>
                    ))}
                  </select>
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} className={`px-3 py-1.5 border rounded-l-md ${currentPage === 1 ? 'bg-white text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}>Prev</button>
                    <span className="px-3 py-1.5 border-t border-b bg-white text-sm">{currentPage} / {totalPages}</span>
                    <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className={`px-3 py-1.5 border rounded-r-md ${currentPage === totalPages ? 'bg-white text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}>Next</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Right mini-widgets */}
            <aside className="space-y-4">
              <div className="bg-white border rounded-2xl shadow-sm p-4">
                <h4 className="font-semibold mb-2">Statistics</h4>
                <div className="h-24 rounded-md bg-gradient-to-r from-indigo-50 to-purple-50 border flex items-center justify-center text-xs text-gray-500">mini chart</div>
              </div>
              <div className="bg-white border rounded-2xl shadow-sm p-4">
                <h4 className="font-semibold mb-2">Quick Actions</h4>
                <div className="flex flex-col gap-2">
                  <Link to="/create" className="px-3 py-2 rounded-md border hover:bg-gray-50">Create new post</Link>
                  <button onClick={() => { setSearch(''); setTypeFilter('All'); setPage(1); }} className="px-3 py-2 rounded-md border hover:bg-gray-50 text-left">Clear filters</button>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
