import HeaderComponent from "../src/components/HeaderComponent/HeaderComponent";
import Banner from "@/public/banners/home/home-banner.webp"
import TextBanner from "@/src/components/HomeComponents/TextBanner";
import Image from "next/image";
import { RETAIL_PORTFOLIO } from "@/src/data/portfolio.data";
import { WHY_EMCUS } from "@/src/data/why-emcus.data";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black pt-[80px] md:pt-[90px]">
        <HeaderComponent active="HOME" />
        <div className="relative w-full h-[300px] lg:h-[600px] 2xl:h-[600px] 2xl:bottom-0">
          <Image
            src={Banner}
            alt="Home Banner"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center 
                items-start text-left 
                px-4 sm:px-6 lg:px-28 
                z-10 w-full max-w-[90%] sm:max-w-[600px] lg:max-w-[800px]">

            <h1 className="text-[#0071bc] 
                 text-lg sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[45px] 
                 font-bold 
                 leading-snug">
              UNIQUE SOLUTIONS FOR A UNIQUE YOU
            </h1>

            <span className="text-[#444444] 
                   text-sm sm:text-base md:text-lg lg:text-[22px] 
                   mt-3 sm:mt-4 lg:mt-6 
                   leading-relaxed">
              We at EMCUS understand that every requirement is unique,
              and we tailor our solutions to your specific needs.
            </span>

          </div>
        </div>
        <TextBanner text="EMCUS Scanning & Mobility is a software-focused company specializing in top-tier software development tailored for the retail RFID industry." />
        <h1 className="text-[25px] xl:text-[30px] text-[#0071bc] lg:px-140 font-bold text-center w-full mt-15 lg:mt-20 leading-none">OUR RETAIL RFID AND LOSS PREVENTION SOFTWARE DEVELOPMENT PORTFOLIO</h1>
        {/* Portfolio Grid */}
        <div className="w-full mt-10 space-y-16">
          {RETAIL_PORTFOLIO.map((item, index) => {
            const isEven = index % 2 !== 0;

            return (
              <div key={item.id} className="w-full">

                {/* ✅ Title at Top Center */}
                <h1 className="text-center text-[#444444] text-2xl lg:text-3xl font-bold mb-6">
                  {item.title}
                </h1>

                {/* Content Row */}
                <div
                  className={`w-full flex flex-col lg:flex-row 
            ${isEven ? "lg:flex-row-reverse" : ""} 
            min-h-[400px]`}
                >
                  {/* Image Section */}
                  <div className="w-full lg:w-2/3 h-[300px] lg:h-auto">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-full lg:w-1/3 bg-[#F1F1F1] flex flex-col justify-center p-8">
                    {/* <h3 className="text-[#444444] text-xl font-bold mb-6">
                      {item.title}
                    </h3> */}

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
                    <span className="text-[#444444] text-[14px] mt-4 block">{item.details}</span>

                    <button className="bg-[#29abe2] text-white font-semibold w-[130px] rounded-md py-2 mt-8 hover:bg-[#29abe2] transition">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="2xl:py-30 lg:py-15">
          <h1 className="text-[30px] text-[#0071bc] font-bold text-center w-full">WHY EMCUS?</h1>
          <div className="flex flex-col md:flex-row justify-center py-16 gap-10 md:ml-10 ">

            {WHY_EMCUS.map((item) => {
              return (
                <div key={item.id} className="lg:px-7 md:px-24 text-center md:text-left">
                  <h2 className="text-[20px] font-bold text-center">
                    {item.title}
                  </h2>

                  <p className="text-[18px] mt-6">
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
