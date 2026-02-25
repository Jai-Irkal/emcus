import HomeBanner from "@/public/banners/home-banner.jpeg"
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import PhoneIcon from "@/public/footer-assets/phone.svg";
import EmailIcon from "@/public/footer-assets/mail.svg";
import LinkedinIcon from "@/public/footer-assets/linkedin.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black pt-[80px] md:pt-[90px]">
        <HeaderComponent active="CONTACT US" />
        <div className="relative w-full h-[300px] lg:h-[600px] 2xl:h-[600px] 2xl:bottom-0">
          <Image
            src={HomeBanner}
            alt="Home Banner"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <h1 className="text-white text-xl xl:text-4xl lg:text-4xl lg:font-medium font-normal xl:font-bold xl:px-0 px-4 lg:-mt-20">
              GET IN TOUCH WITH US <span className="font-bold">ANYWHERE, ANYTIME</span>
            </h1>

            <span className="text-white xl:text-lg lg:text-[22px] lg:mt-6 lg:px-30 mt-4 max-w-3xl xl:px-0 px-6">
              At EMCUS, we believe in developing strong and lasting relationships with each of our clients.
            </span>
          </div>
        </div>
        <div className="w-full py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT COLUMN */}
            <div className="space-y-8">

              {/* Map */}
              <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb="
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                ></iframe> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.236936976125!2d77.69739667592246!3d12.956684887357326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b0fb0b9ea7%3A0xcd5c8a1ebc0498!2sNovel%20Office%20Marathahalli!5e0!3m2!1sen!2sin!4v1772000645241!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Address */}
              <div>
                <p className="text-gray-700 leading-relaxed pr-6">
                  Novel MSR Park, 93/9, Varthur Main Road, Munnekolalu, Marathalli, Bengaluru 560037. INDIA
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-gray-700">
                <h1 className="text-[25px] text-[#d94536] font-bold w-full mt-0">CONNECT WITH US</h1>
                <div className="flex items-center gap-3">
                  <Image src={PhoneIcon} alt="Email" width={20} height={30} className="ml-1.5" />
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="hover:text-[#d94536]"
                  >
                    +91 70226 16214
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Image src={EmailIcon} alt="Email" width={20} height={30} className="ml-1.5" />
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="hover:text-[#d94536]"
                  >
                    info@emcus.co.in
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Image src={LinkedinIcon} alt="Email" width={30} height={30} />
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="hover:text-[#d94536]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - CONTACT FORM */}
            <div className="p-8">

              <form className="space-y-5">

                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700"
                    >
                      First Name <span className="text-[#d94536]">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#322986]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Last Name <span className="text-[#d94536]">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#322986]"
                    />
                  </div>

                </div>

                {/* Work Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Work Email <span className="text-[#d94536]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Work Email"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#322986]"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject <span className="text-[#d94536]">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#322986]"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message <span className="text-[#d94536]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    placeholder="Type your message"
                    rows={5}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#322986]"
                  ></textarea>
                </div>

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
