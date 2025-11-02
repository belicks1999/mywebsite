"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Student Eligibility Verification Web App",
    description:
      "A web-based portal developed for Hameed Al Husseinie College, Colombo to verify student eligibility based on their geographical location and defined radius criteria. The system enables the college to efficiently validate applicants' eligibility through integrated map-based checks. I handled both front-end and back-end development, implementing server-side rendering and seamless API integration.",
    period: "Oct 2025 – Oct 2025",
    technologies: [
      "Next.js",
      "Next.js API Routes (SSR)",
      "TypeScript",
      "Firebase",
      "Google Maps API",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Vercel",
    ],
    github: "https://github.com/belicks1999/school-project",
    demo: "https://student-eligibility.vercel.app/",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    title: "RecipeApp",
    description:
      "A full-stack Recipe App built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can explore recipes by category, view details, and manage favorites. Features user authentication and integrates TheMealDB API for recipe data. Styled with Tailwind CSS for a responsive design.",
    period: "Aug 2024 – Sep 2024",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TheMealDB API",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/belicks1999/RecipeApp",
    demo: "https://recipe-app-ivory-one.vercel.app/",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 3,
    title: "SalonReservation",
    description:
      "A salon reservation app using React.js, Vite.js, Tailwind CSS, Framer Motion, Node.js, Express, MongoDB, EmailJS, and SMS services. It offers a smooth, user-friendly booking experience with seamless communication and notifications.",
    period: "Aug 2024 – Sep 2024",
    technologies: [
      "React.js",
      "Vite.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "EmailJS",
      "SMS Services",
      "JavaScript",
      "CSS",
      "HTML",
    ],
    github: "https://github.com/belicks1999/SalonReservation",
    demo: "",
    color: "from-pink-500 to-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

function ProjectCard({
  project,
  variants,
}: {
  project: (typeof projects)[0];
  variants: typeof itemVariants;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionWords = project.description.split(" ");
  const shouldTruncate = descriptionWords.length > 20;
  const displayDescription =
    shouldTruncate && !isExpanded
      ? descriptionWords.slice(0, 20).join(" ") + "..."
      : project.description;

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      {/* Gradient Background Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}
      ></div>

      {/* Card */}
      <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
        {/* Header with Gradient Accent */}
        <div className={`relative h-2 bg-gradient-to-r ${project.color}`}></div>

        {/* Content */}
        <div className="p-8 flex flex-col h-full">
          {/* Period Badge - Fixed height */}
          <div className="mb-4 h-5 flex items-center">
            {project.period && (
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {project.period}
              </span>
            )}
          </div>

          {/* Title - Fixed height */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 min-h-[3.5rem] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {project.title}
          </h3>

          {/* Description - Flexible with expand/collapse */}
          <div className="mb-6 flex-1">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {displayDescription}
            </p>
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
              >
                {isExpanded ? (
                  <>
                    Show Less
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Technologies - Fixed section */}
          <div className="mb-6 min-h-[3rem]">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons - Fixed at bottom */}
          <div className="flex gap-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50 mt-auto">
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 px-4 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-3 rounded-xl font-semibold border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-all flex items-center justify-center ${
                !project.demo ? "flex-1" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of recent projects showcasing my skills and experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
