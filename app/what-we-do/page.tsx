import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import HomeBanner from "@/public/banners/what-we-do/what-we-do.webp"
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { EXPERIENCE_AND_EXPERTISE } from "@/src/data/experience-and-expertise.data";
import { Card } from "@/src/components/cards/Card";
import { EXPERTISE_DOMAINS } from "@/src/data/expertise-domains.data";
import { WHAT_WE_DO } from "@/src/data/what-we-do.data";

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

          {/* Overlay Content */}
          <div className="absolute inset-0 
                flex flex-col justify-center items-center 
                text-center 
                px-4 sm:px-6 lg:px-12 
                z-10">

            <div className="w-full flex flex-col items-center">

              {/* Heading - Wider */}
              <h1
                className="text-white
               w-full max-w-[95%] sm:max-w-[700px] lg:max-w-[650px]
               text-lg sm:text-2xl md:text-3xl lg:text-2xl 2xl:text-[25px]
               font-bold
               leading-snug
               text-center">
                INTEGRATED RETAIL TECHNOLOGY SOLUTIONS FOR ENHANCED SECURITY, EFFICIENCY, AND ANALYTICS
              </h1>

              {/* Paragraph - Narrower */}
              <span
                className="text-white
               w-full sm:max-w-[550px] lg:max-w-[830px]
               block
               text-sm sm:text-base md:text-lg lg:text-[20px]
               mt-3 sm:mt-4 lg:mt-6
               leading-relaxed
               text-center">
                EMCUS provides you with a comprehensive suite of embedded, IoT, and cloud-based systems enabling secure exits, efficient point-of-sale operations, and real-time analytics across retail environments.
              </span>

            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col py-16 gap-20 bg-white ">

            {WHAT_WE_DO.map((item) => {

              const isEven = item.id % 2 === 0;

              return (
                <div key={item.id} className="max-w-7xl mx-auto px-6">

                  {/* Title */}
                  <h1 className="text-[30px] text-[#0071bc] font-bold text-center mb-10">
                    {item.title}
                  </h1>

                  {/* Image + Description */}
                  <div
                    className={`flex flex-col md:flex-row items-center gap-20 ${isEven ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                      <Image
                        src={item.img}
                        alt={item.title}
                        className="w-full max-w-md h-auto object-contain"
                      />
                    </div>
                    {/* Description */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'relative lg:right-5' : 'lg:mr-12'}`}>
                      {item.data.length > 1 ? (
                        <ul className="list-disc pl-5 space-y-3 marker:text-[#444444]">
                          {item.data.map((text, i) => (
                            <li key={i} className="text-[#444444] text-[16px]">
                              {text}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-white text-[16px]">
                          {item.data[0]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
        <div className="">
          <div className="flex flex-col py-16 gap-20 bg-[#F1F1F1] ">

            {EXPERTISE_DOMAINS.map((item) => {

              const isEven = item.id % 2 === 0;

              return (
                <div key={item.id} className="max-w-7xl mx-auto px-6">

                  {/* Title */}
                  <h1 className="text-[30px] text-[#0071bc] font-bold text-center mb-10">
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
                    <div className={`w-full md:w-1/2 ${isEven ? 'relative lg:left-15' : 'lg:mr-12'}`}>
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
