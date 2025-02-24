"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });


  return (
    <motion.div
    className="h-[480px] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
    ref={ref}
    style={{
      maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 90%, transparent)',
      WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 90%, transparent)',
    }}
  >
    <div className="div relative flex items-start px-4">
      <div className="max-w-2xl">
        {content.map((item, index) => (
          <div key={item.title + index} className="my-20">
            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="text-4xl font-bold text-slate-100"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="text-kg text-slate-300 max-w-500 mt-10"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
        <div className="h-10" />
      </div>
    </div>
    <div
      className={cn(
        "hidden lg:block h-100 w-100 rounded-md bg-white sticky top-2 overflow-hidden",
        contentClassName
      )}
    >
      {content[activeCard].content ?? null}
    </div>
  </motion.div>
  
  );
};
