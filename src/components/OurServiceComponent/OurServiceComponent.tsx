import { ServiceItem } from '@/src/data/our-services.data';
import Image from 'next/image';
import ArrowBullet from '@/public/common/arrow-bullet.svg';
import React from 'react';

const OurServiceComponent = ({
    serviceItem,
}: {
    serviceItem: ServiceItem;
}) => {
    return (
        <div
            className={`
                flex flex-col lg:flex-row
                ${serviceItem.id % 2 === 0 ? 'lg:flex-row-reverse' : ''}
                gap-6 lg:gap-10
                px-4 lg:px-0
            `}
        >
            {/* Image - First on mobile */}
            <div className="order-1 lg:order-2 flex-1">
                {/* Mobile Image */}
                <Image
                    src={serviceItem.mobileImage}
                    alt={serviceItem.title}
                    className="block lg:hidden w-full h-auto rounded-xl mx-auto ml-2"
                />

                {/* Desktop Image */}
                <Image
                    src={serviceItem.image}
                    alt={serviceItem.title}
                    className="hidden lg:block w-full h-auto rounded-xl"
                />
            </div>

            {/* Data - Below image on mobile */}
            <div className="order-2 lg:order-1 flex-1">
                <h2
                    className={
                        `hidden lg:block text-2xl lg:text-3xl font-bold text-[#E4312D] ${serviceItem.id % 2 === 0 ? '' : 'lg:pl-4'}`
                    }
                >
                    {serviceItem.title}
                </h2>

                <div
                    className={`
                        grid grid-cols-1 lg:grid-cols-2
                        gap-6
                        lg:mt-4
                        -mt-6
                        px-2
                        ${serviceItem.id % 2 === 0 ? 'lg:relative lg:right-3' : ''}
                    `}
                >
                    {/* Left Items */}
                    <div className="space-y-3">
                        {serviceItem.leftItems.map((item, index) => (
                            <div
                                key={`left-${index}`}
                                className="flex items-start gap-2"
                            >
                                <Image
                                    src={ArrowBullet}
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="mt-1 shrink-0"
                                />

                                <p className="text-gray-600">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Items */}
                    <div className="space-y-3">
                        {serviceItem.rightItems.map((item, index) => (
                            <div
                                key={`right-${index}`}
                                className="flex items-start gap-2"
                            >
                                <Image
                                    src={ArrowBullet}
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="mt-1 shrink-0"
                                />

                                <p className="text-gray-600">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServiceComponent;