"use client";

import { motion } from "motion/react";

export default function AboutHeader() {
  return (
    <div className="container xl:py-20">
      <div className="e-con-inner">
        <section className="relative flex items-center justify-center">
          <div className="flex flex-col items-center md:w-3/4 lg:w-3/5 gap-4 text-center">
            <motion.h1
              className="font-semibold text-4xl sm:text-[40px] xl:text-[56px] leading-[1.2]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              About Us
            </motion.h1>
            <motion.p
              className="sm:text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              Transforming regulatory complexity into competitive advantage
            </motion.p>
          </div>
        </section>
      </div>
    </div>
  );
}
