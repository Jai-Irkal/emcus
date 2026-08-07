"use client";

import { useState, useMemo, useRef } from "react";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import { BLOGS } from "@/src/data/blog.data";
import SearchIcon from "@/public/blogs/search.svg";
import LeftArrow from "@/public/blogs/left-cheveron.svg";
import RightArrow from "@/public/blogs/right-cheveron.svg";
import Image from "next/image";

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Fire Panels");

  // Extract unique categories
  const categories = useMemo(() => {
    const allCategories = BLOGS.flatMap((blog) => blog.categories);
    return ["All", ...Array.from(new Set(allCategories))];
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  // Filter blogs
  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "All") {
      return BLOGS;
    }

    return BLOGS.filter((blog) =>
      blog.categories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <main className="w-full pt-24 bg-white">
        <HeaderComponent active="BLOG" />

        <div className="flex items-center justify-between gap-6 px-8 py-4">
          {/* Categories */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="shrink-0"
            >
              <Image src={LeftArrow} alt="Previous" />
            </button>

            <div
              ref={scrollRef}
              className="flex items-center gap-3 overflow-hidden flex-1 w-[670px]"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-2xl border px-5 py-2 text-xl font-medium transition-all ${selectedCategory === category
                    ? "bg-[#E34334] border-[#E34334] text-white"
                    : "border-[#A8B3D1] text-[#5F6F91] hover:border-[#322986] hover:text-[#322986]"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="shrink-0"
            >
              <Image src={RightArrow} alt="Next" />
            </button>
          </div>

          {/* Search */}
          <div className="flex h-12 w-[320px] items-center rounded-xl border border-[#A8B3D1] px-4">
            <Image src={SearchIcon} alt="Search" className="mr-3 h-5 w-5" />

            <input
              type="text"
              placeholder="Search for Blogs"
              className="w-full bg-transparent text-lg text-[#5F6F91] outline-none placeholder:text-[#5F6F91]"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 py-6">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2">

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
          <div className="space-y-8">
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
          </div>

        </div>

        <FooterComponent />
      </main>
    </div>
  );
}