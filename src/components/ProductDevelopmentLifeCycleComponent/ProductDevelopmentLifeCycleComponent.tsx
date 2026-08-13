import { ProductDevelopmentSection } from '@/src/data/product-development-lifecycle.data';
import React from 'react';
import HegxagonComponent from '../HexagonComponent/HegxagonComponent';
import HorizontalLine from "@/public/common/HorizontalLine.svg";
import Image from 'next/image';

const ProductDevelopmentLifeCycleComponent = ({
    section,
}: {
    section: ProductDevelopmentSection;
}) => {
    return (
        <div className="flex flex-col gap-6 lg:gap-4 lg:px-0 px-4">
            {section.Steps.map((item) => (
                <div
                    key={item.id}
                    className={`
                        flex items-center
                        gap-3
                        lg:gap-0
                        ${item.id % 2 === 0
                            ? "lg:flex-row-reverse lg:mr-118"
                            : "lg:ml-111"
                        }
                    `}
                >
                    {/* Hexagon */}
                    <div className="shrink-0">
                        <HegxagonComponent num={item.id} />
                    </div>

                    {/* Connector */}
                    <Image
                        src={HorizontalLine}
                        alt=""
                        className="hidden lg:block shrink-0"
                    />

                    {/* Content Card */}
                    <div className="
                        flex items-center gap-3
                        sm:gap-4
                        bg-white
                        rounded-[28px]
                        shadow-xl
                        px-4 py-4
                        sm:px-6 sm:py-5
                        w-full
                        lg:w-[420px]
                        min-h-[100px]
                        lg:min-h-[110px]
                    ">
                        {/* Icon */}
                        <div className="shrink-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={48}
                                height={48}
                                className="w-10 h-10 sm:w-12 sm:h-12"
                            />
                        </div>

                        {/* Text */}
                        <div className="min-w-0">
                            <h3 className="
                                text-[#D94536]
                                text-lg
                                sm:text-xl
                                lg:text-2xl
                                font-semibold
                            ">
                                {item.title}
                            </h3>

                            <p className="
                                text-gray-600
                                text-sm
                                sm:text-base
                                lg:text-lg
                                leading-6
                                lg:leading-7
                                mt-1
                            ">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductDevelopmentLifeCycleComponent;