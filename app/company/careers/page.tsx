import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import HomeBanner from "@/public/banners/home-banner.jpeg"
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { OPEN_ROLES } from "@/src/data/careers.data";
import { CareerCard } from "@/src/components/cards/CareerCard";
import CareersBanner from "@/public/careers/CareersBanner.svg";
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

          <div className="absolute inset-0 bg-black/30"></div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <h1 className="text-white text-xl xl:text-4xl lg:text-4xl lg:font-medium font-normal xl:font-bold xl:px-0 px-4 lg:-mt-20 lg:px-20">
              <span className="font-bold">BE PART OF SOMETHING BIG!</span>
            </h1>
            <span className="text-white xl:text-lg lg:text-[16px] lg:mt-6 lg:px-2 mt-4 lg:w-205 xl:px-0 px-2 text-[12px]">
              EMCUS Technology Solutions takes great pride in creating positive changes and stimulating dynamic growth to businesses. We are technology-agnostic and leverage our experience, expertise, and state-of-the-art infrastructure to provide high-quality, rapid time-to-market solutions.
            </span>
          </div>
        </div>
        <h1 className="text-[25px] text-[#d94536] font-bold text-center w-full mt-10">JOIN US</h1>
        <h2 className="px-8 font-bold">Open Positions ({OPEN_ROLES.length})</h2>
        <h2 className="px-8 font-bold">Engineering</h2>
        <div className="w-full flex flex-col gap-0 py-5 px-6">
          {OPEN_ROLES.map((item, index) => (
            <div key={item.id}>
              <CareerCard item={item} />
              {
                index < OPEN_ROLES.length -1 && (
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
