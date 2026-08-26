import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import GlobalPresence from "@/public/about-us/GlobalPresence.svg"
import OurMission from "@/public/about-us/OurMission.svg";
import OurVision from "@/public/about-us/OurVision.svg";
import { WHAT_MAKES_EMCUS_DIFFERENT } from "@/src/data/emcus-different.data";
import DifferenceCard from "@/src/components/cards/DifferenceCard";
import VivekBanner from "@/public/vivek/AboutUs.webp"

export default function AboutUs() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="ABOUT US" />
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] 2xl:h-[600px] 2xl:bottom-0 overflow-hidden bg-[#011E62]">
          <div className="relative h-full w-full origin-[72%_48%]">
            <Image
              src={VivekBanner}
              alt="Home Banner"
              fill
              priority
              className="object-contain lg:object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/30"></div>

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
            <div className="flex max-w-5xl flex-col items-center text-center animate-fade-in-up">
              <h1 className="px-2 text-lg font-medium leading-tight text-white sm:text-2xl lg:text-4xl">
                WE ARE <span className="font-bold">EMCUS</span>
              </h1>

              <div className="my-4 h-px w-32 bg-white sm:w-48 lg:my-6 lg:w-206 xl:w-200" />

              <span className="max-w-3xl px-2 text-[12px] leading-relaxed text-white sm:px-4 sm:text-[14px] lg:text-[18px]">
                At EMCUS, we act as your dedicated support, collaborating closely with
                your R&D teams, eliminating concerns about the next steps in the
                development process. Consider us your reliable extended team, always
                available to address questions and provide assistance.
              </span>

              <span className="max-w-3xl px-2 text-[12px] font-bold leading-relaxed text-white sm:px-4 sm:text-[14px] lg:text-[18px]">
                We love what we do and are excited to work with you!
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-[21px] text-[#e73331] font-bold text-center w-full mt-8 px-10">ABOUT EMCUS</h1>
        <div className="w-full flex justify-center mt-1">
          <span className="px-10 text-justify lg:text-[18px] text-[#333333] font-regular">
            EMCUS Technology Solutions is a specialized fire safety engineering partner for OEMs, delivering end-to-end design and development of fire & safety systems. With certification-aware engineering and expertise in UL and EN-54 readiness, we support customers throughout the product development and certification journey, accelerating the delivery of reliable, standards-ready fire safety products.
          </span>
        </div>
        <div className="lg:px-10 px-4 mt-6">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <div className="w-full rounded-2xl border-[#E2E2E2] bg-[#D8E0F7] border-1 py-6 px-6 shadow-l">
              <div className="flex items-center gap-4">
                <div className="lg:w-[50px] lg:h-[48px] bg-[#243481] p-1 px-2 rounded-[8px] flex items-center justify-center">
                  <Image
                    src={OurVision}
                    alt="Our Vision"
                    className="w-8 h-10 object-contain"
                  />
                </div>
                <h1 className="text-center text-[28px] font-bold text-black">Our Vision</h1>
              </div>
              <div className="mt-4 relative px-0 lg:pr-12 text-left lg:text-left font-regular">
                <p>
                  To be the technology partner fire and safety companies trust most—known
                  for engineering excellence, quality, compliance, and innovation.
                </p>
              </div>
            </div>
            <div className="w-full rounded-2xl border-[#E2E2E2] bg-[#FFE7E3] border-1 py-6 px-6 shadow-l">
              <div className="flex items-center gap-4">
                <div className="lg:w-[50px] lg:h-[48px] bg-[#E4312D] p-1 px-2 rounded-[8px] flex items-center justify-center">
                  <Image
                    src={OurMission}
                    alt="Our Mission"
                    className="w-8 h-10 object-contain"
                  />
                </div>
                <h1 className="text-center text-[28px] font-bold text-black">Our Mission</h1>
              </div>
              <div className="mt-4 relative px-0 lg:pr-22 text-left lg:text-left font-regular">
                <p>Helping fire and safety businesses build safer, smarter, and more connected products through world-class engineering.</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[21px] text-[#e73331] font-bold text-center w-full mt-8 px-10">WHAT MAKES EMCUS DIFFERENT</h1>
        <div className="w-full flex flex-wrap justify-center items-center gap-3 py-6">
          {WHAT_MAKES_EMCUS_DIFFERENT.map((item) => (
            <DifferenceCard
              item={item}
              key={item.id}
            />
          ))}
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
