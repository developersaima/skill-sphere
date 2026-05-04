import Link from "next/link";

import { getCourses } from "../lib/courses";
import CourseCard from ".././components/CourseCard";

export default async function PopularCourses() {
  const courses = await getCourses();

  const popular = courses
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-16 px-4">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          

          <h2 className="text-3xl font-bold mt-3 text-pink-500">
            Popular Courses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {popular.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/courses">
            <button className="btn bg-white border-pink-500 text-pink-600  hover:text-white hover:bg-pink-500">
              View All Courses
            </button>
          </Link>
        </div>

      </div>

    </section>
  );
}