import HeaderComponent from "../src/components/HeaderComponent/HeaderComponent";
import HomeBanner from "@/public/banners/home-banner.jpeg"
import TextBanner from "@/src/components/HomeComponents/TextBanner";
import Image from "next/image";
import { FIRE_SAFETY_DEVELOPMENT_PORTFOLIO } from "@/src/data/portfolio.data";
import { CORE_SERVICES } from "@/src/data/core-services.data";
import { WHY_EMCUS } from "@/src/data/why-emcus.data";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import PortfolioComponent from "@/src/components/PortfolioComponent/PortfolioComponent";
import CoreServiceBanner from "@/public/core-services/core-services-img.svg"
import CoreServicesCard from "@/src/components/cards/CoreServicesCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black pt-[80px] md:pt-[90px]">
        <HeaderComponent active="HOME" />
        <div className="relative w-full h-[300px] lg:h-[600px] 2xl:h-[600px] 2xl:bottom-0">
          {/* Replace this Image component with Slider Component */}
          <Image
            src={HomeBanner}
            alt="Home Banner"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <h1 className="text-white text-xl xl:text-4xl lg:text-4xl lg:font-medium font-normal xl:font-bold xl:px-0 px-4 lg:-mt-20">
              UNIQUE <span className="font-bold">SOLUTIONS</span> FOR UNIQUE <span className="font-bold">YOU</span>
            </h1>

            <span className="text-white xl:text-lg lg:text-[22px] lg:mt-6 lg:px-30 mt-4 max-w-3xl xl:px-0 px-6">
              We at EMCUS understand that every requirement is unique, and we tailor our solutions to your specific needs.
            </span>
          </div>
        </div>
        <TextBanner text="EMCUS Technology Solutions is a specialized fire safety engineering partner for OEMs, delivering end-to-end design and development of fire & safety systems." />
        <h1 className="text-[25px] xl:text-[30px] text-[#d94536] font-bold text-center w-full mt-10 lg:-mt-10 leading-none">FIRE & SAFETY PORTFOLIO</h1>
        <h1 className="text-[25px] xl:text-[30px] text-[#000000] font-bold text-center w-full leading-none lg:mt-2">Design & Development</h1>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:mt-10 lg:px-4">
          {FIRE_SAFETY_DEVELOPMENT_PORTFOLIO.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition duration-300"
            >
              <PortfolioComponent portfolioItem={item} />
            </div>
          ))}
        </div>

        <h1 className="text-[30px] text-[#d94536] font-bold text-center w-full mt-20">CORE SERVICES</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:mt-10 lg:px-4 h-[600px]">
          {/* Left Column - Scrollable */}
          <div className="flex items-center">
            <div className="overflow-y-auto max-h-[400px] pr-2 hide-scrollbar py-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {CORE_SERVICES.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition duration-300"
                  >
                    <CoreServicesCard coreServiceItem={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Fixed */}
          <div className="h-full">
            <Image
              src={CoreServiceBanner}
              alt="Core Service Banner"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-[30px] text-[#d94536] font-bold text-center w-full">WHY EMCUS?</h1>
          <div className="flex flex-col md:flex-row justify-center gap-0 mt-10">

            {WHY_EMCUS.map((item) => {
              return (
                <div key={item.id} className={`${item.id % 2 !== 0 ? 'bg-[#E4312D]' : 'bg-[#0B2C71]'} text-center md:text-left px-8 py-10 flex-1`}>
                  <h2 className="text-[20px] font-bold text-center text-white">
                    {item.title}
                  </h2>

                  <p className="text-[18px] mt-6 text-white">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
