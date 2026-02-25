import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import HomeBanner from "@/public/banners/home-banner.jpeg"
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import Vignesh from "@/public/about-us/vignesh.png";
import LinkedinIcon from "@/public/footer-assets/linkedin.svg";

export default function AboutUs() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black pt-[80px] md:pt-[90px]">
        <HeaderComponent active="ABOUT US" />
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
              <span className="font-medium">WE ARE</span><span className="font-bold"> EMCUS</span>
            </h1>
            <span className="text-white xl:text-lg lg:text-[16px] lg:mt-6 lg:px-10 mt-4 w-200 xl:px-0 px-6">
              At EMCUS, we act as your dedicated support, collaborating closely with your R&D teams, eliminating concerns about the next steps in the development process. Consider us your reliable extended team, always available to address questions and provide assistance.
            </span>
            <span className="font-bold text-white text-lg">
              We love what we do and are excited to work with you!
            </span>
          </div>
        </div>
        <h1 className="text-[25px] text-[#d94536] font-bold text-center w-full mt-30">LEADERSHIP</h1>
        <div className="w-full h-85 2xl:h-65 flex justify-center py-5 mb-30">
          <div className="w-90 2xl:w-140 rounded-xl shadow-2xl grid grid-cols-3 gap-2">
            <div className="col-span-1 p-4 rounded-lg">
              <div className="mt-4 flex flex-col justify-center items-center h-20 w-20 rounded-full mt-8">
                <Image
                  src={Vignesh}
                  alt="icon"
                  className="w-full h-full object-cover"
                />
                <Image
                  src={LinkedinIcon}
                  alt="LinkedIn"
                  className="w-8 h-8 object-contain relative top-4"
                />
              </div>
            </div>

            {/* 2/3 Column */}
            <div className="relative flex flex-col col-span-2 p-4 rounded-lg 2xl:right-20">
              <div className="flex lg:flex-col 2xl:flex-row 2xl:gap-1">
                <span className="text-[24px] font-bold text-[#322986]">VIGNESH</span>
                <span className="text-[24px] font-bold text-[#322986]">MOHAN</span>
              </div>
              <span>Director</span>
              <span className="mt-5">
                Vignesh is an embedded systems professional with over 18 years experience in delivery of large and complex products and with 8+ years in leadership roles.
              </span>
            </div>
          </div>
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
