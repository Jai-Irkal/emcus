import { Fragment } from "react";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import Banner from "@/public/banners/HowWeWorkBanner.svg"
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { TECHNOLOGY_SKILLSET } from "@/src/data/technology-skillset.data";
import ClientFocus from "@/public/how-we-work/our-positioning/ClientFocus.svg"
import Star from "@/public/how-we-work/our-positioning/Star.svg";
import BlueArrowBullet from "@/public/common/blue-arrow-bullet.svg"
import RedArrow from "@/public/common/arrow-bullet.svg"
import { EngagementLifeCycle } from "@/src/data/lifecycle.data";
import EngagementLifeCycleComponent from "@/src/components/EngagementLifeCycleComponent/EngagementLifeCycleComponent";
import LifeCycleArrow from "@/public/how-we-work/EngagementLifeCycle/EngagementLifecycleArrow.svg";
import { PRODUCT_DEVELOPMENT_LIFECYCLE } from "@/src/data/product-development-lifecycle.data";
import HegxagonComponent from "@/src/components/HexagonComponent/HegxagonComponent";
import ProductDevelopmentLifeCycleComponent from "@/src/components/ProductDevelopmentLifeCycleComponent/ProductDevelopmentLifeCycleComponent";

export default function HowWeWork() {

  const allSteps = PRODUCT_DEVELOPMENT_LIFECYCLE.flatMap((section) =>
    section.Steps.map((step) => ({
      ...step,
      section: section.section,
      sectionId: section.id,
    }))
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="HOW WE WORK" />
        <div className="relative w-full h-[300px] lg:h-[600px] 2xl:h-[600px] 2xl:bottom-0">
          <Image
            src={Banner}
            alt="Banner"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
            <div className="flex max-w-5xl flex-col items-center text-center">
              <h1 className="px-2 text-lg font-normal leading-tight text-white sm:text-2xl lg:text-4xl">
                <span className="font-bold">CLIENT FOCUS AND TECHNICAL EXCELLENCE</span>
              </h1>

              <div className="my-4 h-px w-32 bg-white sm:w-48 lg:my-6 lg:w-206 xl:w-200" />

              <span className="max-w-3xl px-2 text-[12px] leading-relaxed text-white sm:px-4 sm:text-[14px] lg:px-0 lg:text-[18px]">
                We adapt our processes to match yours, ensuring a seamless project
                experience. We execute projects using Agile, Waterfall, V-Model, and
                SAFe methodologies.
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-[25px] text-[#E4312D] font-bold text-center w-full mt-10">OUR POSITIONING</h1>
        <div className="py-8 lg:py-8 lg:px-20">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 lg:px-0 items-center">
            <div className="w-full rounded-2xl border-[#E2E2E2] bg-[#D8E0F7] border-1 py-6 px-6 shadow-l">
              <div className="flex items-center gap-4">
                <div className="lg:w-[70px] lg:h-[58px] bg-[#243481] rounded-xl flex items-center justify-center p-2">
                  <Image
                    src={ClientFocus}
                    alt="Client Focus"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h1 className="text-center text-[24px] lg:text-[28px] font-bold text-black">Client Focus</h1>
              </div>
              <div className="mt-4 relative">
                <ul className=" space-y-2 text-[18px]">
                  <div className="flex">
                    <div>
                      <Image
                        src={BlueArrowBullet} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="-mt-1 lg:mt-0 text-[15px] lg:text-[16px] font-medium">Embed seamlessly into your customer's ecosystem and toolchain.</li>
                  </div>
                  <div className="flex pr-8">
                    <div>
                      <Image
                        src={BlueArrowBullet} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="-mt-1 text-[15px] lg:mt-0 lg:text-[16px] font-medium">Lean team structure with a single-thread of accountability.</li>
                  </div>
                  <div className="flex">
                    <div>
                      <Image
                        src={BlueArrowBullet} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="-mt-1 text-[15px] lg:mt-0 lg:text-[16px] font-medium">Deep domain literacy in fire & safety, IoT and regulated industries.</li>
                  </div>
                  <div className="flex">
                    <div>
                      <Image
                        src={BlueArrowBullet} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="-mt-1 text-[15px] lg:mt-0 lg:text-[16px] font-medium">Hassle-free engagement — predictable cadence, fewer surprises.</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="w-full rounded-2xl border-[#E2E2E2] bg-[#FFE7E3] border-1 py-6 px-6 shadow-l">
              <div className="flex items-center gap-4">
                <div className="lg:w-[70px] lg:h-[58px] bg-[#E4312D] rounded-xl flex items-center justify-center p-2">
                  <Image
                    src={Star}
                    alt="Technical Excellence"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h1 className="text-center text-[22px] lg:text-[28px] font-bold text-black">Technical Excellence</h1>
              </div>
              <div className="mt-4 relative pr-10">
                <ul className=" space-y-2 text-[18px]">
                  <div className="flex">
                    <div>
                      <Image
                        src={RedArrow} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="-mt-1 text-[15px] lg:mt-0 lg:text-[16px] font-medium">Cross-disciplinary expertise: firmware, cloud, mobile and QA.</li>
                  </div>
                  <div className="flex">
                    <div>
                      <Image
                        src={RedArrow} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="-mt-1 text-[15px] lg:mt-0 lg:text-[16px] font-medium">Disciplined processes paired with modern tooling.</li>
                  </div>
                  <div className="flex">
                    <div>
                      <Image
                        src={RedArrow} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="-mt-1 text-[15px] lg:mt-0 lg:text-[16px] font-medium">Attention to the small details that make systems robust.</li>
                  </div>
                  <div className="flex">
                    <div>
                      <Image
                        src={RedArrow} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="-mt-1 text-[15px] lg:mt-0 lg:text-[16px] font-medium">Continuous improvement as a first-class engineering habit.</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[25px] text-[#E4312D] font-bold text-center w-full mt-10">ENGAGEMENT LIFECYCLE</h1>
        <div className="2xl:py-10 lg:py-15 py-10 lg:px-20 px-4 flex flex-col gap-0">
          {
            EngagementLifeCycle.map((item, index) => {
              return (
                <div key={item.id} className="flex flex-col">
                  <EngagementLifeCycleComponent item={item} />
                  {item.id < 4 && (
                    <Image
                      src={LifeCycleArrow}
                      alt=""
                      className="relative z-10 block mx-auto -mb-5 lg:-mt-0 lg:ml-22 lg:mx-0"
                    />
                  )}
                </div>
              )
            })
          }
        </div>
        <h1 className="text-[25px] text-[#E4312D] font-bold text-center w-full py-10">OUR PRODUCT DEVELOPMENT LIFECYCLE</h1>
        <div className="relative grid w-full grid-cols-1 [--sidebar:150px] lg:grid-cols-[var(--sidebar)_1fr]">
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              z-[1]
              left-[36px]
              lg:left-[calc((100%+var(--sidebar))/2)]
              -translate-x-1/2
              top-[calc(3rem+50px)]
              bottom-[calc(3rem+50px)]
              w-px
              border-l-2
              border-dashed
              border-[#666666]
            "
          />

          {PRODUCT_DEVELOPMENT_LIFECYCLE.map((item) => (
            <Fragment key={item.id}>
              <div className="hidden items-center justify-center bg-[#E4312D] px-1 lg:flex">
                <span className="-rotate-90 translate-x-8 whitespace-nowrap text-[11px] font-bold tracking-wider text-white uppercase lg:text-xl">
                  {item.section}
                </span>
              </div>

              <div
                className={`flex w-full flex-col items-center py-12 ${item.id % 2 === 0 ? "bg-[#E6E6E6]" : "bg-[#F2F2F2]"
                  }`}
              >
                <ProductDevelopmentLifeCycleComponent section={item} />
              </div>
            </Fragment>
          ))}
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
