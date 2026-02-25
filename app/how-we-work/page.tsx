import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import HomeBanner from "@/public/banners/home-banner.jpeg"
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { TECHNOLOGY_SKILLSET } from "@/src/data/technology-skillset.data";

export default function HowWeWork() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black pt-[80px] md:pt-[90px]">
        <HeaderComponent active="HOW WE WORK" />
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
              CLIENT<span className="font-bold"> FOCUS</span> AND TECHNICAL<span className="font-bold"> EXCELLENCE</span>
            </h1>

            <span className="text-white xl:text-lg lg:text-[16px] lg:mt-6 lg:px-10 mt-4 max-w-3xl xl:px-0 px-6">
              We adapt our processes to match yours, ensuring a seamless project experience. We execute projects using Agile, Waterfall, V-Model, and SAFe methodologies.
            </span>
          </div>
        </div>
        <h1 className="text-[25px] text-[#d94536] font-bold text-center w-full mt-10">OUR POSITIONING</h1>
        <div className="lg:py-8 lg:px-20">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <div className="w-full rounded-2xl border-[#E2E2E2] border-1 py-19.5 shadow-2xl">
              <h1 className="text-center text-[28px] font-bold text-[#444444]">CLIENT FOCUS</h1>
              <div className="mt-4 relative left-10">
                <ul className="list-disc list-outside space-y-2 lg:px-13 pr-10 text-[18px]">
                  <li>To excel in the delivery of software services in customer's ecosystem</li>
                  <li>Simple team structure with strong commitment to customer service</li>
                  <li>Solid understanding of business processes, trends and best practices in the industry</li>
                  <li>Hassle-free project execution, less trouble with process</li>
                </ul>
              </div>
            </div>
            <div className="w-full rounded-2xl border-[#E2E2E2] border-1 py-15 shadow-2xl">
              <h1 className="text-center text-[28px] font-bold text-[#444444]">TECHNICAL EXCELLENCE</h1>
              <div className="mt-4 relative left-10">
                <ul className="list-disc list-outside space-y-2 lg:px-13 pr-10 text-[18px]">
                  <li>Full-time teams dedicated to development and testing</li>
                  <li>Emphasis on product and domain knowledge</li>
                  <li>Disciplined processes and cutting-edge methodologies</li>
                  <li>Attention to technical details to provide robust solutions</li>
                  <li>Staying ahead of market demands with continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:py-30 lg:py-15">
          <div className="flex flex-col py-16 gap-20">

            {TECHNOLOGY_SKILLSET.map((item) => {

              const isEven = item.id % 2 === 0;

              return (
                <div key={item.id} className="max-w-7xl mx-auto px-6 py-16">

                  <div
                    className={`flex flex-col md:flex-row items-start gap-12 ${isEven ? "md:flex-row-reverse" : ""
                      }`}
                  >

                    {/* Image */}
                    <div className="w-full md:w-1/2 self-start">
                      <Image
                        src={item.img}
                        alt={item.title}
                        className="w-200 h-auto object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-1/2 self-start ${isEven? "mt-0" : "-mt-"}`}>
                      <h1 className="text-[22px] font-bold text-[#444444] mb-6 text-center">
                        {item.title}
                      </h1>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        <ul className="list-disc list-outside pl-5 space-y-2 text-[16px]">
                          {item.skills1.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>

                        <ul className="list-disc list-outside pl-5 space-y-2 text-[16px]">
                          {item.skills2.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>
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
