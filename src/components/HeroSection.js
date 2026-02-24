"use client";

import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute z-10 inset-0 bg-linear-to-t from-mist-900 via-mist-900 via-20% to-transparent" />

      {/* Content */}
      <div className="relative z-20 mt-52 flex flex-col items-center justify-center text-center h-full px-4 gap-6">
        <Image
          src="/svgs/logo-warthunder-new.svg"
          width={600}
          height={0}
          alt="War Thunder Logo"
          className="w-[280px] md:w-[420px] lg:w-[620px] h-auto"
          priority
        />
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center opacity-70 gap-6 max-w-lg">
          {[
            "logo-steam.svg",
            "logo-windows.svg",
            "logo-ps4.svg",
            "logo-ps5.svg",
            "logo-xbox-one.svg",
            "logo-xbox-series-xs.svg",
          ].map((logo, i) => (
            <Image
              key={i}
              src={`/svgs/${logo}`}
              width={100}
              height={40}
              alt="platform"
              className="brightness-0 invert opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
        <button
          data-magnetic
          className="px-10 py-4 rounded-xl bg-white text-black font-semibold"
        >
          Download Game
        </button>
        {/* 🔥 Scroll Indicator */}
        <div className="flex flex-col items-center mt-2">
          <FiChevronDown className="text-white text-2xl animate-bounce-slow" />
          <FiChevronDown className="text-white text-2xl animate-bounce-slow [animation-delay:0.2s]" />
          <FiChevronDown className="text-white text-2xl animate-bounce-slow [animation-delay:0.4s]" />
        </div>
        <p className="max-w-5xl text-left text-2xl text-gray-200 font-bold tracking-wide leading-8 mt-6">
          {" "}
          War Thunder is the most comprehensive free-to-play, cross-platform,
          MMO military game for Windows, Linux, Mac, PlayStation®4,
          PlayStation®5, Xbox One and Xbox Series X|S dedicated to aviation,
          armoured vehicles, and naval vessels from the early 20th century to
          the most advanced modern combat units. Join now and take part in major
          battles on land, in the air and at sea, fighting with millions of
          other players from all over the world in an ever-evolving
          environment.{" "}
        </p>{" "}
        <p className="max-w-5xl text-left text-2xl text-gray-200 font-bold tracking-wide leading-8">
          {" "}
          In War Thunder, aircraft, attack helicopters, ground forces and naval
          vessels collaborate in realistic competitive battles. You can choose
          from over 2,500 vehicles from the early 20th century to the most
          modern combat units, in an extensive variety of combat situations many
          of which are exclusive. You can find yourself blasting your pursuers
          from a bomber turret, defending your teammates on the ground from an
          air raid with anti-aircraft guns, shooting down enemy aircraft with a
          firestorm from multiple rocket launchers, or trying to sink an enemy
          warship with a torpedo from a fast attack boat.{" "}
        </p>
      </div>
    </section>
  );
}
