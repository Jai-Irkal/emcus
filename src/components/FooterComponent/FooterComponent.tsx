"use client";

import React, { useState } from "react";
import icon from "@/public/footer-assets/footer-logo.png";
import pin from "@/public/footer-assets/pin-icon.svg";
import phoneIcon from "@/public/footer-assets/phone.svg";
import mailIcon from "@/public/footer-assets/mail.svg";
import linkedinIcon from "@/public/footer-assets/linkedin.svg";
import Image from "next/image";

const FooterComponent = () => {
    return (
        <footer className="bg-[#322986] text-white py-16 px-6">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-12 items-start">

                {/* LEFT — ADDRESS */}
                <div>
                    <Image
                        src={icon}
                        alt="Location Pin"
                        className="w-40 object-contain"
                        priority
                    />
                    <div className="flex items-start gap-3 mt-6">
                        <Image
                            src={pin}
                            alt="Location Pin"
                            className="w-5 object-contain mt-1"
                            priority
                        />
                        <p className="text-[14px] leading-relaxed max-w-sm w-50">
                            Novel MSR Park, 93/9, Varthur Main Road, Munnekolalu, Marathalli,
                            Bengaluru 560037. INDIA
                        </p>
                    </div>
                </div>

                {/* MIDDLE — LINKS */}
                {/* MIDDLE — LINKS */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold mb-4 text-[16px] text-[#4590ca]">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>HOME</li>
                            <li>WHAT WE DO</li>
                            <li>HOW WE WORK</li>
                            <li>OUR TEAM</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-bold mb-4 text-[16px] text-[#4590ca]">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            <li>BLOG</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="font-bold mb-4 text-[16px] text-[#4590ca]">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            <li>ABOUT US</li>
                            <li>CAREERS</li>
                            <li>CONTACT US</li>
                        </ul>
                    </div>

                </div>

                {/* RIGHT — CONTACT */}
                <div className="text-md">
                    <h3 className="font-bold mb-4 text-[16px] text-[#4590ca]">
                        Contact
                    </h3>

                    <ul className="space-y-4">

                        {/* Phone */}
                        <li className="flex items-center gap-3">
                            <Image
                                src={phoneIcon}
                                alt="Phone"
                                className="w-8 h-6 object-contain"
                            />
                            <span>+91 70226 16214</span>
                        </li>

                        {/* Email */}
                        <li className="flex items-center gap-3">
                            <Image
                                src={mailIcon}
                                alt="Email"
                                className="w-8 h-6 object-contain"
                            />
                            <span>info@emcus.com</span>
                        </li>

                        {/* LinkedIn */}
                        <li className="flex items-center gap-3">
                            <Image
                                src={linkedinIcon}
                                alt="LinkedIn"
                                className="w-8 h-8 object-contain"
                            />
                            <span className="hover:underline cursor-pointer">
                                LinkedIn
                            </span>
                        </li>

                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default FooterComponent;