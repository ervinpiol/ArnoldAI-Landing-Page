"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Heart, DollarSign } from "lucide-react";
import Image from "next/image";
import TabImage from "../../public/tab-image.avif";
import { HeroBlock } from "./HeroBlock";

const tabsData = [
  {
    id: "ai-solutions",
    icon: <Heart className="h-5 w-5 text-purple-600" />,
    title: "Sell AI-powered solutions",
    description:
      "Offer AI solutions to your clients without writing a single line of code. White-label our platform under your brand.",
    image: TabImage,
  },
  {
    id: "compliance",
    icon: <Heart className="h-5 w-5 text-purple-600" />,
    title: "100% EU AI Act & GDPR Compliant",
    description:
      "Every AI Assistant is pre-classified as low-risk or high-risk and pre-certified for CE marking—ready for final approval.",
    image: TabImage,
  },
  {
    id: "pricing",
    icon: <Heart className="h-5 w-5 text-purple-600" />,
    title: "Your AI. Your Pricing. Your Business.",
    description:
      "Set custom pricing tiers and create recurring revenue streams while ArnoldAI handles compliance & infrastructure.",
    image: TabImage,
  },
  {
    id: "market",
    icon: <DollarSign className="h-5 w-5 text-purple-600" />,
    title: "From idea to market in days",
    description:
      "While others spend 12-24 months on development, legal reviews, and CE marking, you can launch in weeks.",
    image: TabImage,
  },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const activeTabData = tabsData.find((tab) => tab.id === activeTab);

  return (
    <div className="container">
      <div className="e-con-inner">
        <section id="solutions" className="pb-20 md:pb-2">
          <HeroBlock
            title="ArnoldAI is the Shopify for AI Assistants"
            description="A fully ISO compliant, white-label AI platform for consulting
              firms, legal & compliance advisors, and startups within highly
              regulated industries"
          />
          <div className="grid gap-10 flex-col lg:grid-cols-2 pt-16">
            <motion.div
              className="flex flex-col space-y-4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className={`rounded-2xl p-6 cursor-pointer transition-all duration-200 ease-in-out border
                ${
                  activeTab === tab.id
                    ? "bg-muted border-purple-400"
                    : "hover:bg-muted hover:border-purple-400 border-transparent"
                }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 bg-purple-100 rounded-full p-2">
                      {tab.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {tab.title}
                      </h3>
                      <p className="text-muted-foreground">{tab.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div
              className="w-full h-full bg-gray-200 p-2 rounded-[22px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              {activeTabData && (
                <Image
                  src={activeTabData.image}
                  alt={activeTabData.title}
                  className="object-cover w-full h-full rounded-xl"
                />
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
