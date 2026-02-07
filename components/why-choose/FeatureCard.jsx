"use client";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg mb-4">
        <Icon className="text-white text-xl" />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
}
