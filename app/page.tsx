import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-sm bg-slate-100 rounded-2xl p-6">

        
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center font-bold">
            <Image
              src="/vk.png"
              alt="VK Logo"
              width={100}
              height={55}
            />

          </div>

          <h1 className="text-xl font-bold text-slate-900">
            Welcome to VK
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Your trusted platform for learning and growth.
          </p>
        </div>

      
        <div className="space-y-3 mb-6">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold">
            Sign In
          </button>

          <button className="w-full bg-white border border-slate-300 text-blue-600 py-2 rounded-lg font-semibold">
            Create Account
          </button>
        </div>

        
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 text-center">
            <h3 className="font-semibold">Secure & Trusted</h3>
            <p className="text-sm text-slate-500">
              Your data is protected with enterprise-grade security
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 text-center">
            <h3 className="font-semibold">Fast & Reliable</h3>
            <p className="text-sm text-slate-500">
              Lightning-fast performance you can count on
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 text-center">
            <h3 className="font-semibold">User Focused</h3>
            <p className="text-sm text-slate-500">
              Designed with your experience in mind
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
