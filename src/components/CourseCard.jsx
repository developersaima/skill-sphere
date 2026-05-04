"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function CourseCard({ course, index = 0 }) {
  const { id, title, instructor, duration, rating, level, image, category } =
    course;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition"
    >

      <figure className="h-44 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

       
      </figure>

      <div className="card-body p-4">
 
        <div className="flex items-center justify-between">
            <h2 className="card-title text-base line-clamp-2">
          {title}
        </h2>
         <div className="badge badge-soft">
          {category}
        </div>
        </div>

        <p className="text-xs opacity-60">
          {instructor}
        </p>

        <div className="flex justify-between text-xs mt-2">

          <span className="badge badge-warning badge-outline">
            ⭐ {rating}
          </span>

          <span className="badge badge-ghost">
            {duration}
          </span>

          <span className="badge badge-secondary badge-outline">
            {level}
          </span>

        </div>

        <div className="card-actions mt-4">
          <Link href={`/courses/${id}`} className="w-full">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn bg-pink-500 text-white btn-sm w-full"
            >
              View Details
            </motion.button>
          </Link>
        </div>

      </div>
    </motion.div>
  );
}