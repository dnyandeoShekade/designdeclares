"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function FooterSection() {
  const [formData, setFormData] = useState({
    email: "",
    newsletter: false,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = () => {
    setFormData((prev) => ({
      ...prev,
      newsletter: !prev.newsletter,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.footer
      className="bg-[#FF5630] py-12 sm:py-16 px-4 sm:px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Logo */}
          <motion.div className="md:col-span-2 lg:col-span-1" variants={logoVariants}>
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-none tracking-tight text-black">
                DESIGN
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-none tracking-tight text-black">
                DECLARES
              </h2>
            </div>
          </motion.div>

          {/* Center Column - Navigation */}
          <motion.div className="md:col-span-1 lg:col-span-1" variants={itemVariants}>
            <nav className="space-y-4">
              <motion.a
                href="#"
                className="block text-black text-base hover:opacity-70 transition-opacity duration-200"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Contact
              </motion.a>
              <motion.a
                href="#"
                className="block text-black text-base hover:opacity-70 transition-opacity duration-200"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Instagram
              </motion.a>
              <motion.a
                href="#"
                className="block text-black text-base hover:opacity-70 transition-opacity duration-200"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="#"
                className="block text-black text-base hover:opacity-70 transition-opacity duration-200"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Privacy Policy
              </motion.a>
            </nav>
          </motion.div>

          {/* Right Column - Newsletter Form */}
          <motion.div className="md:col-span-1 lg:col-span-1" variants={formVariants}>
            <div className="space-y-6">
              <motion.h3 className="text-black text-base sm:text-lg font-semibold" variants={itemVariants}>
                Sign up to the D! Newsletter
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={itemVariants}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email:*"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border border-black text-black placeholder-black placeholder-opacity-70 px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-black focus:border-2 transition-all duration-200"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.newsletter}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 sm:w-5 sm:h-5 border border-black bg-transparent checked:bg-black checked:border-black mt-0.5 flex-shrink-0"
                    />
                    <span className="text-black text-xs sm:text-sm leading-relaxed">
                      I would like to be added to the Design Declares! newsletter and receive further updates.
                    </span>
                  </label>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <a href="#" className="text-black text-sm underline hover:opacity-70 transition-opacity duration-200">
                    View our Privacy Policy
                  </a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="w-full sm:w-auto bg-white text-black font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-3 text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Subscribe
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-black border-opacity-20 space-y-3 sm:space-y-4"
          variants={itemVariants}
        >
          <motion.p className="text-black text-xs leading-relaxed max-w-4xl" variants={itemVariants}>
            This website has been built following low-carbon principles of web development and hosted using serverless
            computing, by only allocating energy when needed and on demand.{" "}
            <a href="#" className="underline hover:opacity-70 transition-opacity duration-200">
              Learn more about our carbon footprint.
            </a>
          </motion.p>

          <motion.p className="text-black text-xs" variants={itemVariants}>
            Empowered by{" "}
            <a href="#" className="underline hover:opacity-70 transition-opacity duration-200">
              Driftime®
            </a>
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
