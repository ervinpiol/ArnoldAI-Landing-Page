"use client";

import Link from "next/link";
import VanguardLogo from "../../../public/vanguard.webp";
import Image from "next/image";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";
import { motion } from "motion/react";

export default function Vanguard() {
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
                  VanguardAI by Normark Defence
                </h2>
                <p className="text-muted-foreground">
                  Built with ArnoldAI | Industry:{" "}
                  <strong className="text-black">Defence & Compliance</strong>
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We are building the defence capabilities of tomorrow in
                  partnership with Normark Defence, leveraging advanced AI and
                  LLM technologies to address critical regulatory and compliance
                  challenges.
                </p>
                <p>
                  VanguardAI is designed to help defence organizations navigate
                  complex regulatory landscapes, to key features include
                  automated compliance evaluation, enhanced regulatory guidance,
                  and documentation management. Our solution streamlines
                  compliance processes and reduces administrative burden.
                </p>
                <p>
                  Built on the ArnoldAI platform, VanguardAI streamlines
                  compliance workflows for government and consultancy alike.
                </p>
                <p>
                  Through collaboration with Normark Defence, we are expanding
                  VanguardAI&apos;s impact with two key solutions:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    GDPR and contract review AI for managing project control
                    agreements
                  </li>
                  <li>
                    Automated regulatory scanning for defence procurement and
                    export control compliance
                  </li>
                </ul>
                <p>
                  Together, we&apos;re driving innovation and efficiency in
                  defence compliance and market intelligence.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="https://normarkdefence.com/companies/vanguardai/"
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
                src={VanguardLogo}
                alt="Vanguard Logo"
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
