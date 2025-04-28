"use client";

import { motion } from "motion/react";

export default function MissionVision() {
  return (
    <div className="container">
      <div className="e-con-inner">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <motion.h2
              className="font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl leading-[1.2]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.6,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              Our Vision
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.8,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              We believe in a future where AI innovation and regulatory
              compliance work together seamlessly, enabling businesses to
              harness the full potential of artificial intelligence.
            </motion.p>
          </div>
          <div className="space-y-4">
            <motion.h2
              className="font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl leading-[1.2]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.6,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.8,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              We empower businesses in regulated industries to build, deploy,
              and monetize AI—without compliance slowing them down. ArnoldAI
              transforms regulatory complexity into a competitive advantage,
              allowing companies to move fast, scale efficiently, and remain
              fully compliant.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
