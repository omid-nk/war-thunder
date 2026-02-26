"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const scenes = {
  aviation: {
    bg: "/image/avia-bg.jpg",
    mid: "/image/avia-explode.png",
    front: "/image/avia-airplane.png",
    title: "AVIATION",
  },
  ground: {
    bg: "/image/ground-bg.jpg",
    mid: "/image/ground-explode.png",
    front: "/image/ground-tank.png",
    title: "GROUND FORCES",
  },
  helicopter: {
    bg: "/image/heli-bg.jpg",
    mid: "/image/heli-entourage.png",
    front: "/image/heli-helicopter.png",
    title: "HELICOPTERS",
  },
  naval: {
    bg: "/image/fleet-bg.jpg",
    mid: "/image/fleet-explode.png",
    front: "/image/fleet-ship.png",
    title: "BLUEWATER FLEET",
  },
  boat: {
    bg: "/image/fleet-bg.jpg",
    mid: "/image/fleet-explode.png",
    front: "/image/fleet-ship.png",
    title: "COASTAL FLEET",
  },
};

export default function Hero3D({ scene }) {
  const data = scenes[scene];
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouse = (e) => {
      if (isMobile) return;

      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  const intensity = isMobile ? 20 : 100;

  const bgX = useTransform(smoothX, (v) => v * -(intensity * 0.2));
  const bgY = useTransform(smoothY, (v) => v * -(intensity * 0.2));

  const midX = useTransform(smoothX, (v) => v * -(intensity * 0.6));
  const midY = useTransform(smoothY, (v) => v * -(intensity * 0.6));

  const frontX = useTransform(smoothX, (v) => v * -intensity);
  const frontY = useTransform(smoothY, (v) => v * -intensity);

  return (
    <div className="relative w-full hidden lg:block min-h-[70vh] md:h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={scene}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {/* Background */}
          <motion.img
            src={data.bg}
            style={{ x: bgX, y: bgY }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Mid Layer */}
          <motion.img
            src={data.mid}
            style={{ x: midX, y: midY }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          {/* Title */}
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h1
              className="
              font-extrabold 
              text-white 
              tracking-widest
              drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]
              text-4xl
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
              xl:text-9xl
            "
            >
              {data.title}
            </h1>
          </div>

          {/* Front */}
          <motion.img
            src={data.front}
            style={{ x: frontX, y: frontY }}
            className="absolute inset-0 w-full h-full object-contain md:object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
