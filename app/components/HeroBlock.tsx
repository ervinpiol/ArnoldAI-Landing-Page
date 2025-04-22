"use client";

import { motion } from "motion/react";

interface HeroBlockProps {
  title: string;
  description: string;
}

export function HeroBlock({ title, description }: HeroBlockProps) {
  return (
    <div className="mx-auto w-1/2 flex flex-col items-center">
      <motion.h2
        className="font-semibold tracking-tight text-2xl sm:text-3xl md:text-5xl text-center leading-[1.2]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="mt-4 text-muted-foreground md:w-4/5 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        {description}
      </motion.p>
    </div>
  );
}
