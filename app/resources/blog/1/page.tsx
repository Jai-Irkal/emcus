"use client";

import { BLOGS } from "@/src/data/blog.data";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function BlogOne() {

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const blog = BLOGS.find((b) => b.id === 1);
  const categories = useMemo(() => {
    const allCategories = BLOGS.flatMap((blog) => blog.categories);
    return [...Array.from(new Set(allCategories))];
  }, []);

  if (!blog) return null;

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <main className="w-full pt-24 bg-white">
        <HeaderComponent active="BLOG" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 py-20">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">

            {/* Title */}
            <h1 className="text-3xl font-bold text-[#322986] uppercase">
              {blog.title}
            </h1>

            {/* Image */}
            <div className="relative w-full h-106 rounded-xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Share Icons */}
            <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-700">Share:</span>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#322986] text-[#322986] hover:bg-[#322986] hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.26 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24h-5V8z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#322986] text-[#322986] hover:bg-[#322986] hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.5c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85H17l-.4 2.88h-2.47v6.99A10 10 0 0022 12z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#322986] text-[#322986] hover:bg-[#322986] hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M24 4.56a9.93 9.93 0 01-2.82.77 4.93 4.93 0 002.17-2.72 9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.48A13.98 13.98 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.83 4.9 4.9 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 19.54 13.94 13.94 0 007.55 22c9.06 0 14.01-7.5 14.01-14v-.64A9.94 9.94 0 0024 4.56z" />
                  </svg>
                </a>
              </div>

            {/* Static Content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">

              <p>
                Cross zoning in a fire alarm panel is a strategy used to enhance reliability and reduce false alarms in fire detection systems. It involves dividing an area or building into multiple zones and installing fire detectors from different zones in a cross-wired or cross-connected manner.
              </p>

              {/* Subheading 1 */}
              <h2 className="text-2xl font-bold text-[#322986]">
                How Cross Zoning Typically Works
              </h2>

              <div className="space-y-4">

                <div>
                  <h3 className="font-semibold">1. Zone Division</h3>
                  <p>
                    The area or building is divided into two or more separate zones. Each zone may represent a distinct area or floor within a building or specific types of spaces (e.g., offices, corridors, storage areas).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">2. Detector Placement</h3>
                  <p>
                    Fire detectors (e.g., smoke detectors, heat detectors) are installed in each zone. However, instead of having detectors from one zone wired directly to that zone’s dedicated input on the fire alarm panel, they are also connected to inputs in other zones.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">3. Cross-Wiring</h3>
                  <p>
                    Detectors from different zones are cross-wired or interconnected, meaning they share connections with detectors from other zones. This configuration enables the fire alarm panel to receive signals from multiple detectors when a fire condition is detected.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">4. Verification</h3>
                  <p>
                    When a fire alarm is triggered, the fire alarm panel receives signals from multiple detectors in different zones. Before activating the full alarm, the system may require confirmation of the alarm signal from detectors in at least one other zone. This verification process helps reduce false alarms caused by a single detector.
                  </p>
                </div>

              </div>

              {/* Subheading 2 */}
              <h2 className="text-2xl font-bold text-[#322986]">
                Benefits of Cross Zoning
              </h2>

              <div className="space-y-4">

                <div>
                  <h3 className="font-semibold">1. Enhanced Reliability</h3>
                  <p>
                    Cross zoning increases the chances of detecting a genuine fire event, as it requires multiple detectors to activate before a full alarm is triggered. This redundancy helps in minimizing the risk of missed alarms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">2. Reduced False Alarms</h3>
                  <p>
                    By requiring confirmation from detectors in other zones, nuisance alarms caused by non-fire-related events (e.g., cooking smoke, dust) can be reduced.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">3. Early Warning</h3>
                  <p>
                    Cross zoning can provide early warning in situations where the fire is in its early stages, but the smoke or heat hasn’t spread to activate detectors in other zones.
                  </p>
                </div>

              </div>

              {/* Ending Paragraph */}
              <p className="italic font-bold">
                It is essential to design and implement cross zoning carefully to ensure it aligns with local fire safety regulations and the specific requirements of the building or area being protected. Properly engineered cross zoning systems can significantly improve the effectiveness of fire detection and response, enhancing overall life safety.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 pt-6">
                <span className="font-semibold text-gray-700">Tags: </span>
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 text-sm border border-[#322986] text-[#322986] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-700">Share:</span>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#322986] text-[#322986] hover:bg-[#322986] hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.26 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24h-5V8z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#322986] text-[#322986] hover:bg-[#322986] hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.5c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85H17l-.4 2.88h-2.47v6.99A10 10 0 0022 12z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#322986] text-[#322986] hover:bg-[#322986] hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M24 4.56a9.93 9.93 0 01-2.82.77 4.93 4.93 0 002.17-2.72 9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.48A13.98 13.98 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.83 4.9 4.9 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 19.54 13.94 13.94 0 007.55 22c9.06 0 14.01-7.5 14.01-14v-.64A9.94 9.94 0 0024 4.56z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN (Empty for now – can reuse sidebar later) */}
          <div>
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