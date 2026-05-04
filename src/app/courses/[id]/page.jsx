import Link from "next/link";
import Image from "next/image";
import { getCourseById } from "../../../lib/courses";
import { FaArrowLeft } from "react-icons/fa";

;
export default async function CourseDetails({ params }) {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-pink-500 font-semibold">Course not found</p>
      </div>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <Link href="/courses" className="text-sm text-pink-500 flex justify-end items-center gap-1">
           <FaArrowLeft className="mt-1" size={14} /> Back to courses
        </Link>

        {/* Main */}
        <div className="grid md:grid-cols-2 gap-10 mt-6 items-center">

          {/* Image */}
          <div className="relative w-full h-80 rounded-xl overflow-hidden">
            <Image
              src={course.image}
              fill
              alt={course.title}
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>

            <span className="badge border-pink-300 text-pink-500">
              {course.category}
            </span>

            <h1 className="text-2xl font-bold mt-3">
              {course.title}
            </h1>

            <p className="text-sm opacity-70 mt-2">
              {course.description}
            </p>

            <div className="mt-4 space-y-1 text-sm">
              <p><span className="text-pink-500">Instructor:</span> {course.instructor}</p>
              <p><span className="text-pink-500">Duration:</span> {course.duration}</p>
              <p><span className="text-pink-500">Level:</span> {course.level}</p>
              <p><span className="text-pink-500">Rating:</span> {course.rating}</p>
            </div>

            <button className="btn bg-pink-500 text-white mt-6">
              Enroll Now
            </button>

          </div>

        </div>

        {/* Curriculum */}
        <div className="mt-16">

          <h2 className="text-xl font-bold text-pink-500 mb-6">
            Course Content
          </h2>

          <div className="space-y-4">

            {/* Section 1 */}
            <div className="border border-pink-100 rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                Getting Started
              </h3>

              <div className="text-sm space-y-2 opacity-80">
                <p>• Introduction & Overview (5:00)</p>
                <p>• Setup Environment (8:30)</p>
                <p>• Basics (12:00)</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border border-pink-100 rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                Core Concepts
              </h3>

              <div className="text-sm space-y-2 opacity-80">
                <p>• Fundamentals Deep Dive (15:20)</p>
                <p>• Practice Project (20:00)</p>
                <p>• Fix Common Errors (10:45)</p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border border-pink-100 rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                Advanced Topics
              </h3>

              <div className="text-sm space-y-2 opacity-80">
                <p>• Pro Tips & Workflow (18:00)</p>
                <p>• Real Project (25:30)</p>
                <p>• Final Steps (14:00)</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}