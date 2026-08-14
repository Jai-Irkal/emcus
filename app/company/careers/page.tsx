import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import HomeBanner from "@/public/banners/home-banner.jpeg"
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { OPEN_ROLES } from "@/src/data/careers.data";
import { CareerCard } from "@/src/components/cards/CareerCard";
import CareersBanner from "@/public/banners/CareersPageBanner.svg";
import Link from "next/link";

export default function Careers() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="CAREERS" />
        <div className="relative w-full h-[300px] lg:h-[600px] 2xl:h-[600px] 2xl:bottom-0">
          <Image
            src={CareersBanner}
            alt="Careers Banner"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
            <div className="flex max-w-5xl flex-col items-center text-center">
              <h1 className="px-2 text-lg font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
                BE PART OF SOMETHING BIG!
              </h1>

              <div className="my-4 h-px w-32 bg-white sm:w-48 lg:my-6 lg:w-206 xl:w-200" />

              <span className="max-w-3xl px-2 text-[12px] leading-relaxed text-white sm:px-4 sm:text-[14px] lg:px-0 lg:text-[18px]">
                EMCUS Technology Solutions takes great pride in creating positive
                changes and stimulating dynamic growth for businesses. We are
                technology-agnostic and leverage our experience, expertise, and
                state-of-the-art infrastructure to provide high-quality, rapid
                time-to-market solutions.
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-[25px] text-[#d94536] font-bold text-center w-full mt-10">JOIN US</h1>
        <h2 className="px-8 font-bold">Open Positions ({OPEN_ROLES.length})</h2>
        <h2 className="px-8 font-bold lg:mt-4 lg:text-[22px]">Engineering</h2>
        <div className="w-full flex flex-col gap-0 py-5 px-6">
          {OPEN_ROLES.map((item, index) => (
            <div key={item.id}>
              <CareerCard item={item} />
              {
                index < OPEN_ROLES.length - 1 && (
                  <hr />
                )
              }
            </div>
          ))}
        </div>
        <div className="py-5 text-center px-4">
          <p className="font-bold italic text-base sm:text-lg">
            Click the APPLY button to upload your resume.
          </p>

          <p className="font-bold italic text-base sm:text-lg">
            Alternatively, you can email your resume to{" "}
            <a
              href="mailto:career@emcus.co.in"
              className="text-[#d94536] break-all"
            >
              career@emcus.co.in
            </a>
          </p>
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
