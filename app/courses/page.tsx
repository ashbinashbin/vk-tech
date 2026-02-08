"use client";

import { useState } from "react";
import Image from "next/image";

/* ================= BASE COURSES ================= */
const baseCourses = [
  {
    title: "Financial Accounting Fundamentals",
    category: "Accounting",
    price: 149,
    rating: 4.8,
    students: 12500,
    instructor: "Dr. Sarah Johnson",
    duration: "8 weeks",
    image: "/FA1.svg",
  },
  {
    title: "Advanced Tax Strategies",
    category: "Tax Planning",
    price: 199,
    rating: 4.8,
    students: 12500,
    instructor: "Dr. Sarah Johnson",
    duration: "8 weeks",
    image: "/tax.svg",
  },
  {
    title: "Corporate Finance Mastery",
    category: "Finance",
    price: 249,
    rating: 4.8,
    students: 12500,
    instructor: "Dr. Sarah Johnson",
    duration: "8 weeks",
    image: "/corp.svg",
  },
];

/* ===== Repeat 3 Courses 3 Times (Like Screenshot) ===== */
const coursesData = Array(3)
  .fill(baseCourses)
  .flat()
  .map((course, index) => ({
    ...course,
    id: index + 1,
  }));

/* ================= PAGE ================= */
export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Courses");

  const filteredCourses = coursesData.filter((course) => {
    const matchCategory =
      category === "All Courses" || course.category === category;

    const matchSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-[520px] bg-[#1e2a78] overflow-hidden">

        <Image
          src="/boy.svg"
          alt="Hero"
          fill
          priority
          className="object-contain object-right"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#1e2a78]/95 to-[#1e2a78]/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-10 text-white">

            <h1 className="text-5xl font-bold leading-tight mb-6 max-w-3xl">
              Explore Courses for <br />
              <span className="text-yellow-400">
                Tax, Accounting & Finance
              </span>
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl mb-10">
              Boost your career with top-rated courses designed by industry professionals.
            </p>

            {/* SVG Feature Icons */}
            <div className="flex gap-6 flex-wrap">

              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl text-center w-44">
                <Image src="/symbol1.svg" alt="" width={40} height={40} className="mx-auto mb-2" />
                <p className="text-sm">Award Winning Curriculum</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl text-center w-44">
                <Image src="/symbol2.svg" alt="" width={40} height={40} className="mx-auto mb-2" />
                <p className="text-sm">Expert Instructor</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl text-center w-44">
                <Image src="/symbol3.svg" alt="" width={40} height={40} className="mx-auto mb-2" />
                <p className="text-sm">Career Growth</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SEARCH & FILTER ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-10 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Explore Our Courses
          </h2>

          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Browse our extensive library of professional courses
          </p>

          {/* Search */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search Courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-xl border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            {["All Courses", "Finance", "Accounting", "Tax Planning"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-5 py-2 rounded-md border transition ${
                    category === cat
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Showing {filteredCourses.length} results
          </p>

          {/* ================= GRID ================= */}
          {filteredCourses.length === 0 ? (
            <div className="text-gray-500 text-lg py-10">
              No courses found.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <div className="relative h-[200px]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5 text-left">

                    <h3 className="font-semibold mb-2">
                      {course.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{course.rating}</span>
                      <span>·</span>
                      <span>{course.students.toLocaleString()} students</span>
                    </div>

                    {/* Instructor */}
                    <div className="text-sm text-gray-500 mb-2">
                      👤 {course.instructor}
                    </div>

                    {/* Duration + Price */}
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>⏱ {course.duration}</span>
                      <span className="text-blue-600 font-semibold">
                        ${course.price}
                      </span>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
