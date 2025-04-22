"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Normark from "../../public/normark.png";
import Patentopia from "../../public/patentopia.png";
import HappyTat from "../../public/happytat.png";
import ScheduleDemo from "./ScheduleDemo";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="container">
      <div className="e-con-inner">
        <div className="flex flex-col items-center justify-center gap-10">
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
              The <span className="text-primary-500">Fastest</span> Path to
              Selling AI in Regulated Industries
            </motion.h1>
            <motion.p
              className="sm:text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              Build. Sell. Scale. Your AI Business Compliant from Day One.
            </motion.p>
          </div>

          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            <ScheduleDemo />
            <ScheduleDemo buttonText="Contact Sales" variant="secondary" />
          </motion.div>
        </div>

        <div className="flex items-center justify-center pt-20 w-full">
          <Tabs defaultValue="connect" className="w-full gap-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="flex items-center justify-center"
            >
              <TabsList className="mx-auto bg-transparent gap-8">
                <TabsTrigger value="connect">Connect</TabsTrigger>
                <TabsTrigger value="build">Build</TabsTrigger>
                <TabsTrigger value="interact">Interact</TabsTrigger>
              </TabsList>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <TabsContent value="connect">
                <div className="bg-gray-200 p-2 rounded-[20px]">
                  <div className="relative h-96 md:h-[750px] rounded-xl overflow-hidden">
                    <Image
                      src="/tab-image.avif"
                      alt="Arnold AI Logo"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="build">
                <div className="bg-gray-200 p-2 rounded-[20px]">
                  <div className="relative h-96 md:h-[750px] rounded-xl overflow-hidden">
                    <Image
                      src="/tab-image.avif"
                      alt="Arnold AI Logo"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="interact">
                <div className="bg-gray-200 p-2 rounded-[20px]">
                  <div className="relative h-96 md:h-[750px] rounded-xl overflow-hidden">
                    <Image
                      src="/tab-image.avif"
                      alt="Arnold AI Logo"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </motion.div>
          </Tabs>
        </div>

        <div className="flex flex-col gap-6 items-center pt-20">
          <motion.p
            className="md:text-xl font-medium text-muted-foreground text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            Trusted by Our Early Adopters in Defence, Legal, and Media.
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-10 w-full overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            <Image
              src={Normark}
              alt="Normark Logo"
              width={100}
              height={38}
              priority
            />
            <Image
              src={Patentopia}
              alt="Patentopia Logo"
              width={170}
              height={38}
              priority
            />
            <Image
              src={HappyTat}
              alt="HappyTat Logo"
              width={100}
              height={38}
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
