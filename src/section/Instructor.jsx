"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Instructors() {
  return (
    <section className="py-16 px-4">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pink-500">
            Our Instructors
          </h2>
        
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 p-4 border border-pink-100 rounded-xl bg-base-100"
          >
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image src="https://avatars.githubusercontent.com/u/252490291?v=4" fill alt="Saima" className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-pink-500">
                Saima Akter
              </h3>
              <p className="text-xs opacity-70">
                Frontend Developer
              </p>

              <div className="flex gap-3 mt-2 text-xs">
                <span className="badge badge-outline border-pink-300 text-pink-500">12 Courses</span>
                <span className="badge badge-outline">4.9★</span>
              </div>
            </div>
          </motion.div>

          {/* 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 p-4 border border-pink-100 rounded-xl bg-base-100"
          >
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop" fill alt="Saima" className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-pink-500">
                Fatema Sattar
              </h3>
              <p className="text-xs opacity-70">
                UI/UX Designer
              </p>

              <div className="flex gap-3 mt-2 text-xs">
                <span className="badge badge-outline border-pink-300 text-pink-500">9 Courses</span>
                <span className="badge badge-outline">4.8★</span>
              </div>
            </div>
          </motion.div>

          {/* 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 p-4 border border-pink-100 rounded-xl bg-base-100"
          >
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop" fill alt="Simi" className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-pink-500">
                Simi Sattar
              </h3>
              <p className="text-xs opacity-70">
                Digital Marketer
              </p>

              <div className="flex gap-3 mt-2 text-xs">
                <span className="badge badge-outline border-pink-300 text-pink-500">7 Courses</span>
                <span className="badge badge-outline">4.7★</span>
              </div>
            </div>
          </motion.div>

          {/* 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 p-4 border border-pink-100 rounded-xl bg-base-100"
          >
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&auto=format&fit=crop" fill alt="Nusrat" className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-pink-500">
                Nusrat Jahan
              </h3>
              <p className="text-xs opacity-70">
                Backend Developer
              </p>

              <div className="flex gap-3 mt-2 text-xs">
                <span className="badge badge-outline border-pink-300 text-pink-500">10 Courses</span>
                <span className="badge badge-outline">4.8★</span>
              </div>
            </div>
          </motion.div>

          {/* 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 p-4 border border-pink-100 rounded-xl bg-base-100"
          >
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=200&auto=format&fit=crop" fill alt="Raisa" className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-pink-500">
                Raisa Karim
              </h3>
              <p className="text-xs opacity-70">
                Data Analyst
              </p>

              <div className="flex gap-3 mt-2 text-xs">
                <span className="badge badge-outline border-pink-300 text-pink-500">8 Courses</span>
                <span className="badge badge-outline">4.6★</span>
              </div>
            </div>
          </motion.div>

          {/* 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 p-4 border border-pink-100 rounded-xl bg-base-100"
          >
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&auto=format&fit=crop" fill alt="Tania" className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-pink-500">
                Tania Sultana
              </h3>
              <p className="text-xs opacity-70">
                Content Creator
              </p>

              <div className="flex gap-3 mt-2 text-xs">
                <span className="badge badge-outline border-pink-300 text-pink-500">6 Courses</span>
                <span className="badge badge-outline">4.7★</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}