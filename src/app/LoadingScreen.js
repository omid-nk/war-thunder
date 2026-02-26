"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    let start;

    const duration = 2200; // مدت کل لودینگ

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (elapsed < duration) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-mist-900 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px]" />

      {/* Radar */}
      <div className="relative w-56 h-56 mb-14">
        {/* Outer Rings */}
        <div className="absolute inset-0 rounded-full border border-mist-600/40" />
        <div className="absolute inset-8 rounded-full border border-mist-600/30" />
        <div className="absolute inset-16 rounded-full border border-mist-600/20" />

        {/* Crosshair */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-mist-600/30 absolute" />
          <div className="h-full w-px bg-mist-600/30 absolute" />
        </div>

        {/* Sweep */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.15))]" />
        </motion.div>

        {/* Ping Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.4, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute top-1/3 left-1/2 w-3 h-3 bg-gray-200 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.7)]"
        />
      </div>

      {/* Title */}
      <h1 className="text-gray-200 tracking-[0.4em] text-lg mb-6">
        WAR THUNDER
      </h1>

      {/* Status */}
      <p className="text-mist-600 text-xs tracking-[0.3em] mb-6">
        INITIALIZING SYSTEM...
      </p>

      {/* Progress Bar */}
      <div className="w-72 h-2 bg-mist-900 border border-mist-600/40 overflow-hidden">
        <motion.div
          className="h-full bg-mist-600"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-xs text-gray-200 tracking-widest">
        {Math.floor(progress)}%
      </p>
    </motion.div>
  );
}
