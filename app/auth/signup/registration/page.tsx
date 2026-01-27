"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleKeyNavigation = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === "ArrowDown") {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if (!form.fullName || !form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!form.agree) {
      alert("You must agree to the terms");
      return;
    }

    // TODO: call registration API here
    router.push("/home");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <Image src="/vk.png" alt="Logo" width={80} height={80} className="mx-auto" />
          <h1 className="text-2xl font-bold text-gray-900 mt-3">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-600">
            Join us today and get started
          </p>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Full Name
            </label>
            <input
              ref={(el) => (inputRefs.current[0] = el)}
              onKeyDown={(e) => handleKeyNavigation(e, 0)}
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              ref={(el) => (inputRefs.current[1] = el)}
              onKeyDown={(e) => handleKeyNavigation(e, 1)}
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Address
            </label>
            <input
              ref={(el) => (inputRefs.current[2] = el)}
              onKeyDown={(e) => handleKeyNavigation(e, 2)}
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter Your Address"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Password
            </label>
            <input
              ref={(el) => (inputRefs.current[3] = el)}
              onKeyDown={(e) => handleKeyNavigation(e, 3)}
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create Password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Confirm Password
            </label>
            <input
              ref={(el) => (inputRefs.current[4] = el)}
              onKeyDown={(e) => handleKeyNavigation(e, 4)}
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Your Password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 mt-1">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            <p className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-600 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Sign In
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/auth/login")}
            className="text-blue-600 cursor-pointer font-medium"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
