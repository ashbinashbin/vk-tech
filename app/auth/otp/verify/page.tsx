"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyOtp() {
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    if (otp.join("").length !== 4) {
      alert("Please enter the complete OTP");
      return;
    }

    // later: verify OTP API here
    router.push("/home");
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
          Check your phone
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          We’ve sent a one-time verification code to
        </p>
        <p className="text-sm font-medium text-gray-700">
          +91 8790034567
        </p>

        {/* Card */}
        <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">

          {/* Card body */}
          <div className="p-6 text-center">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Enter OTP
            </p>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="text"
                  value={digit}
                  maxLength={1}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center text-lg border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            {/* Resend */}
            <div className="mt-4 text-sm">
              <button className="text-blue-600 hover:underline">
                Resend OTP ?
              </button>
              <p className="text-gray-400 text-xs mt-1">
                Didn’t receive the code?
              </p>
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerify}
              className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md font-medium transition"
            >
              Verify
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
