"use client";

import { useAudio } from "@/context/AudioContext";
import { useState } from "react";
import { FiVolume2, FiVolumeX, FiPlay, FiPause } from "react-icons/fi";
import { motion } from "framer-motion";

export function AudioPlayer() {
  const { isPlaying, volume, togglePlayPause, setVolume } = useAudio();
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="flex items-center gap-3 bg-white rounded-full p-3 shadow-lg border border-amber-100">
        {/* Volume Control */}
        {showVolumeControl && (
          <motion.input
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            exit={{ width: 0 }}
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="h-1 cursor-pointer"
            style={{
              background: `linear-gradient(to right, var(--accent-gold) 0%, var(--accent-gold) ${volume * 100}%, #e0e0e0 ${volume * 100}%, #e0e0e0 100%)`,
            }}
          />
        )}

        {/* Volume Toggle */}
        <button
          onClick={() => setShowVolumeControl(!showVolumeControl)}
          className="p-2 hover:bg-amber-50 rounded-full transition"
          aria-label="Toggle volume"
        >
          {volume === 0 ? (
            <FiVolumeX className="w-5 h-5 text-amber-600" />
          ) : (
            <FiVolume2 className="w-5 h-5 text-amber-600" />
          )}
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="p-2 hover:bg-amber-50 rounded-full transition"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <FiPause className="w-5 h-5 text-amber-600" />
          ) : (
            <FiPlay className="w-5 h-5 text-amber-600" />
          )}
        </button>
      </div>
    </motion.div>
  );
}
