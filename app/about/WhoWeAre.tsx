"use client";

import { motion } from "motion/react";
import { CheckCircle, Shield, Zap } from "lucide-react";

const whoWeAreCards = [
  {
    icon: Zap,
    title: "No-Code AI Assistant Builder",
    description: "Deploy AI-powered solutions without development overhead.",
  },
  {
    icon: Shield,
    title: "Built-in EU AI Act & ISO Compliance",
    description: "AI governance, security, and regulatory alignment.",
  },
  {
    icon: CheckCircle,
    title: "White-Label & Monetization Features",
    description:
      "Enable B2B businesses to offer AI-driven services to their own customers.",
  },
];

export default function WhoWeAre() {
  return (
    <div className="container">
      <div className="e-con-inner">
        <div className="text-center mb-12">
          <div className="mx-auto md:w-3/5 flex flex-col items-center">
            <motion.h2
              className="font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl text-center leading-[1.2]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 1.2,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              Who We Are
            </motion.h2>
            <motion.p
              className="sm:text-lg mt-4 text-muted-foreground md:w-4/5 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 1.4,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              ArnoldAI is a white-label AI platform that allows businesses to
              build, scale, and sell compliant AI solutions under their own
              brand.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whoWeAreCards.map((item, index) => (
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
                <item.icon className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12">
          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            Our team has deep experience in AI, regulatory compliance, and
            enterprise software, helping businesses in defense, legal,
            healthcare, finance, and media navigate the complexities of AI
            adoption without regulatory delays.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
