import Link from "next/link";

export const CareerCard = ({ item }:any) => {
    return (
        <div className="w-full rounded-xl shadow-lg border border-gray-200 p-6">

            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">

                {/* Left Section (2/3) */}
                <div className="sm:col-span-2">
                    <h2 className="text-xl font-bold text-[#322986]">
                        {item.role}
                    </h2>
                    <p className="text-gray-600 mt-2">
                        {item.location}
                    </p>
                </div>

                {/* Right Section (1/3) */}
                <div className="flex gap-3 sm:justify-start lg:justify-end">
                    {/* <button className="px-4 py-2 border border-[#322986] text-[#322986] rounded-md hover:bg-[#322986] hover:text-white transition"> */}
                    <Link href={`/company/careers/${item.id}`}>
                        <button className="px-4 py-2 border border-[#322986] text-[#322986] rounded-md hover:bg-[#322986] hover:text-white transition">
                            Details
                        </button>
                    </Link>
                    <button className="px-4 py-2 bg-[#322986] text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer">
                        APPLY
                    </button>
                </div>

            </div>

        </div>
    );
};