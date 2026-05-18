"use client";

import { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const categories = ["All", "Web", "App", "E-Commerce", "UI/UX"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    description: "Modern online shopping platform with payment integration",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "App",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    description: "Secure mobile banking application with biometric auth",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Professional corporate website with CMS integration",
    tags: ["Next.js", "Tailwind", "Strapi"],
    link: "#",
    github: "#",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative bg-white text-black py-16 sm:py-20 overflow-hidden">
      {/* glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-200 blur-3xl opacity-40 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-200 blur-3xl opacity-40 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 mt-10">
        {/* HEADER */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-semibold text-indigo-600">
              Our Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Recently Completed
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explore real-world solutions built for clients across industries
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 rounded-lg text-sm font-medium transition
              ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-indigo-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden
              hover:shadow-lg hover:-translate-y-1 transition"
            >
              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={project.link}
                    className="p-2 rounded-full bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-2 rounded-full bg-white text-black hover:bg-black hover:text-white"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-indigo-50 text-indigo-600 mb-3">
                  {project.category}
                </span>

                <h3 className="text-lg font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center mb-10">
          <button className="px-6 sm:px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}