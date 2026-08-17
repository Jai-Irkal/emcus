"use client";

import { useMemo, useState } from "react";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { OPEN_ROLES } from "@/src/data/careers.data";
import { CareerCard } from "@/src/components/cards/CareerCard";
import CareersBanner from "@/public/banners/CareersPageBanner.svg";
import SearchIcon from "@/public/blogs/search.svg";

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = useMemo(() => {
    return OPEN_ROLES.filter((job) => {
      const query = searchQuery.toLowerCase().trim();

      return (
        job.role.toLowerCase().includes(query) ||
        job.location?.toLowerCase().includes(query) ||
        job.role_type?.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="CAREERS" />

        <div className="relative h-[300px] w-full lg:h-[600px] 2xl:h-[600px]">
          <Image
            src={CareersBanner}
            alt="Careers Banner"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
            <div className="flex max-w-5xl flex-col items-center text-center">
              <h1 className="px-2 text-lg font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
                BE PART OF SOMETHING BIG!
              </h1>

              <div className="my-4 h-px w-32 bg-white sm:w-48 lg:my-6 lg:w-206 xl:w-200" />

              <span className="max-w-3xl px-2 text-[12px] leading-relaxed text-white sm:px-4 sm:text-[14px] lg:text-[18px]">
                EMCUS Technology Solutions takes great pride in creating
                positive changes and stimulating dynamic growth for businesses.
                We are technology-agnostic and leverage our experience,
                expertise, and state-of-the-art infrastructure to provide
                high-quality, rapid time-to-market solutions.
              </span>
            </div>
          </div>
        </div>

        <h1 className="mt-10 w-full text-center text-[25px] font-bold text-[#d94536]">
          JOIN US
        </h1>

        <h2 className="px-8 font-bold">
          Open Positions ({filteredJobs.length})
        </h2>

        <div className="flex items-center justify-between px-8">
          <h2 className="font-bold lg:mt-4 lg:text-[22px]">Engineering</h2>

          <div className="flex h-12 w-[400px] items-center rounded-xl border border-[#64748B] px-4">
            <Image
              src={SearchIcon}
              alt="Search"
              className="mr-3 h-5 w-5 shrink-0"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Jobs"
              className="w-full bg-transparent text-base text-[#64748B] outline-none placeholder:text-[#64748B] sm:text-lg"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-0 px-6 py-5">
          {filteredJobs.map((item, index) => (
            <div key={item.id}>
              <CareerCard item={item} />

              {index < filteredJobs.length - 1 && <hr />}
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <p className="py-10 text-center text-gray-500">
              No jobs found.
            </p>
          )}
        </div>

        <FooterComponent />
      </main>
    </div>
  );
}