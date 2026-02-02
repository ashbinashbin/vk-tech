"use client";

import CourseCard from "./CourseCard";

export default function TaxPlanningSection() {
  const courses = [
    {
      title: "Business Tax Compliance",
      image: "/tax-image1.svg",
      price: "$149",
      description:
        "Master the essentials of tax planning and learn strategies to optimize tax efficiency for businesses.",
      topics: [
        "Corporate tax filing",
        "Tax audit preparation",
        "Quarterly tax payments",
        "Compliance documentation",
      ],
    },
    {
      title: "Tax Planning Fundamentals",
      image: "/tax-images 2.svg",
      price: "$149",
      description:
        "Learn core principles of tax planning and compliance for individuals and small businesses.",
      topics: [
        "Income tax basics",
        "Tax-saving investments",
        "Quarterly payments",
        "Documentation",
      ],
    },
    {
      title: "Advanced Tax Strategies",
      image: "/tax-image3.svg",
      price: "$149",
      description:
        "Advanced strategies for professionals looking to maximize tax efficiency.",
      topics: [
        "Advanced tax planning",
        "Corporate restructuring",
        "International taxation",
        "Risk management",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
          Specialized Training
        </span>

        <h2 className="text-3xl font-bold mb-3">
          Tax Planning & Compliance
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Expert-led courses to help you navigate complex tax regulations and optimize tax efficiency
        </p>
      </div>

      <div className="space-y-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            variant="detailed"
            {...course}
          />
        ))}
      </div>

      <div className="bg-blue-600 text-white text-center py-14 rounded-2xl mt-20">
        <h3 className="text-2xl font-semibold mb-3">
          Need Custom Tax Training for Your Team?
        </h3>
        <p className="opacity-90 mb-8">
          We offer tailored corporate training programs for businesses and organizations
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us for Corporate Training
        </button>
      </div>
    </section>
  );
}
