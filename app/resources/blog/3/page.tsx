"use client";

import { BLOGS } from "@/src/data/blog.data";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function BlogThree() {

    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const blog = BLOGS.find((b) => b.id === 3);

    const categories = useMemo(() => {
        const allCategories = BLOGS.flatMap((blog) => blog.categories);
        return [...Array.from(new Set(allCategories))];
    }, []);

    if (!blog) return null;

    const blogUrl = `https://yourdomain.com/blogs/3`;
    const encodedUrl = encodeURIComponent(blogUrl);
    const encodedTitle = encodeURIComponent(blog.title);

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

                        {/* Share */}
                        <div className="flex items-center gap-4">
                            <span className="font-semibold text-gray-700">Share:</span>

                            {[
                                {
                                    name: "LinkedIn",
                                    url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
                                    icon: (
                                        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.26 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24h-5V8z" />
                                    ),
                                },
                                {
                                    name: "Facebook",
                                    url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
                                    icon: (
                                        <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.5c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85H17l-.4 2.88h-2.47v6.99A10 10 0 0022 12z" />
                                    ),
                                },
                                {
                                    name: "Twitter",
                                    url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
                                    icon: (
                                        <path d="M24 4.56a9.93 9.93 0 01-2.82.77 4.93 4.93 0 002.17-2.72 9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.48A13.98 13.98 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.83 4.9 4.9 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 19.54 13.94 13.94 0 007.55 22c9.06 0 14.01-7.5 14.01-14v-.64A9.94 9.94 0 0024 4.56z" />
                                    ),
                                },
                            ].map((platform) => (
                                <a
                                    key={platform.name}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#322986] text-[#322986] hover:bg-[#322986] hover:text-white transition"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        {platform.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="space-y-6 text-gray-700 leading-relaxed">

                            <p>
                                Fire panels are essential life safety products that adhere to specific standards in different countries, ensuring they meet stringent safety and performance requirements. Some of the prominent standards governing fire panels include:
                            </p>

                            {/* Standards Bullet List */}
                            <ul className="list-disc pl-6 space-y-2">
                                <li>NFPA 72</li>
                                <li>EN 54</li>
                                <li>UL 864</li>
                                <li>ULC-S527</li>
                                <li>BS 5839</li>
                                <li>AS 7240</li>
                                <li>ISO 7240</li>
                            </ul>

                            <p>
                                During the design phase of fire panels, all necessary standard requirements must be considered, including hardware, software, firmware, and mechanical aspects. Companies like EMCUS Technologies can help with development and certification, ensuring compliance with standards and a streamlined approval process.
                            </p>

                            <p>
                                The critical communication fast path for fire panels involves achieving an output activation delay of 3 to 10 seconds. Fire alarm panels often integrate cross-branding with different loop/SLC protocols, leading to various OEM branding combinations.
                            </p>

                            <p className="font-semibold">
                                Various certification bodies, such as:
                            </p>

                            {/* Certification Bodies */}
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Underwriters Laboratories (UL)</li>
                                <li>Intertek</li>
                                <li>BAFE</li>
                                <li>LPCB</li>
                                <li>FM Approvals</li>
                                <li>CSA Group</li>
                                <li>VdS</li>
                            </ul>

                            <p>
                                play crucial roles in evaluating and certifying fire panels for compliance with safety standards. These certifications are crucial for fire safety professionals, building owners, and authorities to ensure the panels’ reliability during emergencies.
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

                                {[
                                    {
                                        name: "LinkedIn",
                                        url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
                                        icon: (
                                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.26 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24h-5V8z" />
                                        ),
                                    },
                                    {
                                        name: "Facebook",
                                        url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
                                        icon: (
                                            <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.5c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85H17l-.4 2.88h-2.47v6.99A10 10 0 0022 12z" />
                                        ),
                                    },
                                    {
                                        name: "Twitter",
                                        url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
                                        icon: (
                                            <path d="M24 4.56a9.93 9.93 0 01-2.82.77 4.93 4.93 0 002.17-2.72 9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.48A13.98 13.98 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.83 4.9 4.9 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 19.54 13.94 13.94 0 007.55 22c9.06 0 14.01-7.5 14.01-14v-.64A9.94 9.94 0 0024 4.56z" />
                                        ),
                                    },
                                ].map((platform) => (
                                    <a
                                        key={platform.name}
                                        href={platform.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#322986] text-[#322986] hover:bg-[#322986] hover:text-white transition"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            {platform.icon}
                                        </svg>
                                    </a>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* RIGHT COLUMN — reuse sidebar same as Blog 1 */}
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