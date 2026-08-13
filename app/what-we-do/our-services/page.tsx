import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import HomeBanner from "@/public/banners/home-banner.jpeg"
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { OUR_SERVICES } from "@/src/data/our-services.data";
import OurServiceComponent from "@/src/components/OurServiceComponent/OurServiceComponent";
import Banner from "@/public/banners/what-we-do-banner.svg";

export default function WhatWeDo() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="WHAT WE DO" />
        <div className="relative w-full h-[300px] lg:h-[600px] 2xl:h-[600px] 2xl:bottom-0">
          <Image
            src={Banner}
            alt="Banner"
            fill
            priority
            className="object-cover blur-sm"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <h1 className="text-white text-xl xl:text-4xl lg:text-4xl lg:font-medium font-normal xl:font-bold xl:px-0 px-4 lg:-mt-20 lg:px-20">
              <span className="font-bold">EFFICIENT AND HIGH-QUALITY FIRMWARE/SOFTWARE/TESTING SERVICES</span>
            </h1>

            <span className="text-white text-[12px] xl:text-lg lg:text-[16px] lg:mt-6 lg:px-0 mt-4 max-w-3xl xl:px-0 px-6">
              EMCUS is dedicated to offering efficient and reliable solutions to projects of any scale, while ensuring the highest level of quality in every deliverable. From silicon-level firmware to cloud-hosted monitoring platforms — we own the outcome.
            </span>
          </div>
        </div>
        
        
        <div className="py-10 2xl:py-30 lg:pt-16 lg:pb-0">
          <div className="flex flex-col gap-10">

            {OUR_SERVICES.map((item) => {
              return (
                <OurServiceComponent key={item.id} serviceItem={item} />
              );
            })}

          </div>
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
