"use client";

import { motion } from "framer-motion";
import { ChevronDown, Code, Rocket } from "lucide-react";
import { useMemo } from "react";

export default function Hero() {
  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Generate stable bubble configurations
  const bubbles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 10, // Random size between 10-50px
      left: Math.random() * 100, // Random horizontal position
      delay: Math.random() * 5, // Random delay
      duration: Math.random() * 8 + 6, // Random duration between 6-14 seconds
      opacity: Math.random() * 0.3 + 0.2, // Random opacity between 0.2-0.5
      xDrift: Math.random() * 20 - 10, // Slight horizontal drift
    }));
  }, []);

  // Generate stable fish configurations
  const fishes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const startX = Math.random() * 80 + 10; // Random starting X position (10-90%)
      const startY = Math.random() * 80 + 10; // Random starting Y position (10-90%)
      const direction = Math.random() > 0.5 ? 1 : -1; // 1 for right, -1 for left
      const distance = Math.random() * 40 + 30; // Distance to travel
      const endX = Math.max(5, Math.min(95, startX + direction * distance)); // End X
      const endY = Math.max(
        5,
        Math.min(95, startY + (Math.random() * 30 - 15))
      ); // End Y
      const midX = (startX + endX) / 2 + (Math.random() * 15 - 7.5); // Curved path
      const midY = (startY + endY) / 2 + (Math.random() * 15 - 7.5);

      return {
        id: i,
        size: 40, // Fixed size - all fish are the same size
        startX,
        startY,
        endX,
        endY,
        midX,
        midY,
        delay: Math.random() * 3,
        duration: Math.random() * 15 + 10, // Random duration between 10-25 seconds
        color: [
          "#FF6B6B", // Red
          "#4ECDC4", // Teal
          "#45B7D1", // Blue
          "#FFA07A", // Light Salmon
          "#98D8C8", // Mint
          "#F7DC6F", // Yellow
          "#BB8FCE", // Purple
          "#85C1E2", // Sky Blue
        ][Math.floor(Math.random() * 8)],
        direction,
      };
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    >
      {/* Fish Tank Bubble Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              bottom: "-50px",
              opacity: bubble.opacity,
              border: `1px solid rgba(255, 255, 255, 0.3)`,
              background: `
                radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 15%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(173, 216, 230, 0.2) 0%, transparent 50%),
                radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%),
                linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(173, 216, 230, 0.15) 50%, rgba(135, 206, 250, 0.1) 100%)
              `,
              boxShadow: `
                inset 0 0 ${bubble.size * 0.3}px rgba(255, 255, 255, 0.3),
                inset -${bubble.size * 0.1}px -${bubble.size * 0.1}px ${
                bubble.size * 0.2
              }px rgba(0, 0, 0, 0.1),
                0 0 ${bubble.size * 0.2}px rgba(173, 216, 230, 0.2)
              `,
              backdropFilter: "blur(1px)",
            }}
            animate={{
              y: ["0vh", "-120vh"],
              x: [0, `${bubble.xDrift}px`],
              scale: [1, 1.1, 0.9],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Swimming Fish */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fishes.map((fish) => {
          const initialFlip = fish.direction === -1 ? -1 : 1;

          return (
            <motion.div
              key={fish.id}
              className="absolute"
              style={{
                width: `${fish.size}px`,
                height: `${fish.size * 0.6}px`,
                left: `${fish.startX}%`,
                top: `${fish.startY}%`,
                opacity: 0.7,
                transformOrigin: "center",
              }}
              animate={{
                left: [
                  `${fish.startX}%`,
                  `${fish.midX}%`,
                  `${fish.endX}%`,
                  `${fish.midX}%`,
                  `${fish.startX}%`,
                ],
                top: [
                  `${fish.startY}%`,
                  `${fish.midY}%`,
                  `${fish.endY}%`,
                  `${fish.midY}%`,
                  `${fish.startY}%`,
                ],
                scaleX: [
                  initialFlip,
                  initialFlip,
                  initialFlip * -1,
                  initialFlip * -1,
                  initialFlip,
                ],
              }}
              transition={{
                duration: fish.duration,
                delay: fish.delay,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
            >
              <svg
                width={fish.size}
                height={fish.size * 0.6}
                viewBox="0 0 60 36"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Fish body */}
                <ellipse
                  cx="30"
                  cy="18"
                  rx="22"
                  ry="12"
                  fill={fish.color}
                  opacity="0.8"
                />
                {/* Fish tail */}
                <path
                  d="M 8 18 Q 0 10 0 18 Q 0 26 8 18"
                  fill={fish.color}
                  opacity="0.9"
                />
                {/* Fish fin (top) */}
                <ellipse
                  cx="20"
                  cy="10"
                  rx="6"
                  ry="8"
                  fill={fish.color}
                  opacity="0.6"
                />
                {/* Fish fin (bottom) */}
                <ellipse
                  cx="20"
                  cy="26"
                  rx="6"
                  ry="8"
                  fill={fish.color}
                  opacity="0.6"
                />
                {/* Fish eye */}
                <circle cx="38" cy="16" r="3" fill="white" />
                <circle cx="39" cy="15" r="1.5" fill="black" />
                {/* Fish pattern/stripe */}
                <ellipse
                  cx="25"
                  cy="18"
                  rx="8"
                  ry="6"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
          );
        })}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I&apos;m Belicks
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl font-semibold text-gray-100 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-200 dark:text-white mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full Stack Software Engineer passionate about building scalable and
            user-friendly web applications. Experienced in both frontend (React,
            Next.js) and backend (Node.js, ASP.NET, MySQL, MongoDB, PostgreSQL)
            development. I enjoy solving real-world problems, collaborating in
            teams, and continuously learning to create innovative, impactful
            digital solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              onClick={() => handleScroll("projects")}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View Projects
            </motion.button>

            <motion.button
              onClick={() => handleScroll("contact")}
              className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold flex items-center gap-2 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("about");
          }}
          className="flex flex-col items-center text-gray-200 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}
