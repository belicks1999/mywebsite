"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GraduationCap, Briefcase, Heart } from "lucide-react";
import Image from "next/image";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stats = [
  { label: "Years of Experience", value: 1, suffix: "+" },
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Technologies & Tools", value: 10, suffix: "+" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              I’m Belicks, a passionate Full Stack Software Engineer with
              hands-on experience in developing dynamic, high-performance web
              applications. I hold a BEng (Hons) in Software Engineering from
              London Metropolitan University and an HND in Software Engineering
              from Pearson College London.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Driven by continuous learning, I aim to build impactful digital
              solutions that inspire innovation and reliability.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Education
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    BEng (Hons) in Software Engineering
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Current Role
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Associate Full Stack Developer at CodeSec Global
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                  <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Interests
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Web Development, Open Source, Learning New Technologies,
                    UI/UX Design, Cloud Computing, Software Testing, Mobile App
                    Testing, Artificial Intelligence, and DevOps Practices.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats & Avatar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Avatar Placeholder */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-1"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Belicks"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring" as const, stiffness: 300 }}
                >
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    delay={index * 0.1}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Counter({
  value,
  suffix,
  delay,
}: {
  value: number;
  suffix: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-3xl font-bold text-gray-900 dark:text-white">
      {isInView && <CountUp end={value} suffix={suffix} delay={delay} />}
    </div>
  );
}

function CountUp({
  end,
  suffix,
  delay,
}: {
  end: number;
  suffix: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, delay]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
