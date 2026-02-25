import HomeBanner from "@/public/banners/home-banner.jpeg"
import TextBanner from "@/src/components/HomeComponents/TextBanner";
import Image from "next/image";

export default function Blogs() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between pt-22 bg-white dark:bg-black sm:items-start">
        {/* <HeaderComponent active="HOME" /> */}
        <div className="relative w-full h-[600px]">
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
            <h1 className="text-white text-4xl font-bold">
              UNIQUE SOLUTIONS FOR UNIQUE YOU
            </h1>

            <span className="text-white text-lg mt-4 max-w-3xl">
              We at EMCUS understand that every requirement is unique, and we tailor our solutions to your specific needs.
            </span>
          </div>
        </div>
        <TextBanner text="EMCUS Technology Solutions is a software-focused company that offers you first-class firmware and software development, and testing services in the fire & safety domain."/>
        <h1 className="text-[30px] font-bold text-center w-full lg:mt-20">OUR FIRE & SAFETY SOFTWARE DEVELOPMENT PORTFOLIO</h1>
      </main>
    </div>
  );
}
