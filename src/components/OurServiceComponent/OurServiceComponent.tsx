import { ServiceItem } from '@/src/data/our-services.data'
import Image from 'next/image';
import ArrowBullet from '@/public/common/arrow-bullet.svg'
import React from 'react'

const OurServiceComponent = ({ serviceItem }: { serviceItem: ServiceItem }) => {
    return (
        <div
            className={`flex flex-col lg:flex-row ${serviceItem.id % 2 === 0 ? "lg:flex-row-reverse" : ""
                } gap-6 lg:gap-10 px-4 lg:px-0`}
        >
            {/* Left Column */}
            <div className="flex-1">
                <h2 className={`text-2xl font-bold text-[#E4312D] ${serviceItem.id % 2 === 0 ? "" : "pl-4"}`}>{serviceItem.title}</h2>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 px-2 ${serviceItem.id % 2 === 0 ? "relative right-3" : ""}`}>
                    <ul className="">
                        {serviceItem.leftItems.map((item, index) => (
                            <div className="flex items-center gap-2" key={index}>
                                <Image src={ArrowBullet} alt="Arrow Bullet" className="inline-block w-4 h-4" />
                                <li key={index} className="text-gray-700 dark:text-gray-300 my-1">
                                    {item}
                                </li>
                            </div>
                        ))}
                    </ul>
                    <ul className="">
                        {serviceItem.rightItems.map((item, index) => (
                            <div className="flex items-center gap-2" key={index}>
                                <Image src={ArrowBullet} alt="Arrow Bullet" className="inline-block w-4 h-4" />
                                <li key={index} className="text-gray-700 dark:text-gray-300 my-1">
                                    {item}
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex-1">
                <Image
                    src={serviceItem.image}
                    alt={serviceItem.title}
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </div>
    )
}

export default OurServiceComponent