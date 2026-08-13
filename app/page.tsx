import HeaderComponent from "../src/components/HeaderComponent/HeaderComponent";
import TextBanner from "@/src/components/HomeComponents/TextBanner";
import Image from "next/image";
import { FIRE_SAFETY_DEVELOPMENT_PORTFOLIO } from "@/src/data/portfolio.data";
import { CORE_SERVICES } from "@/src/data/core-services.data";
import { WHY_EMCUS } from "@/src/data/why-emcus.data";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import PortfolioComponent from "@/src/components/PortfolioComponent/PortfolioComponent";
import CoreServiceBanner from "@/public/core-services/core-services-img.svg"
import CoreServicesCard from "@/src/components/cards/CoreServicesCard";
import CarouselComponent from "@/src/components/Carousel/CarouselComponent";
import ScrollFadeIn from "@/src/animated-components/ScrollFadeIn/ScrollFadeIn";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="HOME" />
        <div className="relative w-full h-[300px] lg:h-[600px] 2xl:h-[600px] 2xl:bottom-0">
          {/* Replace this Image component with Slider Component */}
          <CarouselComponent />
        </div>
        <TextBanner text="EMCUS Technology Solutions is a specialized fire safety engineering partner for OEMs, delivering end-to-end design and development of fire & safety systems." />
        <h1 className="text-[25px] xl:text-[30px] text-[#d94536] font-bold text-center w-full mt-10 lg:-mt-10 leading-none">FIRE & SAFETY PORTFOLIO</h1>
        <h1 className="text-[25px] xl:text-[30px] text-[#000000] font-bold text-center w-full leading-none lg:mt-2">Design & Development</h1>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:mt-10 lg:px-4 py-6 px-4">
          {FIRE_SAFETY_DEVELOPMENT_PORTFOLIO.map((item, index) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg
                       opacity-0 animate-fade-in-up-portfolio-component"
              style={{
                animationDelay: `${index * 250}ms`,
                animationFillMode: "forwards",
              }}
            >
              <PortfolioComponent portfolioItem={item} />
            </div>
          ))}
        </div>

        <h1 className="text-[30px] text-[#d94536] font-bold text-center w-full mt-10">CORE SERVICES</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:mt-10 lg:px-4 lg:min-h-[720px]">

          {/* Left Column - Scrollable */}
          <div
            className="
            flex items-center w-full ml-3 px-2
            lg:ml-8
            order-2 lg:order-1
            opacity-0
            animate-fade-in-from-left
        "
          >
            <div className="w-full overflow-y-auto max-h-[620px] pr-2 hide-scrollbar py-0 xl:-mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {CORE_SERVICES.map((item) => (
                  <div
                    key={item.id}
                    className="min-h-[220px] bg-gray-100 rounded-lg overflow-hidden shadow-lg transition duration-300"
                  >
                    <CoreServicesCard coreServiceItem={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Fixed */}
          <div
            className="
    hidden lg:flex lg:justify-end h-full
    order-1 lg:order-2
    opacity-0
    animate-fade-in-from-right
  "
          >
            <Image
              src={CoreServiceBanner}
              alt="Core Service Banner"
              className="w-[90%] h-[90%] object-right rounded-2xl lg:rounded-lg ml-auto"
            />
          </div>

        </div>

        <div className="lg:mt-10 mt-10 2xl:mt-10">
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
