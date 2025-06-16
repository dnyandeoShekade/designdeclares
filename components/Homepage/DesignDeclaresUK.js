
"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import ScrollProgress from "./ScrollProgress"
// import ScrollProgress from "./scroll-progress"

export default function DesignDeclaresUK() {
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      // Start the animation sequence
      await controls.start("visible")
    }
    sequence()
  }, [controls])

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  // Enhanced letter variants with better spacing control
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
        mass: 0.8,
      },
    },
  }

  // Exclamation mark with absolute positioning to avoid spacing issues
  const exclamationVariants = {
    hidden: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    visible: {
      opacity: 0,
      scale: 0,
      rotate: 180,
      transition: {
        duration: 0.6,
        ease: "backIn",
        delay: 0.2,
      },
    },
  }

  // Word-level animations
  const wordVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -45,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        mass: 1,
      },
    },
  }

  // UK with enhanced color and glow effect
  const ukVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      color: "#E7E7E7",
      textShadow: "0 0 0px rgba(255, 86, 48, 0)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      color: "#FF5630",
      textShadow: "0 0 20px rgba(255, 86, 48, 0.5)",
      transition: {
        type: "spring",
        damping: 6,
        stiffness: 100,
        mass: 0.8,
        delay: 0.3,
      },
    },
  }

  // Enhanced content variants
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 1.5,
      },
    },
  }

  // Button variants with enhanced interactions
  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2,
      },
    },
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -45,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.98,
      y: 0,
    },
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 lg:p-12 relative overflow-hidden">
      <ScrollProgress />
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Left side - Enhanced animated text */}
        <div className="flex flex-col justify-start items-start h-full mt-10">
          <h1
            className="
            font-[__druk_ba9c3a,__druk_Fallback_ba9c3a,__Inter_d65c78,__Inter_Fallback_d65c78,Helvetica,sans-serif]
            font-extrabold
            text-[#E7E7E7]
            text-[clamp(60px,9vw,220px)]
            leading-[0.75]
            tracking-tight
            scale-y-140
            uppercase
            w-full
            text-left
            justify-items-stretch
            m-0
            p-0
          "
          >
            {/* DESIGN - Fixed spacing with relative positioning */}
            <div className="relative inline-block">
              <motion.span className="inline-block" variants={letterVariants}>
                D
              </motion.span>

              {/* Exclamation mark positioned absolutely to not affect layout */}
              <motion.span className="absolute top-0 left-[1em]" variants={exclamationVariants} style={{ zIndex: 10 }}>
                !
              </motion.span>

              <motion.span className="inline-block" variants={letterVariants}>
                E
              </motion.span>
              <motion.span className="inline-block" variants={letterVariants}>
                S
              </motion.span>
              <motion.span className="inline-block" variants={letterVariants}>
                I
              </motion.span>
              <motion.span className="inline-block" variants={letterVariants}>
                G
              </motion.span>
              <motion.span className="inline-block" variants={letterVariants}>
                N
              </motion.span>
            </div>

            <br />

            {/* DECLARES - Enhanced slide animation */}
            <motion.span className="inline-block" variants={wordVariants}>
              DECLARES
            </motion.span>

            <br />

            {/* UK - Enhanced with glow effect */}
            <motion.span className="inline-block" variants={ukVariants}>
              UK
            </motion.span>
          </h1>
        </div>

        {/* Right side - Enhanced content */}
        <div className="flex flex-col justify-between">
          <motion.div className="max-w-md ml-auto" variants={contentVariants}>
            <p
              className="
              font-sans
              font-normal
              text-base leading-relaxed
              text-gray-300
              w-full
            "
            >
              Design Declares is a growing group of designers, design studios, agencies and institutions here to declare
              a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing
              the tools of our industry to reimagine, rebuild and heal our world.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced floating buttons */}
      <motion.div
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col w-28 sm:w-32 md:w-40 lg:w-48 z-50"
        variants={buttonContainerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.button
          className="bg-white text-black border border-gray-300 font-medium text-xs sm:text-sm md:text-base h-9 sm:h-10 md:h-12 flex items-center justify-between px-2 sm:px-3 md:px-4 mb-1 rounded-sm"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span>Menu</span>
          <motion.span
            className="text-base sm:text-lg md:text-xl font-light pl-2 sm:pl-3 border-l border-gray-300"
            whileHover={{ rotate: 45 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            +
          </motion.span>
        </motion.button>
        <motion.button
          className="bg-white text-black border border-gray-300 font-medium text-xs sm:text-sm md:text-base h-9 sm:h-10 md:h-12 flex items-center justify-center rounded-sm"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Declare Now
        </motion.button>
      </motion.div>

      {/* Background animation elements */}
      {/* <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#FF5630] rounded-full opacity-20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          delay: 2,
        }}
      /> */}
      {/* <motion.div
        className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-30"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          delay: 3,
        }}
      /> */}
    </div>
  )
}
