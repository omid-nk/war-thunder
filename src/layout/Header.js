"use client";

import Image from "next/image";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <div className="fixed z-50 left-0 right-0 top-0 backdrop-blur-sm">
        {/* top bar */}
        <div className="bg-gray-950 w-full h-10 flex justify-between items-center px-4">
          <div className="flex gap-4 items-center">
            <Image
              src="/svgs/icon-gjn.svg"
              width={15}
              height={15}
              alt="svg logo gijin"
            />

            <ul className="hidden gap-4 text-xs text-gray-400 sm:flex">
              {["games", "store", "support", "search"].map((item) => (
                <li
                  key={item}
                  className="uppercase transition-colors cursor-pointer hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors">
            Sign in
          </p>
        </div>

        {/* bottom bar */}
        <div className="w-full lg:h-36 bg-black/40 flex justify-center items-center">
          <div className="w-full max-w-7xl px-4 py-3 flex items-center justify-between lg:justify-center gap-10">
            <Image
              src="/svgs/logo-warthunder-new.svg"
              width={180}
              height={0}
              alt="logo"
              priority
            />

            {/* burger */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-white"
              aria-label="Open menu"
            >
              <HiBars3 className="w-8 h-8" />
            </button>

            {/* desktop nav */}
            <ul className="hidden lg:flex gap-6 text-lg text-gray-200">
              {[
                "game",
                "media",
                "tutorials",
                "workshop",
                "community",
                "esports",
              ].map((item) => (
                <li
                  key={item}
                  className="uppercase cursor-pointer transition-all hover:text-white hover:text-shadow-lg text-shadow-white/25"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-xs bg-mist-900 border-l border-mist-600/40
        transform transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* header */}
        <div className="flex items-center justify-between px-4 h-14 border-b border-mist-600/30">
          <span className="text-gray-200 tracking-widest text-sm">MENU</span>
          <button onClick={() => setOpen(false)}>
            <HiXMark className="w-6 h-6 text-gray-200" />
          </button>
        </div>

        {/* menu items */}
        <ul className="flex flex-col gap-6 px-6 py-8 text-gray-200 text-sm">
          {[
            "game",
            "media",
            "tutorials",
            "workshop",
            "community",
            "esports",
          ].map((item) => (
            <li
              key={item}
              onClick={() => setOpen(false)}
              className="uppercase tracking-widest cursor-pointer hover:text-white transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* footer */}
        <div className="absolute bottom-6 left-0 right-0 px-6">
          <button className="w-full py-3 border border-mist-600/40 text-gray-200 uppercase tracking-widest text-xs hover:bg-mist-600/20 transition">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}
