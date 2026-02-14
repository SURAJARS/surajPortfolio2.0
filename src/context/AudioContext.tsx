"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

interface AudioContextType {
  isPlaying: boolean;
  volume: number;
  togglePlayPause: () => void;
  setVolume: (volume: number) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0);
  const volumeRef = useRef(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Fade out before stopping
      fadeOutAndStop();
    } else {
      // Start playing with fade in
      audio.volume = 0;
      audio.play().catch((err) => console.log("Audio play error:", err));
      fadeIn();
    }
  };

  const fadeIn = () => {
    const audio = audioRef.current;
    if (!audio) return;

    let currentVolume = 0;
    const targetVolume = 0.3;
    const step = 0.02;
    const interval = setInterval(() => {
      currentVolume += step;
      if (currentVolume >= targetVolume) {
        audio.volume = targetVolume;
        volumeRef.current = targetVolume;
        setVolumeState(targetVolume);
        clearInterval(interval);
      } else {
        audio.volume = currentVolume;
        volumeRef.current = currentVolume;
        setVolumeState(currentVolume);
      }
    }, 50);
  };

  const fadeOutAndStop = () => {
    const audio = audioRef.current;
    if (!audio) return;

    let currentVolume = audio.volume;
    const step = 0.02;
    const interval = setInterval(() => {
      currentVolume -= step;
      if (currentVolume <= 0) {
        audio.volume = 0;
        audio.pause();
        volumeRef.current = 0;
        setVolumeState(0);
        clearInterval(interval);
      } else {
        audio.volume = currentVolume;
        volumeRef.current = currentVolume;
        setVolumeState(currentVolume);
      }
    }, 50);
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    volumeRef.current = newVolume;
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <AudioContext.Provider
      value={{ isPlaying, volume, togglePlayPause, setVolume, audioRef }}
    >
      <audio
        ref={audioRef}
        src="/music/ambient.mp3"
        loop
        crossOrigin="anonymous"
        style={{ display: "none" }}
      />
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
}
