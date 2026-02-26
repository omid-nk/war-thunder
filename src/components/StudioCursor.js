"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function StudioCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spring = { damping: 30, stiffness: 220 };
  const x = useSpring(mouseX, spring);
  const y = useSpring(mouseY, spring);

  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const move = (e) => {
      if (!hovered) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [hovered]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-magnetic]");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const rect = el.getBoundingClientRect();
        const radius = window.getComputedStyle(el).borderRadius;

        setHovered({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height,
          radius,
        });
      });

      el.addEventListener("mouseleave", () => {
        setHovered(null);
      });
    });
  }, []);

  useEffect(() => {
    if (hovered) {
      mouseX.set(hovered.x);
      mouseY.set(hovered.y);
    }
  }, [hovered]);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 z-40 pointer-events-none lg:block hidden"
    >
      <motion.div
        animate={
          hovered
            ? {
                width: hovered.width,
                height: hovered.height,
                borderRadius: hovered.radius,
              }
            : {
                width: 18,
                height: 18,
                borderRadius: "50%",
              }
        }
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 22,
        }}
        className="
          -translate-x-1/2 -translate-y-1/2
          backdrop-blur-xl
          bg-black/20
          border border-white/20
          mix-blend-difference
        "
      />
    </motion.div>
  );
}
