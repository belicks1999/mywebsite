"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp, X } from "lucide-react";
import emailjs from "@emailjs/browser";

const projects = [
  {
    id: 1,
    title: "Student Eligibility Verification Web App",
    description:
      "A web-based portal developed for Hameed Al Husseinie College, Colombo to verify student eligibility based on their geographical location and defined radius criteria. The system enables the college to efficiently validate applicants' eligibility through integrated map-based checks. I handled both front-end and back-end development, implementing server-side rendering and seamless API integration.",
    period: "Aug 2025 – Oct 2025",
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
  onGithubClick,
}: {
  project: (typeof projects)[0];
  variants: typeof itemVariants;
  onGithubClick: (projectTitle: string) => void;
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
            <motion.button
              onClick={() => onGithubClick(project.title)}
              className={`px-4 py-3 rounded-xl font-semibold border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-all flex items-center justify-center ${
                !project.demo ? "flex-1" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleGithubClick = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setIsModalOpen(true);
    setEmail("");
    setSubmitStatus({ type: null, message: "" });
  };

  const handleRequestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // EmailJS configuration
    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_GITHUB_TEMPLATE_ID ||
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      "YOUR_TEMPLATE_ID";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          message:
            "I would like to request access to the private repository of the project: " +
            selectedProject,
          from_email: email,
          to_email: "belicks.maxwell@gmail.com",
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Request sent successfully! I'll get back to you soon.",
      });
      setEmail("");
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus({ type: null, message: "" });
      }, 2000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or email me directly at belicks.maxwell@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              onGithubClick={handleGithubClick}
            />
          ))}
        </motion.div>
      </div>

      {/* GitHub Access Request Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>

                {/* Modal Content */}
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 mb-4">
                      <Github className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Private Repository
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      This repository is private. Request access to view the
                      code.
                    </p>
                  </div>

                  {/* Project Name */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Project:
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {selectedProject}
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleRequestAccess} className="space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {submitStatus.type && (
                      <div
                        className={`p-4 rounded-lg ${
                          submitStatus.type === "success"
                            ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800"
                            : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800"
                        }`}
                      >
                        <p className="text-sm font-medium">
                          {submitStatus.message}
                        </p>
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Request...
                        </>
                      ) : (
                        <>
                          <Github className="w-5 h-5" />
                          Request Access
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
