"use client";

import { notFound, useParams } from "next/navigation";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { OPEN_ROLES } from "@/src/data/careers.data";
import BackIcon from "@/public/careers/back-icon.svg";
import Image from "next/image";
import { useState } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export default function JobDetails() {
  const params = useParams();

  const id = Number(params.id);

  const job = OPEN_ROLES.find(
    (role) => role.id === Number(id)
  );

  if (!job) return notFound();

  const [activeTab, setActiveTab] = useState<"overview" | "applications">(
    "overview"
  );

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <HeaderComponent active="CAREERS" />

      <main className="flex-1 pt-[110px] pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Back + Title */}
          <div className="flex items-center gap-2 mb-8">
            <Image src={BackIcon} alt="Back" />
            <h1 className="text-[26px] font-bold text-[#322986]">
              {job.role}
            </h1>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-10">

            {/* LEFT PANEL */}
            <aside className="border-r border-gray-300 pr-8">

              <div className="mb-2">
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-gray-500">{job.location}</p>
              </div>

              <div className="mb-2">
                <h3 className="font-bold text-lg">
                  Preferred Domain
                </h3>
                <p className="text-gray-500">
                  {job.preferredDomain}
                </p>
              </div>

              <div className="mb-2">
                <h3 className="font-bold text-lg">
                  Reports To
                </h3>
                <p className="text-gray-500">
                  {job.reportsTo}
                </p>
              </div>

              <div className="mb-2">
                <h3 className="font-bold text-lg">
                  Experience
                </h3>
                <p className="text-gray-500">
                  {job.experienceRequired} Years
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Education
                </h3>
                <p className="text-gray-500">
                  {job.eduacation}
                </p>
              </div>

            </aside>

            {/* RIGHT CONTENT */}
            <section>

              {/* Tabs */}
              <div className="flex gap-8 border-b border-gray-200 mb-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-3 text-[15px] font-semibold transition ${activeTab === "overview"
                    ? "text-[#322986] border-b-2 border-[#322986]"
                    : "text-gray-500 hover:text-[#322986]"
                    }`}
                >
                  Overview
                </button>

                <button
                  onClick={() => setActiveTab("applications")}
                  className={`pb-3 text-[15px] font-semibold transition ${activeTab === "applications"
                    ? "text-[#322986] border-b-2 border-[#322986]"
                    : "text-gray-500 hover:text-[#322986]"
                    }`}
                >
                  Applications
                </button>
              </div>

              {/* Responsibilities */}
              {activeTab === "overview" && (
                <>
                  {/* Responsibilities */}
                  <div className="mb-10">
                    <h2 className="font-bold text-xl mb-4">
                      Responsibilities
                    </h2>

                    <ul className="list-disc pl-6 space-y-3 text-gray-600">
                      {job.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="mb-10">
                    <h2 className="font-bold text-xl mb-4">
                      Skills
                    </h2>

                    <ul className="list-disc pl-6 space-y-3 text-gray-600">
                      {job.skills.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-[18px] text-gray-700 leading-7 mb-8 font-bold">
                    EMCUS is an Equal Employment Opportunity (EEO)
                    Employer. All qualified applicants will receive
                    consideration for employment without regard to race,
                    religion, color, national origin, sex, sexual
                    orientation, gender identity, age, status as a
                    qualified individual with a disability, or other
                    trait protected by law.
                  </p>

                  <button
                    onClick={() => setActiveTab("applications")}
                    className="bg-[#322986] text-white px-8 py-3 rounded-md font-semibold"
                  >
                    Apply Now
                  </button>

                  <p className="text-sm text-gray-500 mt-4">
                    Click the APPLY button to upload your resume.
                    <br/>Alternatively, email your resume to{" "}
                    <span className="text-red-500 font-semibold">
                      career@emcus.co.in
                    </span>
                  </p>
                </>
              )}

              {activeTab === "applications" && (
                <div className="space-y-6">

                  {/* Resume Autofill */}
                  <div className="border rounded-xl p-5 flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-[#322986]">
                        Autofill from Resume
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Upload your resume here to autofill key application fields.
                      </p>
                    </div>

                    <button className="border border-[#322986] text-[#322986] px-5 py-2 rounded-md">
                      Upload File
                    </button>
                  </div>

                  {/* Form */}
                  <div className="space-y-5">

                    <div>
                      <label className="font-medium">
                        Name <span className="text-red-500">*</span>
                      </label>

                      <input
                        className="mt-2 w-full border rounded-md px-4 py-3"
                        placeholder="Enter Name"
                      />
                    </div>

                    <div>
                      <label className="font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="email"
                        className="mt-2 w-full border rounded-md px-4 py-3"
                        placeholder="Enter Your Email"
                      />
                    </div>

                    <div>
                      <label className="font-medium">
                        Phone <span className="text-red-500">*</span>
                      </label>

                      <input
                        className="mt-2 w-full border rounded-md px-4 py-3"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div>
                      <label className="font-medium">
                        Resume <span className="text-red-500">*</span>
                      </label>

                      <div className="mt-2 border-2 border-dashed rounded-lg h-48 flex items-center justify-center text-gray-500">
                        Upload Resume
                      </div>
                    </div>

                    <button className="w-full bg-[#322986] text-white py-3 rounded-md font-semibold">
                      Submit Application
                    </button>

                  </div>

                </div>
              )}

            </section>

          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}