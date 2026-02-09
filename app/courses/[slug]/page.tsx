import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/app/data/course";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;

  const course = courses.find((c) => c.slug === slug);

  if (!course) return notFound();

  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-10">

        {/* Back */}
        <Link href="/courses" className="text-gray-600 mb-6 inline-block">
          ← Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">

            {/* ===== COURSE OVERVIEW CARD ===== */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">

              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6">

                <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  {course.category}
                </span>

                <h1 className="text-2xl font-semibold mt-4">
                  {course.title}
                </h1>

                <p className="text-gray-600 mt-4">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600">
                  <span>⭐ {course.rating} rating</span>
                  <span>👥 {course.students.toLocaleString()} students</span>
                  <span>⏱ {course.duration}</span>
                  <span>📚 {course.lessons} lessons</span>
                </div>

                <div className="mt-6 border-t pt-6">
                  <p className="font-semibold">{course.instructor}</p>
                  <p className="text-sm text-gray-500">
                    CPA, PhD in Accounting
                  </p>
                </div>

              </div>
            </div>

            {/* ===== COURSE CONTENT SECTION ===== */}
            {course.sections && (
              <div className="bg-white rounded-2xl shadow-md p-6">

                <h2 className="text-xl font-semibold mb-2">
                  Course Content
                </h2>

                <p className="text-sm text-gray-500 mb-6">
                  {course.sections.length} sections • {course.lessons} lessons • {course.duration}
                </p>

                {course.sections.map((section, sectionIndex) => {

                  const totalLessons = section.lessons.length;
                  const completedLessons = section.lessons.filter(l => l.completed).length;
                  const progress = Math.round((completedLessons / totalLessons) * 100);

                  return (
                    <div key={sectionIndex} className="border-t pt-4 mt-4">

                      {/* Section Header */}
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h3 className="font-semibold">
                            {section.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {totalLessons} lessons • {completedLessons}/{totalLessons} completed
                          </p>
                        </div>

                        <div className="text-blue-600 font-semibold">
                          {progress}%
                        </div>
                      </div>

                      {/* Lessons */}
                      <div className="space-y-3">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lessonIndex}
                            className="flex justify-between items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                          >

                            <div className="flex items-center gap-3">

                              {/* Left Icon */}
                              {lesson.completed ? (
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                                  ✓
                                </div>
                              ) : (
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                  ▶
                                </div>
                              )}

                              <div>
                                <p className="font-medium text-sm">
                                  {lessonIndex + 1}. {lesson.title}
                                </p>
                              </div>
                            </div>

                            {/* Right Side */}
                            <div className="flex items-center gap-4 text-sm text-gray-500">

                              <span>{lesson.duration}</span>

                              {lesson.completed && (
                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                                  Completed
                                </span>
                              )}
                            </div>

                          </div>
                        ))}
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>

          {/* ===== RIGHT SIDEBAR ===== */}
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24 h-fit">

            <p className="text-gray-500 text-sm">Course Price</p>
            <p className="text-4xl font-bold text-blue-600 mt-1">
              ${course.price}
            </p>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-blue-700 transition">
              Continue Learning
            </button>

            <div className="mt-8">
              <h3 className="font-semibold mb-4 text-lg">
                This course includes:
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">
                <li>📹 24 video lessons</li>
                <li>📁 Downloadable resources</li>
                <li>📱 Mobile access</li>
                <li>🎓 Certificate of completion</li>
                <li>♾ Lifetime access</li>
                <li>💬 Q&A support</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
