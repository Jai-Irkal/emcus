"use client";

type TextBannerProps = {
    text: string;
};

const TextBanner = (props: TextBannerProps) => {
    return (
        <div className="relative bg-[#d94536] w-full h-[140px] xl:h-[120px] z-0 flex items-center justify-between px-6 shadow-xl lg:bottom-20 2xl:bottom-30">
            <div className="w-full">
                <h2 className="text-center text-white text-[16px] xl:text-[20px] 2xl:px-100 lg:px-26">
                    {props.text}
                </h2>
            </div>
        </div>
    );
};

export default TextBanner;