import Image from "next/image";

export default function CourseCard({
  image,
  title,
  price,
  variant = "compact",
  description,
  topics = [],
}) {

  /* =========================
     COMPACT CARD
     (Popular Courses)
     ========================= */
  if (variant === "compact") {
    return (
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
        
        {/* Image */}
        <div className="relative w-full h-[229px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-900 leading-snug">
            {title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
            <span className="text-yellow-500">★</span>
            <span className="font-medium text-gray-700">4.8</span>
            <span>·</span>
            <span>12,500 students</span>
          </div>

          {/* Instructor */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
            <span>👤</span>
            <span>Dr. Sarah Johnson</span>
          </div>

          {/* Duration + Price */}
          <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
            <div className="flex items-center gap-1">
              <span>⏱</span>
              <span>8 weeks</span>
            </div>
            <span className="text-blue-600 font-semibold">
              {price}
            </span>
          </div>

          {/* Button */}
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    );
  }

  /* =========================
     DETAILED CARD
     (Tax Planning & Compliance)
     ========================= */
  return (
    <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden">
      
      {/* Image */}
      <div className="relative w-full md:w-[320px] h-[220px] md:h-auto">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1">
        
        {/* Rating */}
        <div className="text-sm text-gray-500 mb-2">
          ⭐ 4.8 · 12,500 students
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>

        {/* What you'll learn */}
        <p className="font-semibold text-sm mb-2">
          What you&apos;ll learn:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-700 mb-6">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-blue-600">✔</span>
              {topic}
            </li>
          ))}
        </ul>

        {/* Instructor + Duration */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <span>👤</span>
            <span>Dr. Sarah Johnson</span>
          </div>

          <div className="flex items-center gap-2">
            <span>⏱</span>
            <span>8 weeks</span>
          </div>
        </div>

        {/* Price + Enroll */}
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold text-blue-600 whitespace-nowrap">
            {price}
          </span>

          <button className="flex-1 bg-blue-600 text-white py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
