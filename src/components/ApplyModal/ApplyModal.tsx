"use client";

import { useState } from "react";

interface Props {
  role?: string;
}

export default function ApplyModal({ role }: Props) {
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
    console.log({ name, email, resume, role });
    alert("Application submitted. Thank you!");
    setIsOpen(false);
    setName("");
    setEmail("");
    setResume(null);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-3 bg-[#29abe2] text-white rounded-md font-semibold hover:opacity-90 transition"
      >
        Apply Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

          <div className="relative bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-bold mb-4">Apply for {role ?? "this position"}</h3>
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
                <div className="mt-1 flex items-center gap-3">
                  <input
                    id="apply-resume-input"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => document.getElementById('apply-resume-input')?.click()}
                    className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
                  >
                    Choose File
                  </button>
                  <span className="text-sm text-gray-600 break-all">{resume ? resume.name : "No file chosen"}</span>
                </div>
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
}
