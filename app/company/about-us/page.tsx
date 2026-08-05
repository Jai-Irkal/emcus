import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import GlobalPresence from "@/public/about-us/GlobalPresence.svg"
import OurMission from "@/public/about-us/OurMission.svg";
import OurVision from "@/public/about-us/OurVision.svg";
import { WHAT_MAKES_EMCUS_DIFFERENT } from "@/src/data/emcus-different.data";
import DifferenceCard from "@/src/components/cards/DifferenceCard";

export default function AboutUs() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black pt-[80px] md:pt-[90px]">
        <HeaderComponent active="ABOUT US" />
        <div className="relative w-full h-[300px] lg:h-[600px] 2xl:h-[600px] 2xl:bottom-0">
          <Image
            src={GlobalPresence}
            alt="Home Banner"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <h1 className="text-white text-xl xl:text-4xl lg:text-4xl lg:font-medium font-normal xl:font-bold xl:px-0 px-4 lg:-mt-20 lg:px-20">
              <span className="font-medium">Global Client Presence</span>
            </h1>
          </div>
        </div>
        <h1 className="text-[25px] text-[#d94536] font-bold text-left w-full mt-8 px-10">ABOUT EMCUS</h1>
        <div className="w-full flex justify-center py-5">
          <span className="px-10 text-justify text-[18px] text-[#64748B]">
            EMCUS Technology Solutions is a specialized fire safety engineering partner for OEMs, delivering end-to-end design and development of fire & safety systems. With certification-aware engineering and expertise in UL and EN-54 readiness, we support customers throughout the product development and certification journey, accelerating the delivery of reliable, standards-ready fire safety products.
          </span>
        </div>
        <div className="lg:px-10">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <div className="w-full rounded-2xl border-[#E2E2E2] bg-[#D8E0F7] border-1 py-6 px-6 shadow-l">
              <div className="flex items-center gap-4">
                <div className="lg:w-[50px] lg:h-[48px] bg-[#243481] rounded-xl flex items-center justify-center">
                  <Image
                    src={OurVision}
                    alt="Our Vision"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h1 className="text-center text-[28px] font-bold text-[#444444]">Our Vision</h1>
              </div>
              <div className="mt-4 relative pr-12">
                <p>To be the technology partner fire and safety companies trust most—known for engineering excellence, quality, compliance, and innovation.</p>
              </div>
            </div>
            <div className="w-full rounded-2xl border-[#E2E2E2] bg-[#FFE7E3] border-1 py-6 px-6 shadow-l">
              <div className="flex items-center gap-4">
                <div className="lg:w-[50px] lg:h-[48px] bg-[#E4312D] rounded-xl flex items-center justify-center">
                  <Image
                    src={OurMission}
                    alt="Our Mission"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h1 className="text-center text-[28px] font-bold text-[#444444]">Our Mission</h1>
              </div>
              <div className="mt-4 relative pr-14">
                <p>Helping fire and safety businesses build safer, smarter, and more connected products through world-class engineering.</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[25px] text-[#d94536] font-bold text-left w-full mt-8 px-10">WHAT MAKES EMCUS DIFFERENT</h1>
        <div className="flex px-10 gap-5 flex-wrap py-6">
          {
            WHAT_MAKES_EMCUS_DIFFERENT.map((item, index) => {
              return (
                <DifferenceCard item={item} key={item.id}/>
              )
            })
          }
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
