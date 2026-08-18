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

export default function BlogOne() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const [comments, setComments] = useState<any[]>([]);

  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(commentForm.email.trim());

  const isCommentFormValid =
    commentForm.comment.trim() !== "" &&
    commentForm.name.trim() !== "" &&
    isEmailValid;

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

  const [saveDetails, setSaveDetails] = useState(false);

  const fetchComments = async () => {
    const response = await fetch("/api/blogs/1/comments");

    const data = await response.json();

    setComments(data);
  };

  const blog = BLOGS.find((b) => b.id === 1);

  const categories = useMemo(() => {
    const allCategories = BLOGS.flatMap((blog) => blog.categories);
    return [...Array.from(new Set(allCategories))];
  }, []);

  if (!blog) return null;

  const handleShare = (platform: "x" | "facebook" | "linkedin") => {
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
    if (!isCommentFormValid || isSubmitting) return;

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/blogs/1/comments", {
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

      await fetchComments();
    } finally {
      setIsSubmitting(false);
    }
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
                Cross zoning in a fire alarm panel is a strategy used to enhance
                reliability and reduce false alarms in fire detection systems. It
                involves dividing an area or building into multiple zones and
                installing fire detectors from different zones in a cross-wired
                or cross-connected manner.
              </p>

              {/* ===================================================
                  HOW CROSS ZONING WORKS
              =================================================== */}
              <section className="mb-6">
                <h2 className="text-[16px] sm:text-[18px] font-bold text-[#111] mb-4">
                  How Cross Zoning Typically Works
                </h2>

                <div className="space-y-4">

                  <div>
                    <h3 className="font-bold text-[#222] mb-1">
                      1. Zone Division
                    </h3>

                    <p>
                      The area or building is divided into two or more separate
                      zones. Each zone may represent a distinct area or floor
                      within a building or specific types of spaces (e.g., offices,
                      corridors, storage areas).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#222] mb-1">
                      2. Detector Placement
                    </h3>

                    <p>
                      Fire detectors (e.g., smoke detectors, heat detectors) are
                      installed in each zone. However, instead of having detectors
                      from one zone wired directly to that zone’s dedicated input
                      on the fire alarm panel, they are also connected to inputs in
                      other zones.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#222] mb-1">
                      3. Cross-Wiring
                    </h3>

                    <p>
                      Detectors from different zones are cross-wired or
                      interconnected, meaning they share connections with
                      detectors from other zones. This configuration enables the
                      fire alarm panel to receive signals from multiple detectors
                      when a fire condition is detected.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#222] mb-1">
                      4. Verification
                    </h3>

                    <p>
                      When a fire alarm is triggered, the fire alarm panel receives
                      signals from multiple detectors in different zones. Before
                      activating the full alarm, the system may require confirmation
                      of the alarm signal from detectors in at least one other zone.
                      This verification process helps reduce false alarms caused by
                      a single detector.
                    </p>
                  </div>

                </div>
              </section>

              {/* ===================================================
                  BENEFITS
              =================================================== */}
              <section className="mb-6">
                <h2 className="text-[16px] sm:text-[18px] font-bold text-[#111] mb-4">
                  Benefits of Cross Zoning
                </h2>

                <div className="space-y-4">

                  <div>
                    <h3 className="font-bold text-[#222] mb-1">
                      1. Enhanced Reliability
                    </h3>

                    <p>
                      Cross zoning increases the chances of detecting a genuine
                      fire event, as it requires multiple detectors to activate
                      before a full alarm is triggered. This redundancy helps in
                      minimizing the risk of missed alarms.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#222] mb-1">
                      2. Reduced False Alarms
                    </h3>

                    <p>
                      By requiring confirmation from detectors in other zones,
                      nuisance alarms caused by non-fire-related events (e.g.,
                      cooking smoke, dust) can be reduced.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#222] mb-1">
                      3. Early Warning
                    </h3>

                    <p>
                      Cross zoning can provide early warning in situations where
                      the fire is in its early stages, but the smoke or heat hasn’t
                      spread to activate detectors in other zones.
                    </p>
                  </div>

                </div>
              </section>

              {/* Ending Paragraph */}
              <p className="font-bold italic mb-7">
                It is essential to design and implement cross zoning carefully to
                ensure it aligns with local fire safety regulations and the
                specific requirements of the building or area being protected.
                Properly engineered cross zoning systems can significantly improve
                the effectiveness of fire detection and response, enhancing overall
                life safety.
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
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
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
                      onClick={() => handleShare("linkedin")}
                      aria-label="Share on LinkedIn"
                      className="w-[20px] h-[20px] flex items-center justify-center bg-[#2867B2] text-white rounded-[2px]"
                    >
                      <Image
                        src={LinkedinIcon}
                        alt="linkedin"
                      />
                    </a>

                    {/* Facebook */}
                    <a
                      onClick={() => handleShare("facebook")}
                      aria-label="Share on Facebook"
                      className="w-[20px] h-[20px] flex items-center justify-center bg-[#1877F2] text-white rounded-[2px]"
                    >
                      <Image
                        src={FacebookIcon}
                        alt="facebook"
                      />
                    </a>

                    {/* Twitter */}
                    <a
                      onClick={() => handleShare("x")}
                      aria-label="Share on Twitter"
                      className="w-[20px] h-[20px] flex items-center justify-center bg-[#1DA1F2] text-white rounded-[2px]"
                    >
                      <Image
                        src={TwitterIcon}
                        alt="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <section className="mt-4">
                <h2 className="text-[13px] font-medium text-[#222] mb-2">
                  Leave a Reply{" "}
                  <span className="text-[14px] font-normal text-[#E34334] [font-family:var(--font-jakarta-sans)]">
                    *
                  </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <div>
                    <textarea
                      value={commentForm.comment}
                      onChange={(e) =>
                        setCommentForm({
                          ...commentForm,
                          comment: e.target.value,
                        })
                      }
                      placeholder="Type your comment here"
                      disabled={isSubmitting}
                      className="w-full h-[205px] resize-none rounded-[3px] border border-[#64748B] bg-[#F7F8F9] px-2 py-2 text-[12px] text-[#64748B] placeholder:text-[#6B7280] focus:outline-none focus:border-[#322986] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div className="flex flex-col">

                    <p className="text-[12px] text-[#222] font-bold leading-[1.25] mb-1">
                      Your email address will not be published. Required fields are marked
                      <span className="text-[#E34334]"> *</span>
                    </p>

                    {/* Name */}
                    <label className="text-[14px] mb-[2px]">
                      Name <span className="text-[#E34334]">*</span>
                    </label>

                    <input
                      type="text"
                      value={commentForm.name}
                      onChange={(e) =>
                        setCommentForm({
                          ...commentForm,
                          name: e.target.value,
                        })
                      }
                      placeholder="Enter Name"
                      disabled={isSubmitting}
                      className="w-full h-[30px] rounded-[2px] bg-[#F7F8F9] border border-[#64748B] px-2 text-[14px] mb-2 focus:outline-none focus:border-[#322986] disabled:opacity-50 disabled:cursor-not-allowed"
                    />

                    {/* Email */}
                    <label className="text-[14px] text-[#222] mb-[2px]">
                      Email <span className="text-[#E34334]">*</span>
                    </label>

                    <input
                      value={commentForm.email}
                      onChange={(e) =>
                        setCommentForm({
                          ...commentForm,
                          email: e.target.value,
                        })
                      }
                      type="email"
                      placeholder="Enter Your Email"
                      disabled={isSubmitting}
                      className={`w-full h-[30px] rounded-[2px] bg-[#F7F8F9] border px-2 text-[14px] mb-1 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
                        commentForm.email.trim() !== "" && !isEmailValid
                          ? "border-[#E34334] focus:border-[#E34334]"
                          : "border-[#64748B] focus:border-[#322986]"
                      }`}
                    />
                    {commentForm.email.trim() !== "" && !isEmailValid && (
                      <p className="text-[11px] text-[#E34334] mb-2">
                        Please enter a valid email address.
                      </p>
                    )}

                    {/* Checkbox */}
                    <label className="flex items-start gap-1 text-[12px] text-[#555] leading-tight mb-2">
                      <input
                        type="checkbox"
                        checked={saveDetails}
                        onChange={(e) => setSaveDetails(e.target.checked)}
                        className="mt-[1px] w-[12px] h-[12px]"
                      />

                      <span>
                        Save my name, email, and website in this browser for the next time I
                        comment.
                      </span>
                    </label>

                    {/* Submit */}
                    <button
                      type="button"
                      onClick={handleSubmitComment}
                      disabled={!isCommentFormValid || isSubmitting}
                      className="cursor-pointer w-full h-[40px] rounded-[8px] bg-[#322986] text-white text-[16px] font-medium hover:bg-[#292270] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#322986] flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Posting...
                        </>
                      ) : (
                        "Post a Comment"
                      )}
                    </button>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-bold">
                    Comments ({comments.length})
                  </h3>

                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="rounded-lg border p-4"
                    >
                      <h4 className="font-semibold">
                        {comment.name}
                      </h4>

                      <p className="text-sm text-gray-500">
                        {new Date(
                          comment.created_at
                        ).toLocaleDateString()}
                      </p>

                      <p className="mt-2">
                        {comment.comment}
                      </p>
                    </div>
                  ))}
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