import FooterComponent from '@/src/components/FooterComponent/FooterComponent';
import OurServiceComponent from '@/src/components/OurServiceComponent/OurServiceComponent';
import { OUR_SERVICES } from '@/src/data/our-services.data';
import React from 'react'
import Image from 'next/image';
import HeaderComponent from '@/src/components/HeaderComponent/HeaderComponent';
import HomeBanner from "@/public/banners/home-banner.jpeg"
import { TECHNOLOGY_EXPERTISE } from '@/src/data/technology-expertise.data';
import TechnologyExpertiseCard from '@/src/components/cards/TechnologyExpertiseCard';

const page = () => {
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


        <div className="2xl:py-30 lg:pt-8 lg:pb-0">
          <h1 className='text-[#E4312D] font-bold text-[24px] text-center'>TECHNOLOGY EXPERTISE</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 py-6 px-2">
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