"use client";

import { useState, useMemo } from "react";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import { BLOGS } from "@/src/data/blog.data";
import Image from "next/image";

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Fire Panels");

  // Extract unique categories
  const categories = useMemo(() => {
    const allCategories = BLOGS.flatMap((blog) => blog.categories);
    return [...Array.from(new Set(allCategories))];
  }, []);

  // Filter blogs
  const filteredBlogs =
    selectedCategory === "Fire Panels"
      ? BLOGS.filter((blog) =>
        blog.categories.includes(selectedCategory)
      )
      : BLOGS.filter((blog) =>
        blog.categories.includes(selectedCategory)
      );

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <main className="w-full pt-24 bg-white">
        <HeaderComponent active="BLOG" />

        <div className="max-w-7xl mx-auto px-6 mt-5 grid grid-cols-1 lg:grid-cols-3 gap-12 py-20">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2">

            <h1 className="text-3xl font-bold text-[#322986] mb-8">
              {selectedCategory === "All"
                ? "Latest Blogs"
                : selectedCategory}
            </h1>

            {filteredBlogs.length === 0 ? (
              <p className="text-gray-500">No blogs found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white transition overflow-hidden"
                  >
                    <div className="w-full h-64 border-4 border-[#A5A3A3] rounded-xl overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-5 space-y-3">
                      <p className="text-sm text-gray-500">
                        {blog.date}
                      </p>

                      <h2 className="text-lg font-bold text-[#322986]">
                        {blog.title}
                      </h2>

                      <p className="text-gray-600 text-sm">
                        {blog.description}
                      </p>

                      <button className="text-[#d94536] font-semibold hover:underline">
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-10">

            {/* Search Bar (UI only for now) */}
            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-[#322986] mb-4">
                Search
              </h3>
              <input
                type="text"
                placeholder="Search blogs..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#322986]"
              />
            </div>

            {/* Featured Posts */}
            <div className="bg-white p-4">
              <h3 className="text-lg font-bold text-[#322986] mb-4">
                Featured Posts
              </h3>

              <div className="space-y-4">
                {BLOGS.filter((blog) => [2, 3, 4].includes(blog.id)).map((blog) => (
                  <div
                    key={blog.id}
                    className="flex gap-4 items-center cursor-pointer group"
                  >
                    {/* Square Image */}
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>

                    {/* Title */}
                    <h4 className="text-md font-semibold text-gray-800 group-hover:text-[#322986] transition">
                      {blog.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-[#322986] mb-4">
                Categories
              </h3>

              <ul className="space-y-2">
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`cursor-pointer ${selectedCategory === category
                      ? "text-[#322986] font-semibold"
                      : "text-gray-700"
                      } hover:text-[#322986]`}
                  >
                    • {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <FooterComponent />
      </main>
    </div>
  );
}