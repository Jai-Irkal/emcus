import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import HomeBanner from "@/public/banners/home-banner.jpeg"
import TextBanner from "@/src/components/HomeComponents/TextBanner";
import Image from "next/image";
import { FIRE_SAFETY_DEVELOPMENT_PORTFOLIO } from "@/src/data/portfolio.data";
import { CORE_FOCUS } from "@/src/data/core-focus.data";
import { CORE_SERVICES } from "@/src/data/core-services.data";
import { WHY_EMCUS } from "@/src/data/why-emcus.data";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { EXPERIENCE_AND_EXPERTISE } from "@/src/data/experience-and-expertise.data";
import { Card } from "@/src/components/cards/Card";
import { EXPERTISE_DOMAINS } from "@/src/data/expertise-domains.data";

export default function Home() {
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
        <h1 className="text-[25px] xl:text-[30px] text-[#d94536] font-bold text-center w-full mt-20 lg:mt-10 leading-none">OUR CORE FOCUS</h1>
        {/* Portfolio Grid */}
        <div className="p-6 flex justify-center">
          <ul className="list-disc list-inside space-y-2">
            <li>Customized Engineering Services</li>
            <li>End-to-End Product Development</li>
            <li>Domain-Specific Product Design Development</li>
            <li>Empowered and Dedicated R&D Teams</li>
            <li>Focus on Regulatory Standards</li>
            <li>Time-Boxed with High Quality</li>
          </ul>
        </div>
        <h1 className="text-[25px] text-[#d94536] font-bold text-center w-full mt-10">OUR CORE SERVICES</h1>
        <div className="p-8 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18">

            {/* Column 1 */}
            <ul className="list-disc list-inside space-y-2">
              <li>R&D (Small to Large Scale Projects)</li>
              <li>Enhancement Projects</li>
              <li>Obsolescence Projects</li>
              <li>Platform Upgradation</li>
              <li>Porting Projects</li>
              <li>Code Re-Factoring</li>
              <li>Support Product Maintenance</li>
            </ul>

            {/* Column 2 */}
            <ul className="list-disc list-inside space-y-2">
              <li>Field Issue Fixes</li>
              <li>Regulatory Standards Software</li>
              <li>Hardware and Software Prototypes</li>
              <li>IoT and Cloud Projects</li>
              <li>Smart Utility and Troubleshooting Apps</li>
              <li>Production Floor Apps (Software and Firmware)</li>
            </ul>

            {/* Column 3 */}
            <ul className="list-disc list-inside space-y-2">
              <li>Embedded Product Test Automation</li>
              <li>Software Automation Testing</li>
              <li>Manual Testing</li>
              <li>Test Suite Creation</li>
              <li>iOS and Android Apps</li>
              <li>Desktop Applications</li>
              <li>User Research and User Experience</li>
            </ul>
          </div>
        </div>
        <h1 className="text-[25px] text-[#d94536] font-bold text-center w-full mt-10">OUR EXPERIENCE & EXPERTISE</h1>
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* LEFT COLUMN */}
              <div className="space-y-3">
                {EXPERIENCE_AND_EXPERTISE.slice(0, 5).map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-8">
                {EXPERIENCE_AND_EXPERTISE.slice(5).map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </div>
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
