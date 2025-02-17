"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlights } from "./ui/Hero-Highlight";
import MagicButtons from "./ui/MagicButtons";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" py-4 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Akses data personal Guru & Kebutuhan administrasi Guru 
        di halaman{" "}
        <Highlights className="text-black dark:text-white py-1">
          drive bersama smk mutu.
          <br />
          <br />
          <a href="/drive " >
            <MagicButtons />
          </a>
        </Highlights>
      </motion.h1>
    </HeroHighlight>
  );
}
