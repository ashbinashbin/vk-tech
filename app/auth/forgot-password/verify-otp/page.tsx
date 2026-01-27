"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordVerifyOtpPage() {
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

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

    router.push("reset-password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f8ff]">
      <div className="w-full max-w-md text-center">

        <div className="flex justify-center mb-4">
          <img src="/vk.png" alt="VK Logo" className="w-20 h-20" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          Check your phone
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          We’ve sent a one-time verification code
        </p>
        <p className="text-sm font-medium text-gray-700">
          Your registered phone number
        </p>

        <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 text-center">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Enter OTP
            </p>

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

            <div className="mt-4 text-sm">
              <button className="text-blue-600 hover:underline">
                Resend OTP?
              </button>
              <p className="text-gray-400 text-xs mt-1">
                Didn’t receive the code?
              </p>
            </div>

            <button
              onClick={handleVerify}
              disabled={otp.join("").length !== 4}
              className="w-full mt-5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-2.5 rounded-md font-medium transition"
            >
              Verify
            </button>
          </div>

          <div className="border-t border-gray-200" />

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
