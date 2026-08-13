"use client";

type TextBannerProps = {
    text: string;
};

const TextBanner = (props: TextBannerProps) => {
    return (
        <div
            className="relative w-full h-[134px] xl:h-[120px] z-0 flex items-center justify-between px-6 shadow-xl lg:bottom-20 2xl:bottom-30
             bg-gradient-to-r from-[#9B1915] to-[#E20E17] mt-30 lg:mt-0 2xl:mt-40"
        >
            <div className="w-full">
                <h2 className="text-center text-white text-[14px] lg:text-[20px] lg:px-[170px] xl:text-[20px] 2xl:px-100">
                    {props.text}
                </h2>
            </div>
        </div>
    );
};

export default TextBanner;