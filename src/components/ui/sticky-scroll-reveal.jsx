"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/utils";
import { ArrowUpRight } from 'lucide-react';

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_, index) => index / cardLength
    );

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);

        if (
          distance <
          Math.abs(latest - cardsBreakpoints[acc])
        ) {
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
      ref={ref}
      className="relative flex justify-between gap-8 bg-none mt-12 md:gap-10 lg:gap-20"
    >
      {/* Project information */}
      <div className="relative flex items-start px-4 md:w-[42%] lg:w-[40%]">
        <div className="w-full max-w-xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-[35vh] first:mt-[15vh]"
            >
              <motion.div
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.4 }}
              >
                <span
                  className={cn(
                    "mb-5 block text-sm transition-colors duration-300",
                    activeCard === index
                      ? "text-black"
                      : "text-gray-400"
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2
                  className={cn(
                    "text-3xl font-semibold tracking-tight transition-colors duration-300 md:text-4xl lg:text-5xl",
                    activeCard === index
                      ? "text-black"
                      : "text-gray-400"
                  )}
                >
                  {item.title}
                </h2>

                <p
                  className={cn(
                    "mt-6 max-w-md text-base leading-7 transition-colors duration-300 md:text-[17px] lg:text-lg",
                    activeCard === index
                      ? "text-gray-600"
                      : "text-gray-400"
                  )}
                >
                  {item.description}
                </p>
                {/* Project links */}
                <div className="mt-14 flex items-center gap-6">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group inline-flex items-center font-semibold uppercase transition-colors duration-300 hover:text-[#3157ff]",
                      activeCard === index
                        ? "text-black"
                        : "text-gray-400"
                    )}
                  >
                    Live preview 
                    <ArrowUpRight color="#3157ff" className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                  </a>

                  <a
                    href={`/case-study/${item.slug}`}
                    className={cn(
                      "group inline-flex items-center font-semibold uppercase transition-colors duration-300 hover:text-[#3157ff]",
                      activeCard === index
                        ? "text-black"
                        : "text-gray-400"
                    )}
                  >
                    Case study 
                    <ArrowUpRight color="#3157ff" className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}

          <div className="h-[30vh]" />
        </div>
      </div>

      {/* Sticky image */}
      <div
        className={cn(
          "sticky top-[15vh] hidden h-[58vh] w-[55%] overflow-hidden rounded-2xl bg-gray-100 md:block md:h-[62vh] lg:top-[15vh] lg:h-[70vh]",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};