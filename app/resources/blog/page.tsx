"use client";

import { useState, useMemo, useRef } from "react";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import { BLOGS } from "@/src/data/blog.data";
import SearchIcon from "@/public/blogs/search.svg";
import LeftArrow from "@/public/blogs/left-cheveron.svg";
import RightArrow from "@/public/blogs/right-cheveron.svg";
import Image from "next/image";
import CalendarIcon from "@/public/common/calendar-icon.svg"
import CommentIcon from "@/public/common/notes-icon.svg"
import { useRouter } from "next/navigation";

export default function Blogs() {

  const router = useRouter();
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Fire Panels");

  const [searchQuery, setSearchQuery] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const allCategories = BLOGS.flatMap((blog) => blog.categories);

    return ["All", ...Array.from(new Set(allCategories))];
  }, []);

  // Category slider
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

  // Filter blogs by category + search
  const filteredBlogs = useMemo(() => {
    return BLOGS.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" ||
        blog.categories.includes(selectedCategory);

      const search = searchQuery.toLowerCase().trim();

      const matchesSearch =
        !search ||
        blog.title.toLowerCase().includes(search) ||
        blog.description.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured posts
  const featuredBlogs = BLOGS.filter((blog) =>
    [2, 3, 4].includes(blog.id)
  );

  return (
    <div className="flex min-h-screen bg-white">
      <main className="w-full pt-24">
        <HeaderComponent active="BLOG" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* =========================================================
              TOP SECTION
              Left  : Categories
              Right : Search
              ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* LEFT - Categories */}
            <div className="lg:col-span-8 flex items-center gap-3 min-w-0">
              {/* Left Arrow */}
              <button
                onClick={scrollLeft}
                className="shrink-0 flex items-center justify-center"
                aria-label="Previous categories"
              >
                <Image
                  src={LeftArrow}
                  alt="Previous"
                  className="w-6 h-6"
                />
              </button>

              {/* Category Slider */}
              <div
                ref={scrollRef}
                className="
      flex
      items-center
      gap-3
      overflow-x-auto
      overflow-y-hidden
      flex-1
      min-w-0
      hide-scrollbar
      scroll-smooth
    "
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
          shrink-0
          whitespace-nowrap
          rounded-2xl
          border
          px-4
          sm:px-5
          py-2
          text-sm
          sm:text-base
          lg:text-lg
          xl:text-xl
          font-medium
          transition-all
          ${selectedCategory === category
                        ? "bg-[#E34334] border-[#E34334] text-white"
                        : "border-[#A8B3D1] text-[#5F6F91] hover:border-[#322986] hover:text-[#322986]"
                      }
        `}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={scrollRight}
                className="shrink-0 flex items-center justify-center"
                aria-label="Next categories"
              >
                <Image
                  src={RightArrow}
                  alt="Next"
                  className="w-6 h-6"
                />
              </button>
            </div>

            {/* RIGHT - Search */}
            <div className="lg:col-span-4">
              <div className="flex h-12 w-full items-center rounded-xl border border-[#A8B3D1] px-4">
                <Image
                  src={SearchIcon}
                  alt="Search"
                  className="mr-3 h-5 w-5 shrink-0"
                />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for Blogs"
                  className="w-full bg-transparent text-base sm:text-lg text-[#5F6F91] outline-none placeholder:text-[#5F6F91]"
                />
              </div>
            </div>
          </div>

          {/* =========================================================
              MAIN CONTENT
              Left  : Blogs
              Right : Featured Posts
              ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-8">
            {/* =======================================================
                LEFT COLUMN - BLOGS
                ======================================================= */}
            <section className="lg:col-span-8 lg:h-[420px]">
              {filteredBlogs.length === 0 ? (
                <div className="flex items-center justify-center py-16">
                  <p className="text-gray-500 text-base">
                    No blogs found.
                  </p>
                </div>
              ) : (
                <div className="lg:h-full lg:overflow-y-auto lg:pr-3 lg:py-3 hide-scrollbar">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {filteredBlogs.map((blog) => (
                      <article
                        key={blog.id}
                        className="bg-white overflow-hidden rounded-2xl shadow-[0_3px_8px_rgba(0,0,0,0.18)]"
                      >
                        {/* Blog Image */}
                        <div className="relative w-full h-[168px] overflow-hidden">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Blog Content */}
                        <div className="p-3 flex flex-col">
                          {/* Title */}
                          <h2 className="text-[18px] font-bold text-[#322986] leading-[1.25] mb-2">
                            {blog.title}
                          </h2>

                          {/* Date + Comments */}
                          <div className="flex items-center gap-3 text-[11px] text-[#222] mb-3">
                            <div className="flex items-center gap-1">
                              <div className="flex items-center gap-1">
                                <Image
                                  src={CalendarIcon}
                                  alt=""
                                  className="h-3.5 w-3.5"
                                />
                                <span>{blog.date}</span>
                              </div>
                              <span>{blog.date}</span>
                            </div>

                            <div className="flex items-center gap-1">
                              <div className="flex items-center gap-1">
                                <Image
                                  src={CommentIcon}
                                  alt=""
                                  className="h-3.5 w-3.5"
                                />
                                <span>{blog.date}</span>
                              </div>
                              <span>1 comments</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-[12px] text-[#5F6F91] leading-[1.35] line-clamp-3 mb-4">
                            {blog.description}
                          </p>

                          {/* Read More */}
                          <button
                            onClick={() => router.push(`/resources/blog/${blog.id}`)}
                            className="
                  w-full
                  h-[29px]
                  rounded-md
                  bg-[#E34334]
                  text-white
                  text-[11px]
                  font-semibold
                  flex
                  items-center
                  justify-center
                  hover:bg-[#d4382b]
                  transition-colors
                "
                          >
                            Read More &gt;&gt;
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* =======================================================
                RIGHT COLUMN - FEATURED POSTS
                ======================================================= */}
            <aside className="lg:col-span-4">
              <div className="bg-white rounded-2xl shadow-[0_3px_12px_rgba(0,0,0,0.12)] p-4">
                {/* Heading */}
                <h3 className="text-[20px] font-semibold text-[#E34334] uppercase pb-3 border-b border-[#C9CEDA]">
                  Featured Posts
                </h3>

                {/* Featured Posts */}
                <div>
                  {featuredBlogs.map((blog, index) => (
                    <article
                      key={blog.id}
                      className={`
            flex items-center gap-3 py-4
            cursor-pointer group
            ${index !== featuredBlogs.length - 1
                          ? "border-b border-[#C9CEDA]"
                          : ""
                        }
          `}
                    >
                      {/* Image */}
                      <div className="relative w-[64px] h-[64px] flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Title */}
                      <h4 className="text-[16px] font-medium leading-[1.25] text-black group-hover:text-[#E34334] transition-colors">
                        {blog.title}
                      </h4>
                    </article>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        <FooterComponent />
      </main>
    </div>
  );
}