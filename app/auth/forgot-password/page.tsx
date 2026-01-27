"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Phone() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleSendOtp = () => {
    // simple validation
    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    // later: call OTP API here
    router.push("/auth/forgot-password/verify-otp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f8ff]">
      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/vk.png"
            alt="VK Logo"
            className="w-20 h-20"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900">
          What’s your phone number?
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          We’ll send you a one-time verification code to confirm your number.
        </p>

        {/* Card */}
        <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">

          {/* Card body */}
          <div className="p-6 text-left">
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleSendOtp}
              className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md font-medium transition"
            >
              Send OTP
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200" />

          {/* Footer */}
          <div className="px-6 py-3 text-center">
            <p className="text-xs text-gray-400">
              We use your phone number only to verify your identity.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
