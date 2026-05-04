"use client";

import CourseCard from "@/components/CourseCard";
import { useState } from "react";

export default function AllCourses({ initialCourses }) {
  const [courses] = useState(initialCourses);
  const [search, setSearch] = useState("");

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto mt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-pink-500">All Courses</h2>

          <p className="text-sm opacity-70 mt-2">Find your next course</p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-16">
          <input
            type="text"
            placeholder="Search courses..."
            className="input input-bordered w-full max-w-md focus:outline-pink-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.length > 0 ? (
            filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-400">
              No courses found
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
