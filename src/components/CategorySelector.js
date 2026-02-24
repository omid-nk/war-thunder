"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    id: "aviation",
    image: "/image/main_button_aircraft_en.webp",
    title: "AVIATION",
  },
  {
    id: "ground",
    image: "/image/main_button_tank_en.webp",
    title: "GROUND VEHICLES",
  },
  {
    id: "helicopter",
    image: "/image/main_button_helicopter_en.webp",
    title: "BLUEWATER FLEET",
  },
  {
    id: "naval",
    image: "/image/main_button_ship_en.webp",
    title: "BLUEWATER FLEET",
  },
  {
    id: "boat",
    image: "/image/main_button_boat_en.webp",
    title: "BLUEWATER FLEET",
  },
];

export default function CategorySelector({ active, setActive }) {
  return (
    <div className="max-w-5xl mx-auto py-14">
      <h3 className="text-gray-200 text-4xl font-medium mb-8 text-center">
        Military Vehicles
      </h3>
      <div className="flex justify-center gap-6 ">
        {categories.map((cat) => {
          const isActive = active === cat.id;

          return (
            <motion.div
              key={cat.id}
              onClick={() => setActive(cat.id)}
              whileHover={{ scale: 1.05 }}
              className={`
              relative w-44 h-72 rounded-2xl overflow-hidden cursor-pointer
              transition-all duration-500
              ${isActive ? "opacity-100 scale-105" : "opacity-40"}
              `}
            >
              <Image
                src={cat.image}
                width={120}
                height={0}
                alt="card"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
