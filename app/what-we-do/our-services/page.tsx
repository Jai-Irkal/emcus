import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import HomeBanner from "@/public/banners/home-banner.jpeg"
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { EXPERIENCE_AND_EXPERTISE } from "@/src/data/experience-and-expertise.data";
import { Card } from "@/src/components/cards/Card";
import { EXPERTISE_DOMAINS } from "@/src/data/expertise-domains.data";

export default function WhatWeDo() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black pt-[80px] md:pt-[90px]">
        <HeaderComponent active="WHAT WE DO" />
        <div className="relative w-full h-[300px] lg:h-[600px] 2xl:h-[600px] 2xl:bottom-0">
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
            <h1 className="text-white text-xl xl:text-4xl lg:text-4xl lg:font-medium font-normal xl:font-bold xl:px-0 px-4 lg:-mt-20 lg:px-20">
              <span className="font-bold">EFFICIENT</span> AND <span className="font-bold">HIGH-QUALITY</span> FIRMWARE/SOFTWARE/TESTING SERVICES
            </h1>

            <span className="text-white xl:text-lg lg:text-[16px] lg:mt-6 lg:px-0 mt-4 max-w-3xl xl:px-0 px-6">
              EMCUS prides itself in offering efficient and flexible solutions, catering to projects of any scale while ensuring timely delivery of unique solutions.
            </span>
          </div>
        </div>
        
        
        <div className="2xl:py-30 lg:py-15">
          <div className="flex flex-col py-16 gap-20">

            {EXPERTISE_DOMAINS.map((item) => {

              const isEven = item.id % 2 === 0;

              return (
                <div key={item.id} className="max-w-7xl mx-auto px-6">

                  {/* Title */}
                  <h1 className="text-[30px] text-[#d94536] font-bold text-center mb-10">
                    {item.title}
                  </h1>

                  {/* Image + Description */}
                  <div
                    className={`flex flex-col md:flex-row items-center gap-6 ${isEven ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full max-w-md h-auto object-contain"
                      />
                    </div>
                    {/* Description */}
                    <div className={`w-full md:w-1/2 ${isEven? 'relative lg:left-15':'lg:mr-12'}`}>
                      <p className="text-[18px] leading-relaxed text-center md:text-left">
                        {item.description}
                      </p>
                      {
                        item?.moreDescription && (
                          <p className="text-[18px] leading-relaxed text-center md:text-left">
                            {item.moreDescription}
                          </p>
                        )
                      }
                    </div>
                  </div>
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
