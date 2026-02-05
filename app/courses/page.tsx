import PopularCourses from "@/components/PopularCourses";

export default function CoursesPage() {
  return (
    <main className="bg-white">
      
      {/* HEADING SECTION */}
      <section className="py-14 border-b">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <h1 className="text-4xl font-bold mb-3">
            Explore Our Courses
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse our extensive library of professional courses and find the
            right one to elevate your career
          </p>
        </div>
      </section>

      {/* SEARCH + FILTERS */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-10">
          
          {/* Search bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search Courses..."
              className="flex-1 border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select className="border rounded-md px-4 py-2 text-sm">
              <option>All Categories</option>
              <option>Finance</option>
              <option>Accounting</option>
              <option>Tax Planning</option>
            </select>
          </div>

          {/* Filter buttons */}
          <div className="flex gap-3 flex-wrap">
            {["All Courses", "Finance", "Accounting", "Tax Planning"].map(
              (item) => (
                <button
                  key={item}
                  className="px-4 py-2 text-sm border rounded-md hover:bg-blue-600 hover:text-white transition"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* COURSES GRID (REUSED) */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-10">
          <PopularCourses />
        </div>
      </section>

    </main>
  );
  
}
