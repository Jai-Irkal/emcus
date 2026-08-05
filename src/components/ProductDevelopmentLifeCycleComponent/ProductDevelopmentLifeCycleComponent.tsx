import { ProductDevelopmentSection } from '@/src/data/product-development-lifecycle.data';
import React from 'react';
import HegxagonComponent from '../HexagonComponent/HegxagonComponent';
import HorizontalLine from "@/public/common/HorizontalLine.svg";
import Image from 'next/image';
import AnimatedConnector from '../AnimatedConnector/AnimatedConnector';
import { it } from 'node:test';

const ProductDevelopmentLifeCycleComponent = ({
    section,
}: {
    section: ProductDevelopmentSection;
}) => {
    console.log(section.section, section.Steps.length);

    return (
        <div className={`flex flex-col gap-4`}>
            {section.Steps.map((item) => (
                <><div key={item.id} className={`flex items-center ${item.id % 2 === 0 ? "flex-row-reverse lg:mr-118" : "lg:ml-111"}`}>
                    <HegxagonComponent num={item.id} />
                    <Image src={HorizontalLine} alt='line' />
                    <div className="flex items-center gap-4 bg-white rounded-[28px] shadow-xl px-6 py-5 w-[420px] min-h-[110px]">
                        {/* Icon */}
                        <div className="shrink-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={48}
                                height={48} />
                        </div>

                        {/* Text */}
                        <div>
                            <h3 className="text-[#D94536] text-2xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-lg leading-7 mt-1">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
                </>

            ))}
        </div>
    );
};

export default ProductDevelopmentLifeCycleComponent