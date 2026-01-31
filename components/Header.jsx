import Link from "next/link";

export default function Header() {
  return (
    <section className="bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-10 py-20 flex gap-12">
        
        {/* LEFT */}
        <div className="flex-1">
          <p className="text-sm text-blue-600 font-medium mb-3">
            Trusted by thousands of users
          </p>

          <h1 className="text-4xl font-bold leading-tight mb-4">
            Welcome to VK
          </h1>

          <p className="text-gray-600 max-w-md mb-8">
            Your trusted platform for learning and growth. Join thousands of
            users already on their journey to success and unlock your potential.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium"
            >
              Get Started
            </Link>

            <Link
              href="/about"
              className="border border-gray-300 px-6 py-3 rounded-md text-sm font-medium"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-12">
            <div>
              <p className="text-2xl font-bold">50K+</p>
              <p className="text-sm text-gray-500">Active users</p>
            </div>
            <div>
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-sm text-gray-500">User Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-gray-500">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[380px]">
          <div className="bg-[#eef1ff] rounded-3xl p-6 shadow-[0_35px_120px_rgba(79,70,229,0.45)]">
            <div className="bg-white rounded-2xl px-10 py-14 text-center shadow-[0_8px_20px_rgba(0,0,0,0.08)]">

              <img
                src="/Group.svg"
                alt="VK Logo"
                className="h-14 mx-auto mb-6"
              />

              <h3 className="text-xl font-bold mb-4">
                Welcome to VK
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-[250px] mx-auto">
                Your trusted platform for learning and growth. Join thousands of users
                already on their journey.
              </p>

              <Link
                href="/auth/login"
                className="block w-full max-w-[260px] mx-auto bg-blue-600 text-white py-3 rounded-lg text-base font-medium mb-4"
              >
                Sign In
              </Link>

              <Link
                href="/auth/signup"
                className="block w-full max-w-[260px] mx-auto border border-blue-600 text-blue-600 py-3 rounded-lg text-base font-semibold"
              >
                Create Account
              </Link>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
