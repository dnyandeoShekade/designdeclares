"use client";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Latestsection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const articles = [
    {
      id: 1,
      tags: ["Events", "DI UK"],
      date: "24.04.2025, 15:30",
      title:
        "SD4P Collective: How can Service Design drive meaningful sustainability impact",
      subtitle: "Recap: SD4P Collective working session – 28th March 2025",
      link: "Read story",
    },
    {
      id: 2,
      tags: ["Events", "DI UK"],
      date: "06.12.2024, 14:30",
      title: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
      subtitle:
        "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
      link: "Read story",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  };

  const articleVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.15,
      },
    },
  };

  const tagVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  };

  const fixedButtonVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.05,
      },
    },
  };

  const singleButtonVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div>
      <section className="bg-black py-16 px-4 md:px-12" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Column - Heading */}
            <div className="lg:w-1/3">
              <div className="sticky top-8">
                <motion.h1
                  className="text-white font-bold text-lg md:text-base"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  Latest
                </motion.h1>
              </div>
            </div>

            {/* Right Column - Articles */}
            <motion.div
              className="lg:w-2/3 space-y-16"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {articles.map((article, articleIndex) => (
                <motion.article
                  key={article.id}
                  className="space-y-4"
                  variants={articleVariants}
                  whileHover={{
                    scale: 1.01,
                    y: -3,
                    transition: {
                      duration: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                >
                  {/* Tags and Date */}
                  <motion.div
                    className="flex flex-wrap items-center gap-2 text-xs"
                    variants={containerVariants}
                  >
                    {article.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="bg-[#272727] text-white px-2 py-1 rounded"
                        variants={tagVariants}
                        whileHover={{
                          scale: 1.02,
                          y: -2,
                          transition: {
                            duration: 0.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          },
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    <motion.span
                      className="text-gray-400"
                      variants={tagVariants}
                    >
                      {article.date}
                    </motion.span>
                  </motion.div>

                  {/* Article Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Title */}
                    <motion.div variants={titleVariants}>
                      <h3 className="text-white text-2xl md:text-3xl font-normal leading-tight">
                        {article.title}
                      </h3>
                    </motion.div>

                    {/* Subtitle and Link */}
                    <motion.div
                      className="space-y-4"
                      variants={contentVariants}
                    >
                      <p className="text-gray-300 text-base leading-relaxed">
                        {article.subtitle}
                      </p>
                      <motion.a
                        href="#"
                        className="text-white underline hover:text-gray-300 transition-colors duration-200 inline-block"
                        whileHover={{
                          y: -2,
                          transition: {
                            duration: 0.15,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {article.link}
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.article>
              ))}

              {/* See All Button */}
              <motion.div className="pt-8" variants={buttonVariants}>
                <motion.button
                  className="bg-white text-black font-semibold rounded-full px-8 py-3 hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                    boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
                    transition: {
                      duration: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  See all the latest
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fixed Bottom-Right Buttons */}
    </div>
  );
}
