"use client";

import Link from "next/link";
import PatentopiaLogo from "../../../public/patentopia.png";
import Image from "next/image";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";
import { motion } from "motion/react";

export default function Patentopia() {
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
                  Patentopia
                </h2>
                <p className="text-muted-foreground">
                  Built with ArnoldAI I Industry:{" "}
                  <strong className="text-black">Legal</strong>
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Patentopia is an AI-powered platform designed to revolutionize
                  the patent novelty search process for patent offices, law
                  firms, and R&D departments. By leveraging advanced machine
                  learning and large language models, Patentopia offers fast,
                  cost-effective, and comprehensive searches to support the
                  patent application process.
                </p>
                <p>
                  Patentopia was partly built using ArnoldAI, specifically
                  utilizing ArnoldAI’s REELM (Regulatory Enhanced Language
                  Model) technology to ensure compliance-aligned AI reasoning
                  and decision-making in intellectual property assessments.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="https://www.patentopia.ai/"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Visit
                </Link>
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
                src={PatentopiaLogo}
                alt="Patentopia Logo"
                width={500}
                height={500}
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
