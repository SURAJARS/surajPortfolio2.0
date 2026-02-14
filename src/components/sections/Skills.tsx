"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiTrendingUp,
  FiLayout,
  FiServer,
  FiGitBranch,
} from "react-icons/fi";

const skillCategories = [
  {
    category: "Frontend",
    icon: FiLayout,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: FiServer,
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    category: "Database",
    icon: FiDatabase,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
  },
  {
    category: "DevOps",
    icon: FiGitBranch,
    skills: ["Git", "Docker", "GitHub Actions", "Vercel", "AWS"],
  },
  {
    category: "Tools & Methods",
    icon: FiCode,
    skills: ["VSCode", "Agile", "Testing", "CI/CD", "Problem Solving"],
  },
  {
    category: "Soft Skills",
    icon: FiTrendingUp,
    skills: [
      "Communication",
      "Team Work",
      "Leadership",
      "Mentoring",
      "Creativity",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Skills() {
  return (
    <section className="relative w-full py-20 md:py-32 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Skills & Expertise
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.05 * i, duration: 0.5 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                      <span className="text-gray-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
