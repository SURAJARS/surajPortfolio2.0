"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Premium 3D portfolio with Indian heritage elements and smooth animations.",
    tags: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration and real-time updates.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time synchronization and analytics.",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    link: "#",
    github: "#",
  },
  {
    title: "Social Media Analytics",
    description:
      "Dashboard for tracking and analyzing social media metrics across platforms.",
    tags: ["Next.js", "Python", "PostgreSQL", "Chart.js"],
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-20 md:py-32 px-4 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Showcase of my recent work spanning web development, full-stack
            applications, and more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="group relative bg-white rounded-2xl p-8 border border-amber-100 overflow-hidden shadow-md hover:shadow-2xl transition-shadow"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-amber-900 group-hover:text-amber-700 transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.05 * i }}
                      className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition"
                  >
                    Visit <FiExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition"
                  >
                    GitHub <FiGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
