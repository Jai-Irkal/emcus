import FooterComponent from '@/src/components/FooterComponent/FooterComponent';
import OurServiceComponent from '@/src/components/OurServiceComponent/OurServiceComponent';
import { OUR_SERVICES } from '@/src/data/our-services.data';
import React from 'react'
import Image from 'next/image';
import HeaderComponent from '@/src/components/HeaderComponent/HeaderComponent';
import Banner from "@/public/banners/what-we-do-banner.svg"
import { TECHNOLOGY_EXPERTISE } from '@/src/data/technology-expertise.data';
import TechnologyExpertiseCard from '@/src/components/cards/TechnologyExpertiseCard';

const page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black pt-[80px] md:pt-[90px]">
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
            <hr />
            <span className="text-white text-[12px] lg:text-[18px] lg:mt-6 lg:px-0 mt-4 max-w-3xl xl:px-0 px-6">
              EMCUS is dedicated to offering efficient and reliable solutions to projects of any scale, while ensuring the highest level of quality in every deliverable. From silicon-level firmware to cloud-hosted monitoring platforms — we own the outcome.
            </span>
          </div>
        </div>


        <div className="2xl:py-30 lg:pt-8 lg:pb-0 py-10">
          <h1 className='text-[#E4312D] font-bold text-[24px] text-center'>TECHNOLOGY EXPERTISE</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 py-6 px-4">
            {TECHNOLOGY_EXPERTISE.map((item) => (
              <TechnologyExpertiseCard
                key={item.id}
                technologyExpertiseItem={item}
              />
            ))}
          </div>
        </div>
        <FooterComponent />
      </main>
    </div>
  )
}

export default page