"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check if the clicked element is an anchor tag with a hash
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()

        const href = target.getAttribute("href")
        if (!href) return

        const targetElement = document.querySelector(href)
        if (!targetElement) return

        // Smooth scroll to the target element
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Update URL without causing a page jump
        window.history.pushState(null, "", href)
      }
    }

    // Add event listener to the document
    document.addEventListener("click", handleLinkClick)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [])

  return null
}
