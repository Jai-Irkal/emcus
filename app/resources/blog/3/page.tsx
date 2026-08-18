"use client";

import { BLOGS } from "@/src/data/blog.data";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import BackIcon from "@/public/common/back-arrow-icon.svg";
import LinkedinIcon from "@/public/blogs/linkedin-icon.svg";
import TwitterIcon from "@/public/blogs/twitter-icon.svg";
import FacebookIcon from "@/public/blogs/facebook-icon.svg";

export default function BlogThree() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const blog = BLOGS.find((b) => b.id === 3);

    const categories = useMemo(() => {
        const allCategories = BLOGS.flatMap((blog) => blog.categories);
        return [...Array.from(new Set(allCategories))];
    }, []);

    if (!blog) return null;

    const [comments, setComments] = useState<any[]>([]);
    const [saveDetails, setSaveDetails] = useState(false);

    const [commentForm, setCommentForm] = useState({
        name: "",
        email: "",
        comment: "",
    });

    useEffect(() => {
        fetchComments();

        const savedCommentUser = localStorage.getItem("blogCommentUser");

        if (savedCommentUser) {
            const { name, email } = JSON.parse(savedCommentUser);

            setCommentForm((prev) => ({
                ...prev,
                name,
                email,
            }));

            setSaveDetails(true);
        }
    }, []);

    const fetchComments = async () => {
        const response = await fetch("/api/blogs/3/comments");

        const data = await response.json();

        setComments(data);
    };

    const handleShare = (
        platform: "x" | "facebook" | "linkedin"
    ) => {
        const url = window.location.href;
        const title = blog.title;

        let shareUrl = "";

        switch (platform) {
            case "x":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    url
                )}&text=${encodeURIComponent(title)}`;
                break;

            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    url
                )}`;
                break;

            case "linkedin":
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    url
                )}`;
                break;
        }

        window.open(
            shareUrl,
            "_blank",
            "width=600,height=500,noopener,noreferrer"
        );
    };

    const handleSubmitComment = async () => {
        const response = await fetch("/api/blogs/3/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(commentForm),
        });

        if (!response.ok) {
            return;
        }

        if (saveDetails) {
            localStorage.setItem(
                "blogCommentUser",
                JSON.stringify({
                    name: commentForm.name,
                    email: commentForm.email,
                })
            );
        } else {
            localStorage.removeItem("blogCommentUser");
        }

        setCommentForm((prev) => ({
            ...prev,
            comment: "",
        }));

        fetchComments();
    };

    return (
        <div className="min-h-screen bg-[#f5f5f5]">
            <main className="w-full pt-24 bg-white">
                <HeaderComponent active="BLOG" />

                {/* =========================================================
                    BLOG PAGE
                ========================================================= */}

                <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* =======================================================
                        BLOG ARTICLE
                    ======================================================= */}

                    <article className="w-full">

                        {/* Back + Title */}
                        <div className="flex items-center gap-2 mb-5">
                            <button
                                onClick={() => window.history.back()}
                                className="relative flex h-8 w-8 shrink-0 items-center justify-center text-[#222] hover:text-[#E34334] transition-colors hover:cursor-pointer"
                                aria-label="Go back"
                            >
                                <Image
                                    src={BackIcon}
                                    alt="Back"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </button>

                            <h1 className="text-[17px] sm:text-[20px] lg:text-[22px] font-bold text-[#111] uppercase leading-tight">
                                {blog.title}
                            </h1>
                        </div>

                        {/* =====================================================
                            HERO IMAGE
                        ===================================================== */}

                        <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[360px] overflow-hidden rounded-lg">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>

                        {/* =====================================================
                            ARTICLE CONTENT
                        ===================================================== */}

                        <div
                            className="
                                mt-5
                                text-[12px]
                                sm:text-[13px]
                                text-[#222]
                                leading-[1.55]
                            "
                        >

                            {/* Intro */}
                            <p className="mb-5">
                                Fire panels are essential life safety products that adhere to specific standards in different countries, ensuring they meet stringent safety and performance requirements. Some of the prominent standards governing fire panels include:
                            </p>

                            {/* Standards Bullet List */}
                            <section className="mb-6">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>NFPA 72</li>
                                    <li>EN 54</li>
                                    <li>UL 864</li>
                                    <li>ULC-S527</li>
                                    <li>BS 5839</li>
                                    <li>AS 7240</li>
                                    <li>ISO 7240</li>
                                </ul>
                            </section>

                            <p className="mb-5">
                                During the design phase of fire panels, all necessary standard requirements must be considered, including hardware, software, firmware, and mechanical aspects. Companies like EMCUS Technologies can help with development and certification, ensuring compliance with standards and a streamlined approval process.
                            </p>

                            <p className="mb-5">
                                The critical communication fast path for fire panels involves achieving an output activation delay of 3 to 10 seconds. Fire alarm panels often integrate cross-branding with different loop/SLC protocols, leading to various OEM branding combinations.
                            </p>

                            <p className="font-bold mb-4">
                                Various certification bodies, such as:
                            </p>

                            {/* Certification Bodies */}
                            <section className="mb-6">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Underwriters Laboratories (UL)</li>
                                    <li>Intertek</li>
                                    <li>BAFE</li>
                                    <li>LPCB</li>
                                    <li>FM Approvals</li>
                                    <li>CSA Group</li>
                                    <li>VdS</li>
                                </ul>
                            </section>

                            <p className="mb-7">
                                play crucial roles in evaluating and certifying fire panels for compliance with safety standards. These certifications are crucial for fire safety professionals, building owners, and authorities to ensure the panels’ reliability during emergencies.
                            </p>

                            {/* ===================================================
                                TAGS + SHARE
                            =================================================== */}

                            <div className="pt-1">
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px]">

                                    {/* Tags */}
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-black font-bold text-[16px]">
                                            Tags :
                                        </span>

                                        {blog.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 rounded-[3px] border border-[#E34334] text-[#E34334] bg-[#FFF2F2] text-[16px] leading-none"
                                            >
                                                {tag.charAt(0).toUpperCase() +
                                                    tag.slice(1)}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Share */}
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-black font-bold text-[16px]">
                                            Share :
                                        </span>

                                        {/* LinkedIn */}
                                        <a
                                            onClick={() =>
                                                handleShare("linkedin")
                                            }
                                            aria-label="Share on LinkedIn"
                                            className="w-[20px] h-[20px] flex items-center justify-center bg-[#2867B2] text-white rounded-[2px] cursor-pointer"
                                        >
                                            <Image
                                                src={LinkedinIcon}
                                                alt="linkedin"
                                            />
                                        </a>

                                        {/* Facebook */}
                                        <a
                                            onClick={() =>
                                                handleShare("facebook")
                                            }
                                            aria-label="Share on Facebook"
                                            className="w-[20px] h-[20px] flex items-center justify-center bg-[#1877F2] text-white rounded-[2px] cursor-pointer"
                                        >
                                            <Image
                                                src={FacebookIcon}
                                                alt="facebook"
                                            />
                                        </a>

                                        {/* Twitter */}
                                        <a
                                            onClick={() =>
                                                handleShare("x")
                                            }
                                            aria-label="Share on Twitter"
                                            className="w-[20px] h-[20px] flex items-center justify-center bg-[#1DA1F2] text-white rounded-[2px] cursor-pointer"
                                        >
                                            <Image
                                                src={TwitterIcon}
                                                alt="twitter"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ===================================================
                                LEAVE A REPLY
                            =================================================== */}

                            <section className="mt-4">
                                <h2 className="text-[13px] font-medium text-[#222] mb-2">
                                    Leave a Reply
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

                                    {/* Comment */}
                                    <div>
                                        <textarea
                                            value={commentForm.comment}
                                            onChange={(e) =>
                                                setCommentForm({
                                                    ...commentForm,
                                                    comment: e.target.value,
                                                })
                                            }
                                            placeholder="Type your comment here *"
                                            className="w-full h-[205px] resize-none rounded-[3px] border border-[#64748B] bg-[#F7F8F9] px-2 py-2 text-[12px] text-[#64748B] placeholder:text-[#6B7280] focus:outline-none focus:border-[#322986]"
                                        />
                                    </div>

                                    {/* Reply Form */}
                                    <div className="flex flex-col">

                                        <p className="text-[12px] text-[#222] font-bold leading-[1.25] mb-1">
                                            Your email address will not be
                                            published. Required fields are
                                            marked
                                            <span className="text-[#E34334]">
                                                {" "}*
                                            </span>
                                        </p>

                                        {/* Name */}
                                        <label className="text-[14px] mb-[2px]">
                                            Name{" "}
                                            <span className="text-[#E34334]">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter Name"
                                            value={commentForm.name}
                                            onChange={(e) =>
                                                setCommentForm({
                                                    ...commentForm,
                                                    name: e.target.value,
                                                })
                                            }
                                            className="w-full h-[30px] rounded-[2px] bg-[#F7F8F9] border border-[#64748B] px-2 text-[14px] mb-2 focus:outline-none focus:border-[#322986]"
                                        />

                                        {/* Email */}
                                        <label className="text-[14px] text-[#222] mb-[2px]">
                                            Email{" "}
                                            <span className="text-[#E34334]">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            value={commentForm.email}
                                            onChange={(e) =>
                                                setCommentForm({
                                                    ...commentForm,
                                                    email: e.target.value,
                                                })
                                            }
                                            className="w-full h-[30px] rounded-[2px] bg-[#F7F8F9] border border-[#64748B] px-2 text-[14px] mb-2 focus:outline-none focus:border-[#322986]"
                                        />

                                        {/* Checkbox */}
                                        <label className="flex items-start gap-1 text-[12px] text-[#555] leading-tight mb-2">
                                            <input
                                                type="checkbox"
                                                checked={saveDetails}
                                                onChange={(e) => setSaveDetails(e.target.checked)}
                                                className="mt-[1px] w-[12px] h-[12px]"
                                            />

                                            <span>
                                                Save my name, email, and website
                                                in this browser for the next
                                                time I comment.
                                            </span>
                                        </label>

                                        {/* Submit */}
                                        <button
                                            type="button"
                                            onClick={handleSubmitComment}
                                            className="cursor-pointer w-full h-[40px] rounded-[8px] bg-[#322986] text-white text-[16px] font-medium hover:bg-[#292270] transition-colors"
                                        >
                                            Post a Comment
                                        </button>

                                    </div>
                                </div>
                            </section>

                        </div>
                    </article>
                </div>

                <FooterComponent />
            </main>
        </div>
    );
}