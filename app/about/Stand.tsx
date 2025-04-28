"use client";

import { motion } from "motion/react";
import { HeroBlock } from "../components/HeroBlock";

const principles = [
  {
    title: "AI Without Barriers",
    description: "Compliance should enable innovation, not restrict it.",
    icon: (
      <svg
        className="h-8 w-8 text-purple-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Compliance by Design",
    description:
      "AI should be transparent, secure, and aligned with industry regulations from day one.",
    icon: (
      <svg
        className="h-8 w-8 text-purple-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Speed and Scalability",
    description:
      "AI adoption should be fast, efficient, and accessible for all businesses—not just tech giants.",
    icon: (
      <svg
        className="h-8 w-8 text-purple-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export default function Stand() {
  return (
    <div className="container pb-20 md:pb-28">
      <div className="e-con-inner">
        <div className="text-center mb-12">
          <HeroBlock
            title="What We Stand For"
            description="ArnoldAI is a white-label AI platform that allows businesses to
            build, scale, and sell compliant AI solutions under their own brand."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              className="border bg-white p-6 rounded-xl space-y-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto my-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
