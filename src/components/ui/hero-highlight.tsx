"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/ui/hero-highlight";

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
        className="text-2xl  lg:text-5xl font-bold text-neutral-700 text-white leading-relaxed lg:leading-snug"
      >
        I'm Senthil Kumaran {" "}
        <Highlight className="text-black dark:text-white">
          Graphic Designer
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
