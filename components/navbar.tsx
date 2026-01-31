import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto h-20 px-10 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/vk.png"
            alt="VK Logo"
            className="w-20 h-20 mt-10"
          />
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-8 text-[15px] font-medium text-gray-700">
          <Link href="/" className="text-blue-600">
            Home
          </Link>
          <Link href="/courses" className="hover:text-blue-600">
            Courses
          </Link>
          <Link href="/tax-planning" className="hover:text-blue-600">
            Tax Planning
          </Link>
          <Link href="/features" className="hover:text-blue-600">
            Features
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
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
