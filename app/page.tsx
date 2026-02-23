import HeaderComponent from "../src/components/HeaderComponent/HeaderComponent";
import HomeBanner from "@/public/banners/home-banner.jpeg"
import TextBanner from "@/src/components/HomeComponents/TextBanner";
import Image from "next/image";
import { FIRE_SAFETY_DEVELOPMENT_PORTFOLIO } from "@/src/data/portfolio.data";
import { CORE_FOCUS } from "@/src/data/core-focus.data";
import { CORE_SERVICES } from "@/src/data/core-services.data";
import { WHY_EMCUS } from "@/src/data/why-emcus.data";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black pt-[80px] md:pt-[90px]">
        <HeaderComponent active="HOME" />
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
            <h1 className="text-white text-xl xl:text-4xl lg:text-4xl lg:font-medium font-normal xl:font-bold xl:px-0 px-4 lg:-mt-20">
              UNIQUE <span className="font-bold">SOLUTIONS</span> FOR UNIQUE <span className="font-bold">YOU</span>
            </h1>

            <span className="text-white xl:text-lg lg:text-[22px] lg:mt-6 lg:px-30 mt-4 max-w-3xl xl:px-0 px-6">
              We at EMCUS understand that every requirement is unique, and we tailor our solutions to your specific needs.
            </span>
          </div>
        </div>
        <TextBanner text="EMCUS Technology Solutions is a software-focused company that offers you first-class firmware and software development, and testing services in the fire & safety domain." />
        <h1 className="text-[25px] xl:text-[30px] text-[#d94536] font-bold text-center w-full mt-10 lg:-mt-10 leading-none">OUR FIRE & SAFETY SOFTWARE DEVELOPMENT PORTFOLIO</h1>
        {/* Portfolio Grid */}
        <div className="w-full max-w-6xl mx-auto mt-6 px-6 grid grid-cols-1 md:grid-cols-6 gap-6">

          {FIRE_SAFETY_DEVELOPMENT_PORTFOLIO.map((item, index) => {

            const colSpanClass =
              index < 2 ? "md:col-span-3" : "md:col-span-2";

            return (
              <div
                key={item.id}
                className={`${colSpanClass} bg-gray-100 rounded-lg overflow-hidden flex hover:shadow-lg transition duration-300`}
              >

                {/* Image Section */}
                <div className="bg-[#d94536] flex items-center justify-center p-6 w-1/3">
                  <Image
                    src={item.imgSrc}
                    alt="Portfolio Item"
                    className="w-20 object-contain"
                  />
                </div>

                {/* Text Section */}
                <div className="bg-[#322986] flex flex-col justify-center p-6 w-2/3 hover:bg-[#d94536]">

                  {item.data.length > 1 ? (
                    <ul className="list-disc pl-5 space-y-2 marker:text-white">
                      {item.data.map((text, i) => (
                        <li
                          key={i}
                          className="text-[14px] font-normal text-white text-left"
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[14px] font-normal text-white text-left">
                      {item.data[0]}
                    </p>
                  )}

                </div>
              </div>
            );
          })}
        </div>
        <h1 className="text-[30px] text-[#d94536] font-bold text-center w-full mt-20">OUR CORE FOCUS</h1>
        {CORE_FOCUS.map((item, index) => {

          const colSpanClass =
            index < 2 ? "md:col-span-3" : "md:col-span-2";

          return (
            <div
              key={item.id}
              className={`${colSpanClass} h-auto lg:h-[600px] bg-gray-100 rounded-lg overflow-hidden flex flex-col lg:flex-row hover:shadow-lg transition duration-300`}
            >

              {/* Image Section */}
              <div className="bg-[#d94536] flex items-center justify-center xl:w-2/3">
                <Image
                  src={item.imgSrc}
                  alt="Portfolio Item"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Text Section */}
              <div className="bg-[#322986] flex flex-col justify-center p-6 xl:w-1/3">

                {item.data.length > 1 ? (
                  <ul className="list-disc pl-5 space-y-2 marker:text-white">
                    {item.data.map((text, i) => (
                      <li
                        key={i}
                        className="lg:text-[16px] text-[18px] font-normal text-white text-left"
                      >
                        {text}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[14px] font-normal text-white text-left">
                    {item.data[0]}
                  </p>
                )}
                <button className="bg-white w-[120px] rounded-md py-2 mt-10">
                  Read More
                </button>
              </div>
            </div>
          );
        })}
        <h1 className="text-[30px] text-[#d94536] font-bold text-center w-full mt-20">OUR CORE SERVICES</h1>
        {CORE_SERVICES.map((item, index) => {

          const colSpanClass =
            index < 2 ? "md:col-span-3" : "md:col-span-2";

          return (
            <div
              key={item.id}
              className={`${colSpanClass} h-auto lg:h-[600px] bg-gray-100 rounded-lg overflow-hidden flex flex-col lg:flex-row hover:shadow-lg transition duration-300`}
            >

              {/* Text Section */}
              <div className="bg-[#322986] flex flex-col p-6 w-full lg:w-2/3 h-full">

                {/* Content wrapper */}
                <div className="flex-1 flex flex-col justify-center items-center lg:ml-10">

                  {item.data.length > 1 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 max-w-4xl w-full">
                      {Array.from({ length: 2 }).map((_, colIndex) => {
                        const start = colIndex * 10;
                        const end = start + 10;
                        const columnItems = item.data.slice(start, end);

                        return (
                          <ul
                            key={colIndex}
                            className="list-disc space-y-2 marker:text-white"
                          >
                            {columnItems.map((text, i) => (
                              <li
                                key={i}
                                className="lg:text-[16px] text-[18px] font-normal text-white text-left"
                              >
                                {text}
                              </li>
                            ))}
                          </ul>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-[14px] font-normal text-white text-center">
                      {item.data[0]}
                    </p>
                  )}

                </div>

                {/* Button */}
                <button className="bg-white w-[120px] rounded-md py-2 self-start mt-6 lg:-mt-10 2xl:ml-40 lg:ml-5">
        Read More
      </button>

              </div>

              {/* Image Section */}
              <div className="bg-[#d94536] flex items-center justify-center w-full lg:w-1/3">
                <Image
                  src={item.imgSrc}
                  alt="Portfolio Item"
                  className="object-cover w-full h-[250px] sm:h-[300px] lg:h-full relative"
                />
              </div>
            </div>
          );
        })}
        <div className="2xl:py-30 lg:py-15">
          <h1 className="text-[30px] text-[#d94536] font-bold text-center w-full">WHY EMCUS?</h1>
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
