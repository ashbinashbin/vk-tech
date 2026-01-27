"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSave = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    

    router.push("/auth/login"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f8ff]">
      <div className="w-full max-w-md text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/vk.png"
            alt="Vk"
            width={80}
            height={80}
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          Reset Password
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Set your new password
        </p>

        <div className="mt-6 bg-white rounded-xl shadow-md p-6 text-left">
          
          <label className="text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full mt-1 px-4 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="text-sm font-medium text-gray-700 mt-4 block">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mt-1 px-4 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSave}
            className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md font-medium transition"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}
