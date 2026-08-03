import Image from "next/image";
import React from "react";
import icon from "@/public/iso-icon/ISO.svg";

const ISOComponent = () => {
  return (
    <section className="flex items-center gap-3 py-8">
      {/* Vertical Line */}
      <div className="h-10 w-[1px] bg-[#000000]" />

      {/* Text */}
      <div className="flex-1">
        <p className="text-[#000000] text-[8px]">
          AN ISO9001:2015 CERTIFIED COMPANY
        </p>
      </div>

      {/* Image */}
      <Image
        src={icon} // Update with your image path
        alt="ISO Certification"
        width={38}
        height={10}
        className="object-contain"
      />
    </section>
  );
};

export default ISOComponent;