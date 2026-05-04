import Link from "next/link";

import { getCourses } from "../lib/courses";
import CourseCard from "@/components/CourseCard";

const Latest = async () => {
  const courses = await getCourses();

  const latest = courses
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .slice(0, 6);

  return (
    <section className="py-16 px-4">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">    
          <h2 className="text-3xl font-bold mt-3 text-pink-500">
            Latest Courses
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {latest.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/courses">
             <button className="btn bg-white border-pink-500 text-pink-600  hover:text-white hover:bg-pink-500">
              View All 
            </button>
          </Link>
        </div>

      </div>

    </section>
  );
};

export default Latest;