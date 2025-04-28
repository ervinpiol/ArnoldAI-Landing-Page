"use client";

import FAQ from "@/app/components/FAQ";
import HappytatLogo from "../../../public/happytat.png";
import Image from "next/image";
import CTA from "@/app/components/CTA";
import { motion } from "motion/react";

export default function Happytat() {
  return (
    <div>
      <div className="container">
        <div className="e-con-inner pb-40 md:pb-48">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <div className="space-y-2 pb-3">
                <h2 className="font-semibold tracking-tight text-xl sm:text-2xl md:text-4xl">
                  Happytat
                </h2>
                <p className="text-muted-foreground">
                  Built with ArnoldAI I Industry:{" "}
                  <strong className="text-black">Media</strong>
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Happytat is an AI-powered storytelling and content development
                  platform designed for the film, media, and gaming industries.
                  By leveraging ArnoldAI’s REELM (Regulatory Enhanced Language
                  Model) technology, Happytat is pioneering AI-driven creative
                  tools that enhance storytelling, user engagement, and
                  regenerative leadership in creative workflows.
                </p>
                <p>
                  Currently under development, Happytat integrates AI with human
                  creativity to create hyper-personalized, emotionally resonant
                  content while ensuring ethical and humane AI usage.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <Image
                src={HappytatLogo}
                alt="Happytat Logo"
                width={250}
                height={250}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      <FAQ />
      <CTA />
    </div>
  );
}
