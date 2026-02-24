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
      <Links />
      <BannerWtMobile />
      <CategorySelector active={active} setActive={setActive} />
      <Hero3D scene={active} />
      <StudioCursor />
    </>
  );
}
