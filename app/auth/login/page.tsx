"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f8ff]">
      <div className="w-full max-w-md text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/vk.png"   // put your logo in /public/logo.png
            alt="Vk"
            width={80}
            height={80}
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-gray-500 text-sm mt-1">Sign in to your account</p>

        {/* Card */}
        <div className="mt-6 bg-white rounded-xl shadow-md p-6 text-left">
          
          {/* Phone */}
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

          {/* Password */}
          <label className="text-sm font-medium text-gray-700 mt-4 block">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-4 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Links */}
          <div className="flex justify-between items-center mt-3 text-sm">
            <Link
              href="/auth/otp/phone"
              className="text-blue-600 hover:underline"
            >
              OTP Login
            </Link>

            <Link
              href="/auth/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md font-medium transition"
          >
            Sign In
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-600 mt-5">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}
