"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? "text-blue-600"
      : "hover:text-blue-600";

  return (
    <nav className="w-full bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto h-20 px-10 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/vk.png"
            alt="VK Logo"
            width={80}
            height={80}
            className="mt-1"
          />
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-8 text-[15px] font-medium text-gray-700">
          
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/courses" className={linkClass("/courses")}>
            Courses
          </Link>

          <Link href="/tax-planning" className={linkClass("/tax-planning")}>
            Tax Planning
          </Link>

          <Link href="/features" className={linkClass("/features")}>
            Features
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

          {/* CTA */}
          <Link
            href="/auth/signup"
            className="bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

        </div>
      </div>
    </nav>
  );
}
