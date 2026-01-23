import Image from "next/image";

function Signin() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-transparent">

        
        <div className="text-center space-y-2 mb-8">
          <Image
            src="/vk.png"
            alt="Logo"
            width={107}
            height={108}
            className="mx-auto"
            priority
          />

          <h1 className="text-2xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="text-sm text-gray-600">
            Sign in to your account
          </p>
        </div>

        
        <div className="bg-white rounded-2xl p-6 space-y-4 shadow-md">

          
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-900">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-gray-900 cursor-pointer">
              OTP Login
            </span>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          
          <button className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
            Sign In
          </button>
        </div>

        
        <div className="mt-8 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </a>
        </div>

      </div>
    </div>
  );
}



export default Signin;
