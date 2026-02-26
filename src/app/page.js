"use client";

import { BannerWtMobile } from "@/components/BannerWtMobile";
import CategorySelector from "@/components/CategorySelector";
import Hero3D from "@/components/Hero3D";
import { HeroSection } from "@/components/HeroSection";
import { Links } from "@/components/Links";
import StudioCursor from "@/components/StudioCursor";
import { Header } from "@/layout/Header";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("ground");

  return (
    <>
      <Header />
      <HeroSection />
      {/* text */}
      <p className="md:hidden px-2 max-w-5xl text-left text-md sm:text-xl text-gray-200 font-bold tracking-wide md:leading-8 mt-0 md:mt-6 md:text-2xl">
        War Thunder is the most comprehensive free-to-play, cross-platform, MMO
        military game for Windows, Linux, Mac, PlayStation®4, PlayStation®5,
        Xbox One and Xbox Series X|S dedicated to aviation, armoured vehicles,
        and naval vessels from the early 20th century to the most advanced
        modern combat units. Join now and take part in major battles on land, in
        the air and at sea, fighting with millions of other players from all
        over the world in an ever-evolving environment.
      </p>
      <p className="md:hidden px-2 mt-6 max-w-5xl text-left text-md sm:text-xl text-gray-200 font-bold tracking-wide md:leading-8 md:text-2xl">
        In War Thunder, aircraft, attack helicopters, ground forces and naval
        vessels collaborate in realistic competitive battles. You can choose
        from over 2,500 vehicles from the early 20th century to the most modern
        combat units, in an extensive variety of combat situations many of which
        are exclusive. You can find yourself blasting your pursuers from a
        bomber turret, defending your teammates on the ground from an air raid
        with anti-aircraft guns, shooting down enemy aircraft with a firestorm
        from multiple rocket launchers, or trying to sink an enemy warship with
        a torpedo from a fast attack boat.
      </p>
      <Links />
      <BannerWtMobile />
      <CategorySelector active={active} setActive={setActive} />
      <Hero3D scene={active} />
      <StudioCursor />
    </>
  );
}
