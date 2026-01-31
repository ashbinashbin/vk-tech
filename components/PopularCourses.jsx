import CourseCard from "./CourseCard";

export default function PopularCourses() {

    const courses = [
  {
    id: 1,
    title: "Financial Accounting Fundamentals",
    image: "/FA1.svg",
    price: "$149",
  },
  {
    id: 2,
    title: "Advanced Tax Strategies",
    image: "/tax.svg",
    price: "$199",
  },
  {
    id: 3,
    title: "Corporate Finance Mastery",
    image: "/corp.svg",
    price: "$249",
  },
  {
    id: 4,
    title: "Financial Accounting Fundamentals",
    image: "/FA1.svg",
    price: "$149",
  },
  {
    id: 5,
    title: "Advanced Tax Strategies",
    image: "/tax.svg",
    price: "$199",
  },
  {
    id: 6,
    title: "Corporate Finance Mastery",
    image: "/corp.svg",
    price: "$249",
  },
];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
            🔥 Most Popular
          </span>

          <h2 className="text-4xl font-bold text-gray-900">
            Popular Courses
          </h2>

          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Explore our most sought-after courses designed by industry experts
            to help you excel in your career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
             <CourseCard
            key={course.id}
            title={course.title}
            image={course.image}
            price={course.price}
             />
            ))}
        </div>


        {/* View All Button */}
        <div className="text-center mt-14">
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition">
            View All Courses
          </button>
        </div>

      </div>
    </section>
  );
}
