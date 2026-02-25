import { notFound } from "next/navigation";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { OPEN_ROLES } from "@/src/data/careers.data";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function JobDetails({ params }: Props) {
  const { id } = await params;

  const job = OPEN_ROLES.find(
    (role) => role.id === Number(id)
  );

  if (!job) return notFound();

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <HeaderComponent active="CAREERS" />

      <main className="flex-1 pt-[100px] pb-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Title Section */}
          <div className="mb-10 mt-5">
            <h1 className="text-2xl md:text-4xl font-bold text-[#322986]">
              {job.role}
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
              {job.location}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT SIDE (2/3) */}
            <div className="lg:col-span-2 space-y-10">

              {/* Job Overview */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 text-[#322986]">
                  Job Overview
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                  <p><strong>Domain:</strong> {job.preferredDomain}</p>
                  <p><strong>Reports To:</strong> {job.reportsTo}</p>
                  <p><strong>Experience:</strong> {job.experienceRequired} Years</p>
                  <p><strong>Education:</strong> {job.eduacation}</p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 text-[#322986]">
                  Responsibilities
                </h2>
                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 text-[#322986]">
                  Required Skills
                </h2>
                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700">
                  {job.skills.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* RIGHT SIDE (1/3) */}
            <div className="lg:sticky lg:top-28 h-fit">
              <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#322986]">
                  Apply for this position
                </h3>

                <button className="w-full py-3 bg-[#d94536] text-white rounded-md font-semibold hover:opacity-90 transition">
                  Apply Now
                </button>

                <a
                  href="mailto:career@emcus.co.in"
                  className="block text-center text-[#322986] font-semibold"
                >
                  Email Resume
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}