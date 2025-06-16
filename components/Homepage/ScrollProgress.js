"use client"

import { useState, useEffect } from "react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = window.scrollY
      const progress = (currentProgress / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", handleScroll)

    // Call once to set initial state
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-transparent z-50">
      <div
        className="h-full bg-[#FF6340] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
