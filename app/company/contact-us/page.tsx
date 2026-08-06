"use client";

import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import PhoneIcon from "@/public/footer-assets/phone.svg";
import EmailIcon from "@/public/footer-assets/mail.svg";
import LinkedinIcon from "@/public/footer-assets/linkedin.svg";
import ContactUsBanner from "@/public/banners/ContactUsBanner.svg";
import CallIcon from "@/public/contact-us/call.svg";
import SendIcon from "@/public/contact-us/send.svg";
import TelephoneIcon from "@/public/contact-us/telephone.svg";
import MailIcon from "@/public/contact-us/mail.svg";
import PinIcon from "@/public/contact-us/pin-icon.svg";
import Linkedin from "@/public/contact-us/linkedin.svg";
import PurplePin from "@/public/contact-us/purple-pin-icon.svg";
import SubmitApplication from "@/public/contact-us/submit-application-icon.svg";
import PurpleTelephone from "@/public/contact-us/purple-phone-icon.svg";
import { useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";

export default function Home() {

  const [value, setValue] = useState<any>()
  const [phone, setPhone] = useState<string | undefined>("");

  return (  
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black pt-[80px] md:pt-[90px]">
        <HeaderComponent active="CONTACT US" />
        <div className="relative w-full h-[300px] lg:h-[600px] 2xl:h-[600px] 2xl:bottom-0">
          <Image
            src={ContactUsBanner}
            alt="Contact Us Banner"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 z-10 lg:-mt-10">
            <h1 className="text-white font-semibold">
              Contact Us
            </h1>

            <h1 className="text-white font-bold text-[28px]">
              Let's Build <span className="text-[#E4312D]">safer, smarter</span><br /> solutions together.
            </h1>

            <span className="text-white xl:text-lg lg:text-[18px] lg:mt-6 mt-4 max-w-4xl">
              Whether you are exploring a new product idea, scaling your engineering team or modernizing a legacy platform, we are ready to listen, advise and partner.
            </span>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center gap-2 px-3 py-2 bg-[#E4312D] text-white rounded-lg hover:bg-[#BE2C2A] transition-colors duration-300 cursor-pointer">
                <Image
                  src={SendIcon}
                  alt="Send Icon"
                />
                <span>Send Message</span>
              </button>

              <button className="flex items-center gap-2 px-3 py-2 bg-[#2D3188] text-white rounded-lg hover:bg-[#1C2172] transition-colors duration-300 cursor-pointer">
                <Image
                  src={CallIcon}
                  alt="Call Icon"
                />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className="px-6 py-10 bg-[#F2F3F8]">
          <h3 className="text-[#E4312D] font-bold">GET IN TOUCH</h3>
          <h1 className="font-bold text-[24px]">Reach Us Directly</h1>
          <p className="text-[#64748B]">Choose the channel that works best for you. We respond quickly and keep every conversation focused on outcomes.</p>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center justify-center gap-3 bg-white rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-4 py-4 w-full max-w-md">
              <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-[#E4312D] bg-[#FFF5F5]">
                <Image
                  src={TelephoneIcon}
                  alt="Telephone Icon"
                  className="h-6 w-6"
                />
              </div>

              <span className="text-[14px] font-medium text-[#1A1A1A]">
                +91 70226 16214
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-4 py-4 w-full max-w-md">
              <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-[#5C1BAB] bg-[#F6EEFF]">
                <Image
                  src={MailIcon}
                  alt="Telephone Icon"
                  className="h-6 w-6"
                />
              </div>
              <span className="text-[14px] font-medium text-[#1A1A1A]">
                info@emcus.co.in
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-4 py-4 w-full max-w-md">
              <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-[#077A3D] bg-[#E1FAE4]">
                <Image
                  src={PinIcon}
                  alt="Telephone Icon"
                  className="h-6 w-6"
                />
              </div>
              <span className="text-[14px] font-medium text-[#1A1A1A]">
                Novel MSR Park, 93/9, Varthur Main Road, Munnekolalu, Marathalli, Bengaluru 560037, India
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-4 py-4 w-full max-w-md">
              <div className="flex items-center gap-3">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-[#0093D5] bg-[#E1F5FE]">
                  <Image
                    src={Linkedin}
                    alt="Telephone Icon"
                    className="h-6 w-6"
                  />
                </div>
                <span className="text-[14px] font-medium text-[#64748B]">
                  Linkedin
                </span>
              </div>
              <p className="text-[14px] font-medium">Connect With US</p>
            </div>
          </div>
        </div>
        <div className="px-8 pt-8">
          <h3 className="font-bold text-[#E4312D] mb-2">START CONVERSATION</h3>
          <p className="text-[24px] font-bold">Tell Us About Your Project</p>
          <p className="text-[#64748B]">Share a few details and we will get back to you within one business day.</p>
        </div>
        <div className="w-full py-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT COLUMN */}
            <div className="space-y-8">
              {/* Map */}
              <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.236936976125!2d77.69739667592246!3d12.956684887357326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b0fb0b9ea7%3A0xcd5c8a1ebc0498!2sNovel%20Office%20Marathahalli!5e0!3m2!1sen!2sin!4v1772000645241!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Address */}
              <div className="w-full rounded-2xl bg-[#F5F6FF] p-6">
                <h3 className="text-[20px] font-semibold text-[#2D3188]">
                  EMCUS Technology Solutions
                </h3>

                <div className="mt-6 space-y-5">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      <Image
                        src={PurplePin}
                        alt="Location"
                        className="h-5 w-5"
                      />
                    </div>

                    <p className="text-[16px] leading-8 text-[#667085] lg:pr-50 leading-tight">
                      Novel MSR Park, 93/9, Varthur Main Road, Munnekolalu, Marathalli, Bengaluru 560037, India
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">
                      <Image
                        src={PurpleTelephone}
                        alt="Phone"
                        className="h-5 w-5"
                      />
                    </div>

                    <a
                      href={`tel:+91 70226 16214}`}
                      className="text-[16px] text-[#667085] hover:text-[#2D3188]"
                    >
                      +91 70226 16214
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">
                      <Image
                        src={MailIcon}
                        alt="Email"
                        className="h-5 w-5"
                      />
                    </div>

                    <a
                      href={`mailto:Info@emcus.co.in`}
                      className="text-[16px] text-[#667085] hover:text-[#2D3188]"
                    >
                      Info@emcus.co.in
                    </a>
                  </div>
                </div>

                {/* Google Maps Button */}
                <a
                  href={"https://maps.app.goo.gl/BpXtvsdcAPenqYEz9"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-lg border-2 border-[#2D3188] px-3 py-1 text-lg font-semibold text-[#2D3188] transition-all duration-300 hover:bg-[#2D3188] hover:text-white"
                >
                  <Image
                    src={PurplePin}
                    alt="Google Maps"
                    className="h-5 w-5"
                  />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN - CONTACT FORM */}
            <div className="p-8">

              <form className="space-y-5">

                {/* Name Row */}
                <div className="">

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="firstName"
                      className="text-md font-bold text-gray-700"
                    >
                      Name <span className="text-[#d94536]">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Enter Name"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#322986] bg-[#FBFBFB]"
                    />
                  </div>
                </div>
                {/* Work Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-md font-bold text-gray-700"
                  >
                    Work Email <span className="text-[#d94536]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#322986] bg-[#FBFBFB]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-md font-bold text-gray-700"
                  >
                    Phone <span className="text-[#d94536]">*</span>
                  </label>
                  <PhoneInputWithCountrySelect
                    international
                    defaultCountry="IN"
                    value={phone}
                    onChange={setPhone}
                    placeholder="00000 00000"
                    className="phone-input"
                  />
                </div>
                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="subject"
                    className="text-md font-bold text-gray-700"
                  >
                    Subject <span className="text-[#d94536]">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#322986] bg-[#FBFBFB]"
                  />
                </div>
                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-gray-700"
                  >
                    Message <span className="text-[#d94536]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    placeholder="Tell us about your Project, Timeline, and Requirement."
                    rows={5}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#322986] bg-[#FBFBFB]"
                  ></textarea>
                </div>
                <p className="text-[11px] text-[#64748B]">Fields marked<span className="text-[#d94536]"> * </span>are required. Submitting will open your email client with a pre-filled message.</p>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-[#322986] text-white font-semibold rounded-md hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
