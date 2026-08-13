"use client";

import { notFound, useParams, useSearchParams } from "next/navigation";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { OPEN_ROLES } from "@/src/data/careers.data";
import BackIcon from "@/public/careers/back-icon.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import MagicWandIcon from "@/public/common/magic-wand.svg";
import UploadIcon from "@/public/common/upload-icon.svg";
import SendIcon from "@/public/contact-us/send.svg";

interface Props {
  params: Promise<{ id: string }>;
}

export default function JobDetails() {
  const params = useParams();
  const searchParams = useSearchParams();

  const id = Number(params.id);

  const job = OPEN_ROLES.find(
    (role) => role.id === id
  );

  if (!job) return notFound();

  const [activeTab, setActiveTab] = useState<
    "overview" | "applications"
  >("overview");

  useEffect(() => {
    const tab = searchParams.get("tab");

    setActiveTab(
      tab === "applications"
        ? "applications"
        : "overview"
    );
  }, [searchParams]);

  // --------------------------------------------------
  // Autofill Resume
  // --------------------------------------------------

  const autofillInputRef = useRef<HTMLInputElement>(null);

  const [autofillFile, setAutofillFile] = useState<File | null>(null);
  const [isAutofilling, setIsAutofilling] = useState(false);

  // --------------------------------------------------
  // Actual Resume Upload
  // --------------------------------------------------

  const resumeInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // --------------------------------------------------
  // Form fields
  // --------------------------------------------------

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");

  // --------------------------------------------------
  // Bottom Resume Upload
  // --------------------------------------------------

  const handleResumeFile = (selectedFile: File) => {
    // Disable bottom upload if resume was already uploaded
    // through Autofill
    if (autofillFile) {
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    setFile(selectedFile);
  };

  const handleResumeFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      handleResumeFile(selectedFile);
    }

    // Allow selecting the same file again
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files?.[0];

    if (droppedFile) {
      handleResumeFile(droppedFile);
    }
  };

  // --------------------------------------------------
  // Autofill Resume Upload
  // --------------------------------------------------

  const handleAutofillResume = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF resume.");
      e.target.value = "";
      return;
    }

    setAutofillFile(selectedFile);
    setIsAutofilling(true);

    try {
      const formData = new FormData();

      formData.append("resume", selectedFile);

      const response = await fetch("/api/resume/parse", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to extract resume information");
      }

      const data = await response.json();

      // Populate form fields from resume
      if (data.name) {
        setName(data.name);
      }

      if (data.email) {
        setEmail(data.email);
      }

      if (data.phone) {
        setPhone(data.phone);
      }
    } catch (error) {
      console.error("Resume autofill failed:", error);

      alert(
        "Unable to extract information from this resume. Please enter your details manually."
      );
    } finally {
      setIsAutofilling(false);

      // Allow selecting the same file again
      e.target.value = "";
    }
  };

  const handleSubmit = async () => {
    const resumeFile = autofillFile || file;

    if (!name || !email || !phone || !resumeFile) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("role", job.role);
      formData.append("resume", resumeFile);

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application.");
      }

      alert("Application submitted successfully.");

      setName("");
      setEmail("");
      setPhone("");

      setFile(null);
      setAutofillFile(null);

      if (resumeInputRef.current) {
        resumeInputRef.current.value = "";
      }

      if (autofillInputRef.current) {
        autofillInputRef.current.value = "";
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit application.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <HeaderComponent active="CAREERS" />

      <main className="flex-1 pt-[110px] pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Back + Title */}
          <div className="flex items-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="cursor-pointer"
              aria-label="Go back"
            >
              <Image src={BackIcon} alt="Back" />
            </button>

            <h1 className="text-[26px] font-bold text-[#322986]">
              {job.role}
            </h1>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-10">

            {/* LEFT PANEL */}
            <aside className="border-r-0 lg:border-r border-gray-300 pr-0 lg:pr-8">

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

              {/* OVERVIEW */}
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
                    <br />
                    Alternatively, email your resume to{" "}
                    <span className="text-red-500 font-semibold">
                      career@emcus.co.in
                    </span>
                  </p>
                </>
              )}

              {/* APPLICATION */}
              {activeTab === "applications" && (
                <div className="space-y-6">

                  {/* ========================================
                      AUTOFILL FROM RESUME
                  ======================================== */}

                  <div className="border rounded-xl p-5 flex justify-between items-center bg-[#FBFBFB]">

                    <div>

                      <div className="flex gap-2 items-center">

                        <Image
                          src={MagicWandIcon}
                          alt="magic"
                          className="w-5 h-5"
                        />

                        <h3 className="font-semibold text-[#322986]">
                          Autofill from Resume
                        </h3>

                      </div>

                      <p className="text-sm text-gray-500 mt-1">

                        {isAutofilling
                          ? "Extracting information from your resume..."
                          : autofillFile
                            ? `Selected: ${autofillFile.name}`
                            : "Upload your resume here to autofill key application fields."}

                      </p>

                    </div>

                    <div>

                      {/* IMPORTANT:
                          This input is ONLY for autofill
                      */}

                      <input
                        ref={autofillInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleAutofillResume}
                        className="hidden"
                      />

                      <button
                        type="button"
                        disabled={isAutofilling}
                        onClick={() =>
                          autofillInputRef.current?.click()
                        }
                        className="border-2 border-[#322986] text-[#322986] px-5 py-2 rounded-md hover:bg-[#322986] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isAutofilling
                          ? "Reading..."
                          : autofillFile
                            ? "Change File"
                            : "Upload File"}
                      </button>

                    </div>

                  </div>

                  {/* ========================================
                      FORM
                  ======================================== */}

                  <div className="space-y-5">

                    {/* NAME */}
                    <div>

                      <label className="font-medium">
                        Name{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        value={name}
                        onChange={(e) =>
                          setName(e.target.value)
                        }
                        className="mt-2 w-full border rounded-md px-4 py-3 bg-[#FBFBFB] border-[#C1C1C1]"
                        placeholder="Enter Name"
                      />

                    </div>

                    {/* EMAIL */}
                    <div>

                      <label className="font-medium">
                        Email{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        className="mt-2 w-full border rounded-md px-4 py-3 bg-[#FBFBFB] border-[#C1C1C1]"
                        placeholder="Enter Your Email"
                      />

                    </div>

                    {/* PHONE */}
                    <div>

                      <label className="font-medium">
                        Phone{" "}
                        <span className="text-red-500">*</span>
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

                    {/* ========================================
                        ACTUAL RESUME UPLOAD
                    ======================================== */}

                    <div>

                      <label className="font-medium">
                        Resume{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <div
                        onClick={() => {
                          if (!autofillFile) {
                            resumeInputRef.current?.click();
                          }
                        }}
                        onDragOver={(e) => {
                          if (autofillFile) return;

                          e.preventDefault();
                          setIsDragging(true);
                        }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                        className={`bg-[#FBFBFB] mt-2 rounded-lg h-48 flex items-center justify-center text-gray-500 flex-col gap-1 transition ${autofillFile
                          ? "opacity-50 cursor-not-allowed bg-gray-100"
                          : "cursor-pointer"
                          } ${isDragging && !autofillFile
                            ? "bg-gray-50"
                            : ""
                          }`}
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #C1C1C1 60%, transparent 60%), linear-gradient(to right, #C1C1C1 60%, transparent 60%), linear-gradient(to bottom, #C1C1C1 60%, transparent 60%), linear-gradient(to bottom, #C1C1C1 60%, transparent 60%)",
                          backgroundPosition: "top, bottom, left, right",
                          backgroundSize: "20px 2px, 20px 2px, 2px 20px, 2px 20px",
                          backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
                        }}
                      >

                        {/* IMPORTANT:
                            This input is ONLY for actual resume
                        */}

                        <input
                          ref={resumeInputRef}
                          type="file"
                          accept=".pdf"
                          onChange={handleResumeFileChange}
                          className="hidden"
                        />

                        <Image
                          src={UploadIcon}
                          alt="Upload"
                          className="h-7 w-7"
                        />

                        {file ? (
                          <>
                            <span className="text-[#322986] font-semibold">
                              {file.name}
                            </span>

                            <span className="text-sm text-gray-500">
                              Click or drag to replace file
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-[#322986] font-semibold">
                              Upload File
                            </span>

                            <span className="px-4 text-center font-normal">
                              Or Drag and Drop File Here
                            </span>
                          </>
                        )}

                      </div>

                    </div>

                    {/* SUBMIT */}
                    <button
                      type="button"
                      className="w-full bg-[#322986] text-white py-3 rounded-md font-semibold flex gap-1 items-center justify-center"
                    >
                      <Image
                        src={SendIcon}
                        alt="Send Icon"
                        className="h-5 w-5"
                      />
                      <span>Submit Application</span>
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