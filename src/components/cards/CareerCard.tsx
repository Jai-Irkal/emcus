"use client";

import Link from "next/link";
import { useState } from "react";

export const CareerCard = ({ item }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email) {
            alert("Please provide name and email.");
            return;
        }
        // For now just log and close. Replace with API upload if needed.
        console.log({ name, email, resume });
        alert("Application submitted. Thank you!");
        setIsOpen(false);
        setName("");
        setEmail("");
        setResume(null);
    };

    return (
        <div className="w-full rounded-xl shadow-lg border border-gray-200 p-6">

            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">

                {/* Left Section (2/3) */}
                <div className="sm:col-span-2">
                    <h2 className="text-xl font-bold text-[#0071bc]">
                        {item.role}
                    </h2>
                    <p className="text-gray-600 mt-2">
                        {item.location}
                    </p>
                </div>

                {/* Right Section (1/3) */}
                <div className="flex gap-3 sm:justify-start lg:justify-end">
                    <Link href={`/company/careers/${item.id}`}>
                        <button className="px-4 py-2 text-white rounded-md bg-[#29abe2] hover:text-white transition">
                            Details
                        </button>
                    </Link>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-4 py-2 bg-[#29abe2] text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer"
                    >
                        APPLY
                    </button>
                </div>

            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

                    <div className="relative bg-white rounded-lg p-6 w-full max-w-md mx-4">
                        <h3 className="text-lg font-bold mb-4">Apply for {item.role}</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Resume</label>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                                    className="mt-1 w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2"
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-2">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 border rounded-md">
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 bg-[#29abe2] text-white rounded-md">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};