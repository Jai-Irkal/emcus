"use client";

type TextBannerProps = {
  text: string;
};

const TextBanner = (props: TextBannerProps) => {
  return (
    <div
      className="
        relative 
        bg-[#F1F1F1] 
        w-full 
        py-6 sm:py-8 lg:py-10
        px-4 sm:px-6 lg:px-12
        flex items-center justify-center
        shadow-[0_-8px_20px_rgba(0,0,0,0.15),0_8px_20px_rgba(0,0,0,0.15)]
        lg:-mt-16 2xl:-mt-24
      "
    >
      <h2
        className="
          text-center 
          text-[#444444] 
          text-base sm:text-lg md:text-xl lg:text-2xl
          max-w-[95%] sm:max-w-[700px] lg:max-w-[1000px]
          leading-relaxed
        "
      >
        {props.text}
      </h2>
    </div>
  );
};

export default TextBanner;