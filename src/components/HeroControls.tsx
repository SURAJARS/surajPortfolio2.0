"use client";

import { useEffect, useRef, useState } from "react";
import { useAudio } from "@/context/AudioContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiVolume2, FiVolumeX } from "react-icons/fi";

export function EnterButton() {
  const { togglePlayPause, isPlaying } = useAudio();
  const [showedButton, setShowedButton] = useState(false);
  const hasClicked = useRef(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      if (!hasClicked.current) {
        setShowedButton(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    hasClicked.current = true;
    setShowedButton(false);
    togglePlayPause();
    // Set flag for scroll hint
    localStorage.setItem("enterExperienceClicked", "true");
  };

  return (
    <AnimatePresence>
      {showedButton && !isPlaying && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          onClick={handleEnter}
          className="fixed bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 z-50 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-transform flex items-center gap-3"
        >
          <FiPlay className="w-5 h-5" />
          Enter Experience
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function AudioToggle() {
  const { isPlaying, togglePlayPause } = useAudio();
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="flex items-center gap-3 bg-white rounded-full p-3 shadow-lg border border-amber-100">
        {/* Volume Toggle */}
        <button
          onClick={() => setShowVolumeControl(!showVolumeControl)}
          className="p-2 hover:bg-amber-50 rounded-full transition"
          aria-label="Toggle volume"
        >
          {isPlaying ? (
            <FiVolume2 className="w-5 h-5 text-amber-600" />
          ) : (
            <FiVolumeX className="w-5 h-5 text-amber-600" />
          )}
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="p-2 hover:bg-amber-50 rounded-full transition"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <FiPlay
            className={`w-5 h-5 text-amber-600 transition-transform ${isPlaying ? "rotate-90" : ""}`}
          />
        </button>
      </div>
    </motion.div>
  );
}
