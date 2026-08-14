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
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="WHAT WE DO" />
        <div className="relative w-full h-[300px] lg:h-[600px] 2xl:h-[600px]">
          <Image
            src={Banner}
            alt="Banner"
            fill
            priority
            className="object-cover blur-sm"
          />

          <div className="absolute inset-0 bg-black/30" />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
            <div className="flex max-w-5xl flex-col items-center text-center">
              <h1 className="px-2 text-lg font-bold leading-tight text-white sm:text-2xl lg:px-20 lg:text-4xl">
                EFFICIENT AND HIGH-QUALITY
                <br className="hidden sm:block" />
                FIRMWARE/SOFTWARE/TESTING SERVICES
              </h1>

              <div className="my-4 h-px w-32 bg-white sm:w-48 lg:my-6 lg:w-206 xl:w-200" />

              <p className="max-w-3xl px-2 text-[12px] leading-relaxed text-white sm:px-4 sm:text-[14px] lg:px-0 lg:text-[18px]">
                EMCUS is dedicated to offering efficient and reliable solutions to
                projects of any scale, while ensuring the highest level of quality in
                every deliverable. From silicon-level firmware to cloud-hosted monitoring
                platforms — we own the outcome.
              </p>
            </div>
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