"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollHint() {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Check if user has already started scrolling
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHint(false);
      }
    };

    // Check localStorage for Enter Experience click
    const checkEnterClicked = () => {
      const enterClicked = localStorage.getItem("enterExperienceClicked");
      if (enterClicked === "true") {
        setShowHint(true);
        // Reset after showing
        setTimeout(() => {
          localStorage.removeItem("enterExperienceClicked");
          setShowHint(false);
        }, 5000);
      }
    };

    checkEnterClicked();
    const interval = setInterval(checkEnterClicked, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showHint) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
    >
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-2xl font-semibold text-lg whitespace-nowrap">
        <div className="flex items-center gap-3">
          <span>👇 Scroll to explore my journey</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
