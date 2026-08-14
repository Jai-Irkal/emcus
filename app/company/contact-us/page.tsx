"use client";

import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";

import ContactUsBanner from "@/public/banners/ContactUsBanner.svg";
import CallIcon from "@/public/contact-us/call.svg";
import SendIcon from "@/public/contact-us/send.svg";
import TelephoneIcon from "@/public/contact-us/telephone.svg";
import MailIcon from "@/public/contact-us/mail.svg";
import PinIcon from "@/public/contact-us/pin-icon.svg";
import Linkedin from "@/public/contact-us/linkedin.svg";
import PurplePin from "@/public/contact-us/purple-pin-icon.svg";
import PurpleTelephone from "@/public/contact-us/purple-phone-icon.svg";

import { useRef, useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";

export default function Home() {
    const [phone, setPhone] = useState<string | undefined>("");

    const formRef = useRef<HTMLDivElement>(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        subject: "",
        message: "",
        phone: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: "",
                    email: formData.email,
                    phone: phone,
                    subject: formData.subject,
                    message: `${formData.message}`,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            alert("Message sent successfully.");

            setFormData({
                firstName: "",
                email: "",
                subject: "",
                message: "",
                phone: ""
            });

            setPhone("");
        } catch (error: any) {
            alert(error.message || "Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full bg-zinc-50">
            <main className="flex min-h-screen w-full flex-col bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px]">

                <HeaderComponent active="CONTACT US" />

                <section className="relative w-full h-[520px] sm:h-[560px] md:h-[600px] lg:h-[650px] overflow-hidden">
                    <Image
                        src={ContactUsBanner}
                        alt="Contact Us Banner"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Hero Content */}
                    <div className="absolute inset-0 z-10 flex items-center">
                        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24">

                            <div className="max-w-5xl">

                                <h1 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                                    Contact Us
                                </h1>

                                <h2 className="
                                    mt-3
                                    text-2xl
                                    sm:text-3xl
                                    md:text-4xl
                                    lg:text-[44px]
                                    xl:text-[48px]
                                    leading-tight
                                    font-bold
                                    text-white
                                ">
                                    Let's Build{" "}
                                    <span className="text-[#E4312D]">
                                        safer, smarter
                                    </span>
                                    <br className="hidden sm:block" />
                                    {" "}solutions together.
                                </h2>

                                <p className="
                                    mt-4
                                    sm:mt-5
                                    lg:mt-6
                                    max-w-4xl
                                    text-sm
                                    sm:text-base
                                    md:text-lg
                                    lg:text-xl
                                    leading-relaxed
                                    text-white
                                ">
                                    Whether you are exploring a new product idea,
                                    scaling your engineering team or modernizing a
                                    legacy platform, we are ready to listen, advise
                                    and partner.
                                </p>

                                {/* Hero Buttons */}
                                <div className="
                                    mt-6
                                    sm:mt-8
                                    flex
                                    xs:flex-row
                                    sm:flex-row
                                    gap-3
                                    sm:gap-4
                                ">
                                    <button
                                        onClick={scrollToForm}
                                        className="
                                            flex
                                            w-full
                                            sm:w-auto
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-lg
                                            bg-[#E4312D]
                                            px-4
                                            py-3
                                            text-sm
                                            sm:text-base
                                            text-white
                                            transition-colors
                                            duration-300
                                            hover:bg-[#BE2C2A]
                                        "
                                    >
                                        <Image
                                            src={SendIcon}
                                            alt="Send Icon"
                                            className="h-5 w-5"
                                        />
                                        <span>Send Message</span>
                                    </button>

                                    <a
                                        href="tel:+917022616214"
                                        className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#2D3188] px-4 py-3 text-sm sm:text-base text-white transition-colors duration-300 hover:bg-[#1C2172]"
                                    >
                                        <Image
                                            src={CallIcon}
                                            alt="Call Icon"
                                            className="h-5 w-5"
                                        />
                                        <span>Call Now</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="
                    w-full
                    bg-[#F2F3F8]
                    px-4
                    py-8
                    sm:px-6
                    sm:py-10
                    md:px-8
                    lg:px-10
                    xl:px-16
                ">
                    <div className="mx-auto w-full max-w-7xl">

                        <h3 className="
                            text-sm
                            sm:text-base
                            font-bold
                            text-[#E4312D]
                        ">
                            GET IN TOUCH
                        </h3>

                        <h2 className="
                            mt-1
                            text-2xl
                            sm:text-3xl
                            font-bold
                            text-[#1A1A1A]
                        ">
                            Reach Us Directly
                        </h2>

                        <p className="
                            mt-2
                            text-sm
                            sm:text-base
                            leading-relaxed
                            text-[#64748B]
                        ">
                            Choose the channel that works best for you.
                            We respond quickly and keep every conversation
                            focused on outcomes.
                        </p>

                        {/* Contact Cards */}
                        <div className="
                            mt-6
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-4
                            gap-4
                        ">

                            {/* Phone */}
                            <a
                                href="tel:+917022616214"
                                className="flex min-h-[90px] items-center justify-start gap-3 rounded-[24px] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
                            >
                                <div
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-[#E4312D] bg-[#FFF5F5]"
                                >
                                    <Image
                                        src={TelephoneIcon}
                                        alt="Telephone"
                                        className="h-5 w-5"
                                    />
                                </div>

                                <span
                                    className="break-all text-sm font-medium text-[#1A1A1A]"
                                >
                                    +91 70226 16214
                                </span>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:info@emcus.co.in"
                                className="flex min-h-[90px] items-center justify-start gap-3 rounded-[24px] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
                            >
                                <div
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-[#5C1BAB] bg-[#F6EEFF]"
                                >
                                    <Image
                                        src={MailIcon}
                                        alt="Email"
                                        className="h-5 w-5"
                                    />
                                </div>

                                <span
                                    className="break-all text-sm font-medium text-[#1A1A1A]"
                                >
                                    info@emcus.co.in
                                </span>
                            </a>

                            {/* Address */}
                            <a
                                href="https://maps.app.goo.gl/E2YRgug32vX9vqeM7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-h-[90px] items-center justify-start gap-3 rounded-[24px] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
                            >
                                <div
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-[#077A3D] bg-[#E1FAE4]"
                                >
                                    <Image
                                        src={PinIcon}
                                        alt="Location"
                                        className="h-5 w-5"
                                    />
                                </div>

                                <span
                                    className="text-sm font-medium leading-5 text-[#1A1A1A]"
                                >
                                    Novel MSR Park, 93/9, Varthur Main Road,
                                    Munnekolalu, Marathalli, Bengaluru 560037,
                                    India
                                </span>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/emcustechnologysolutions/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-h-[90px] flex-col items-center justify-center gap-2 rounded-[24px] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-[#0093D5] bg-[#E1F5FE]"
                                    >
                                        <Image
                                            src={Linkedin}
                                            alt="LinkedIn"
                                            className="h-5 w-5"
                                        />
                                    </div>

                                    <span
                                        className="text-sm font-medium text-[#64748B]"
                                    >
                                        Linkedin
                                    </span>
                                </div>

                                <p className="text-sm font-medium">
                                    Connect With Us
                                </p>
                            </a>

                        </div>
                    </div>
                </section>

                <section
                    ref={formRef}
                    className="
                    w-full
                    px-4
                    pt-8
                    sm:px-6
                    sm:pt-10
                    md:px-8
                    lg:px-10
                    xl:px-16
                    scroll-mt-24
                ">
                    <div className="mx-auto max-w-7xl">

                        <h3 className="
                            mb-2
                            text-sm
                            sm:text-base
                            font-bold
                            text-[#E4312D]
                        ">
                            START CONVERSATION
                        </h3>

                        <h2 className="
                            text-2xl
                            sm:text-3xl
                            font-bold
                            text-[#1A1A1A]
                        ">
                            Tell Us About Your Project
                        </h2>

                        <p className="
                            mt-2
                            max-w-3xl
                            text-sm
                            sm:text-base
                            leading-relaxed
                            text-[#64748B]
                        ">
                            Share a few details and we will get back to you
                            within one business day.
                        </p>

                    </div>
                </section>

                <section className="w-full py-8 sm:py-10 lg:py-12">
                    <div className="
                        mx-auto
                        grid
                        w-full
                        max-w-7xl
                        grid-cols-1
                        gap-8
                        px-4
                        sm:px-6
                        md:px-8
                        lg:grid-cols-2
                        lg:gap-10
                        xl:gap-16
                        lg:px-10
                        xl:px-16
                    ">

                        <div className="w-full space-y-6 sm:space-y-8">

                            {/* Map */}
                            <div className="
                                h-[280px]
                                w-full
                                overflow-hidden
                                rounded-xl
                                shadow-md
                                sm:h-[350px]
                                lg:h-[400px]
                            ">
                                <iframe
                                    title="Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.236936976125!2d77.69739667592246!3d12.956684887357326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b0fb0b9ea7%3A0xcd5c8a1ebc0498!2sNovel%20Office%20Marathahalli!5e0!3m2!1sen!2sin!4v1772000645241!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    allowFullScreen
                                    className="h-full w-full border-0"
                                />
                            </div>

                            {/* Address Card */}
                            <div className="
                                w-full
                                rounded-2xl
                                bg-[#F5F6FF]
                                p-5
                                sm:p-6
                            ">
                                <h3 className="
                                    text-lg
                                    sm:text-xl
                                    font-semibold
                                    text-[#2D3188]
                                ">
                                    EMCUS Technology Solutions
                                </h3>

                                <div className="mt-5 space-y-5">

                                    {/* Address */}
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="mt-1 shrink-0">
                                            <Image
                                                src={PurplePin}
                                                alt="Location"
                                                className="h-5 w-5"
                                            />
                                        </div>

                                        <p className="
                                            text-sm
                                            sm:text-base
                                            leading-6
                                            text-[#667085]
                                        ">
                                            Novel MSR Park, 93/9, Varthur Main
                                            Road, Munnekolalu, Marathalli,
                                            Bengaluru 560037, India
                                        </p>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="shrink-0">
                                            <Image
                                                src={PurpleTelephone}
                                                alt="Phone"
                                                className="h-5 w-5"
                                            />
                                        </div>

                                        <a
                                            href="tel:+917022616214"
                                            className="
                                                break-all
                                                text-sm
                                                sm:text-base
                                                text-[#667085]
                                                hover:text-[#2D3188]
                                            "
                                        >
                                            +91 70226 16214
                                        </a>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="shrink-0">
                                            <Image
                                                src={MailIcon}
                                                alt="Email"
                                                className="h-5 w-5"
                                            />
                                        </div>

                                        <a
                                            href="mailto:Info@emcus.co.in"
                                            className="
                                                break-all
                                                text-sm
                                                sm:text-base
                                                text-[#667085]
                                                hover:text-[#2D3188]
                                            "
                                        >
                                            Info@emcus.co.in
                                        </a>
                                    </div>

                                </div>

                                {/* Google Maps */}
                                <a
                                    href="https://maps.app.goo.gl/BpXtvsdcAPenqYEz9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        mt-6
                                        inline-flex
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-lg
                                        border-2
                                        border-[#2D3188]
                                        px-3
                                        py-2
                                        text-sm
                                        sm:w-auto
                                        sm:text-base
                                        font-semibold
                                        text-[#2D3188]
                                        transition-all
                                        duration-300
                                    "
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

                        <div className="contact-form-card w-full p-5 sm:p-6 lg:p-6 xl:p-8 -mt-7">
                            <form className="space-y-5" onSubmit={handleSubmit}>

                                {/* Name */}
                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor="firstName"
                                        className="text-sm sm:text-base font-bold text-gray-700"
                                    >
                                        Name{" "}
                                        <span className="text-[#d94536]">
                                            *
                                        </span>
                                    </label>

                                    <input
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="
                                            w-full
                                            rounded-md
                                            border
                                            border-gray-300
                                            bg-[#FBFBFB]
                                            px-4
                                            py-3
                                            text-sm
                                            sm:text-base
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-[#322986]
                                        "
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor="email"
                                        className="text-sm sm:text-base font-bold text-gray-700"
                                    >
                                        Work Email{" "}
                                        <span className="text-[#d94536]">
                                            *
                                        </span>
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="
                                            w-full
                                            rounded-md
                                            border
                                            border-gray-300
                                            bg-[#FBFBFB]
                                            px-4
                                            py-3
                                            text-sm
                                            sm:text-base
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-[#322986]
                                        "
                                    />
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm sm:text-base font-bold text-gray-700"
                                    >
                                        Phone{" "}
                                        <span className="text-[#d94536]">
                                            *
                                        </span>
                                    </label>

                                    <PhoneInputWithCountrySelect
                                        international
                                        defaultCountry="IN"
                                        value={phone}
                                        onChange={setPhone}
                                        placeholder="00000 00000"
                                        className="phone-input bg-[#FBFBFB]"
                                    />
                                </div>

                                {/* Subject */}
                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor="subject"
                                        className="text-sm sm:text-base font-bold text-gray-700"
                                    >
                                        Subject{" "}
                                        <span className="text-[#d94536]">
                                            *
                                        </span>
                                    </label>

                                    <input
                                        id="subject"
                                        type="text"
                                        placeholder="How can we help?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border border-gray-300 bg-[#FBFBFB] px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#322986]"
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor="message"
                                        className="text-sm sm:text-base font-bold text-gray-700"
                                    >
                                        Message{" "}
                                        <span className="text-[#d94536]">
                                            *
                                        </span>
                                    </label>

                                    <textarea
                                        id="message"
                                        required
                                        placeholder="Tell us about your Project, Timeline, and Requirement."
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="
                                            w-full
                                            resize-y
                                            rounded-md
                                            border
                                            border-gray-300
                                            bg-[#FBFBFB]
                                            px-4
                                            py-3
                                            text-sm
                                            sm:text-base
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-[#322986]
                                        "
                                    />
                                </div>

                                <p className="
                                    text-[11px]
                                    sm:text-xs
                                    leading-5
                                    text-[#64748B]
                                ">
                                    Fields marked
                                    <span className="text-[#d94536]">
                                        {" "}*{" "}
                                    </span>
                                    are required. Submitting will open your
                                    email client with a pre-filled message.
                                </p>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="
                                        items-center
                                        justify-center
                                        flex
                                        gap-2
                                        w-full
                                        rounded-md
                                        bg-[#322986]
                                        py-3
                                        text-sm
                                        sm:text-base
                                        font-semibold
                                        text-white
                                        transition
                                        hover:opacity-90
                                        hover:cursor-pointer
                                    "
                                >
                                    <Image
                                        src={SendIcon}
                                        alt="Send Icon"
                                        className="h-5 w-5"
                                    />
                                    <span>Submit Application</span>
                                </button>

                            </form>
                        </div>

                    </div>
                </section>

                <FooterComponent />

            </main>
        </div>
    );
}