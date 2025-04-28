"use client";

import ScheduleDemo from "./ScheduleDemo";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <div className="container">
      <div className="e-con-inner !py-20 md:!py-28">
        <motion.section
          id="cta"
          className="py-20 md:py-28 bg-purple-900 rounded-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: [0.25, 0.8, 0.25, 1],
          }}
        >
          <div className="mx-auto px-10 text-center flex flex-col items-center">
            <h2 className="font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl text-center leading-[1.2] text-white">
              Our bootstrapped MVP is already delivering real results
            </h2>
            <p className="sm:text-lg mt-4 md:w-3/5 text-center text-white">
              Join us as an early adopter, strategic partner or investor in our
              journey to revolutionize highly-regulated industries with the
              ultimate compliant AI Platform builder.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <ScheduleDemo variant="outline" />
              <ScheduleDemo buttonText="Contact Sales" variant="secondary" />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
