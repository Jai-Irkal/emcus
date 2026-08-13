import Image from "next/image";
import React from "react";
import icon from "@/public/iso-icon/ISO.svg";

const ISOComponent = () => {
  return (
    <section className="flex items-center justify-end lg:justify-start lg:gap-3 py-8 mr-4">
      {/* Vertical Line - Desktop only */}
      <div className="hidden lg:block h-10 w-[1px] bg-[#000000]" />

      {/* Text - Desktop only */}
      <div className="hidden lg:flex items-center">
        <p className="text-[#000000] text-[8px]">
          AN ISO9001:2015 CERTIFIED COMPANY
        </p>
      </div>

      {/* ISO Icon */}
      <Image
        src={icon}
        alt="ISO Certification"
        width={38}
        height={10}
        className="object-contain ml-30 lg:ml-0"
      />
    </section>
  );
};

export default ISOComponent;