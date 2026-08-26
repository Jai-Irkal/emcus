import { ProductDevelopmentSection, Steps } from '@/src/data/product-development-lifecycle.data';
import React, { Fragment } from 'react';
import HegxagonComponent from '../HexagonComponent/HegxagonComponent';
import HorizontalLine from "@/public/common/HorizontalLine.svg";
import Image from 'next/image';

const StepCard = ({ item }: { item: Steps }) => (
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
        <div className="shrink-0">
            <Image
                src={item.image}
                alt={item.title}
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
            />
        </div>

        <div className="min-w-0">
            <h3 className="
                text-[#E4312D]
                text-lg
                sm:text-xl
                lg:text-[21px]
                font-semibold
            ">
                {item.title}
            </h3>

            <p className="
                text-[#333333]
                text-sm
                sm:text-base
                lg:text-[18px]
                leading-6
                lg:leading-7
                mt-1
            ">
                {item.description}
            </p>
        </div>
    </div>
);

const ProductDevelopmentLifeCycleComponent = ({
    section,
}: {
    section: ProductDevelopmentSection;
}) => {
    return (
        <div className="grid w-full grid-cols-[40px_1fr] items-center gap-x-3 gap-y-6 px-4 lg:grid-cols-[1fr_40px_1fr] lg:gap-x-0 lg:gap-y-4 lg:px-0">
            {section.Steps.map((item) => {
                const isEven = item.id % 2 === 0;

                return (
                    <Fragment key={item.id}>
                        <div className={`hidden w-full lg:flex items-center justify-end ${isEven ? "" : "lg:invisible"}`}>
                            {isEven && (
                                <>
                                    <StepCard item={item} />
                                    <Image
                                        src={HorizontalLine}
                                        alt=""
                                        className="shrink-0"
                                    />
                                </>
                            )}
                        </div>

                        <div className="relative z-[2] flex justify-center col-start-1 lg:col-start-2">
                            <HegxagonComponent num={item.id} />
                        </div>

                        <div className={`flex w-full items-center justify-start col-start-2 lg:col-start-3 ${isEven ? "lg:hidden" : ""}`}>
                            {!isEven && (
                                <Image
                                    src={HorizontalLine}
                                    alt=""
                                    className="hidden lg:block shrink-0"
                                />
                            )}
                            <StepCard item={item} />
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
};

export default ProductDevelopmentLifeCycleComponent;
