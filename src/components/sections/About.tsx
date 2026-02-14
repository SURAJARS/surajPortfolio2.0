"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="relative w-full py-20 md:py-32 px-4 bg-gradient-to-b from-transparent via-amber-50/40 to-transparent">
      <div className="section-container max-w-4xl mx-auto">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
              About Me
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl border border-white/50 shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-amber-900">
                Crafting Digital Excellence
              </h3>
              <p className="text-gray-800 mb-4 leading-relaxed font-medium">
                I'm a full stack developer with a passion for creating elegant,
                performant solutions. With expertise in modern web technologies,
                I bridge the gap between design and functionality, ensuring
                every project delivers exceptional user experiences.
              </p>
              <p className="text-gray-800 mb-4 leading-relaxed font-medium">
                My philosophy:{" "}
                <span className="text-amber-700 font-bold">
                  Develop solutions that matter
                </span>
                . Every line of code should serve a purpose, every design
                decision should enhance the user journey, and every project
                should create real value.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl border-2 border-amber-300 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-amber-900">
                Key Expertise
              </h3>
              <ul className="space-y-3">
                {[
                  "Full Stack Development",
                  "React & Next.js",
                  "Node.js & Express",
                  "Database Design",
                  "UI/UX Implementation",
                  "API Development",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center text-gray-800 font-medium"
                  >
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
