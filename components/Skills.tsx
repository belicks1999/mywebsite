"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiAmazon,
  SiVercel,
  SiSanity,
  SiStrapi,
  SiPostman,
  SiJira,
} from "react-icons/si";

const technologies = [
  // Frontend
  {
    name: "React.js",
    icon: SiReact,
    color: "from-blue-500 to-cyan-500",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "from-gray-800 to-gray-600",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "from-teal-500 to-cyan-500",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "from-blue-600 to-blue-800",
    category: "Language",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "from-purple-500 to-pink-500",
    category: "Frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "from-green-500 to-emerald-500",
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "from-gray-700 to-gray-900",
    category: "Backend",
  },
  {
    name: "ASP.NET Core",
    icon: SiDotnet,
    color: "from-indigo-600 to-blue-700",
    category: "Backend",
  },

  // Database
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "from-green-600 to-green-800",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "from-blue-700 to-indigo-700",
    category: "Database",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "from-yellow-500 to-orange-500",
    category: "Database",
  },
  {
    name: "SQL Server",
    icon: SiMysql,
    color: "from-red-500 to-red-700",
    category: "Database",
  },

  // DevOps & Tools
  {
    name: "Docker",
    icon: SiDocker,
    color: "from-blue-500 to-cyan-600",
    category: "DevOps",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "from-orange-600 to-red-600",
    category: "Version Control",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "from-gray-700 to-gray-900",
    category: "Version Control",
  },
  {
    name: "AWS",
    icon: SiAmazon,
    color: "from-orange-500 to-yellow-500",
    category: "Cloud",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "from-gray-700 to-black",
    category: "Deployment",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "from-orange-500 to-orange-600",
    category: "API Tools",
  },
  {
    name: "Jira",
    icon: SiJira,
    color: "from-blue-500 to-blue-600",
    category: "Project Management",
  },

  // CMS
  {
    name: "Sanity CMS",
    icon: SiSanity,
    color: "from-pink-500 to-rose-500",
    category: "CMS",
  },
  {
    name: "Strapi",
    icon: SiStrapi,
    color: "from-indigo-500 to-purple-600",
    category: "CMS",
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
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500 to-cyan-500",
  Backend: "from-green-500 to-emerald-500",
  Database: "from-purple-500 to-pink-500",
  Language: "from-indigo-500 to-blue-500",
  DevOps: "from-orange-500 to-red-500",
  "Version Control": "from-gray-600 to-gray-800",
  Cloud: "from-yellow-500 to-orange-500",
  Deployment: "from-violet-500 to-purple-600",
  "API Tools": "from-red-500 to-pink-500",
  "Project Management": "from-blue-500 to-indigo-600",
  CMS: "from-pink-500 to-rose-500",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Group technologies by category
  const groupedTechs = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof technologies>);

  const categories = Object.keys(groupedTechs);
  const displayTechs = selectedCategory
    ? groupedTechs[selectedCategory]
    : technologies;

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-normal pb-2">
            Technologies & Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === null
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? `bg-gradient-to-r ${
                      categoryColors[category] || "from-blue-600 to-purple-600"
                    } text-white shadow-lg scale-105`
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grouped Display by Categories */}
        {selectedCategory === null ? (
          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="mb-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`h-1 flex-1 bg-gradient-to-r ${
                      categoryColors[category] || "from-blue-600 to-purple-600"
                    } rounded-full`}
                  ></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    {category}
                  </h3>
                  <div
                    className={`h-1 flex-1 bg-gradient-to-r ${
                      categoryColors[category] || "from-blue-600 to-purple-600"
                    } rounded-full`}
                  ></div>
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
                >
                  {groupedTechs[category].map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -8 }}
                        className="group relative"
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-2xl`}
                        ></div>
                        <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer h-full hover:shadow-2xl">
                          <div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} p-3 mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon size={28} className="text-white" />
                          </div>
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                            {tech.name}
                          </h3>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
          >
            {displayTechs.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-2xl`}
                  ></div>
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer h-full hover:shadow-2xl">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} p-3 mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {tech.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
