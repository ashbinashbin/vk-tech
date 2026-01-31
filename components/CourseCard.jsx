import Image from "next/image";

export default function CourseCard({
  image,
  title,
  price,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
      
      {/* IMAGE AREA */}
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
    <span className="text-blue-600 font-semibold">{price}</span>
  </div>

  {/* Button */}
  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
    Enroll Now
  </button>
</div>

    </div>
  );
}
