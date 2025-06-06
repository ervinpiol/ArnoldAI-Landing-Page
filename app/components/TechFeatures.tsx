"use client";

import { Check } from "lucide-react";
import { HeroBlock } from "./HeroBlock";
import { motion } from "motion/react";

export default function TechFeatures() {
  return (
    <div className="container">
      <div className="e-con-inner !pt-0">
        <section id="tech-features" className="py-20 md:py-28">
          <HeroBlock
            title="Technical Features That Set ArnoldAI Apart"
            description="Built with enterprise-grade security, compliance, and scalability
              in mind, ArnoldAI redefines what’s possible with AI-powered
              systems."
          />
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <motion.div
              className="border bg-white p-6 rounded-xl space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <h3 className="text-lg font-medium mb-2">
                Compliance by Design – Patentable AI Digital Twin Assistants
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                ArnoldAI&apos;s proprietary AI Digital Twin technology enables
                the creation of ISO 42001 & EU AI Act-compliant AI Assistants
                that integrate seamlessly with regulated environments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      Automated Compliance Workflows
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Pre-configured to meet regulatory standards
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      CE Marking & Risk Classification Engine
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Certification-ready systems
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      Advanced Security & AI Firewall
                    </p>
                    <p className="text-sm text-muted-foreground">
                      LLM Security with Chain of Thought monitoring
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="border bg-white p-6 rounded-xl space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <h3 className="text-lg font-medium mb-2">
                Seamless White-Label Integration for B2B2B Scaling
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                ArnoldAI allows consulting firms, startups, and venture builders
                to offer AI-powered solutions under their own brand, unlocking
                new revenue streams.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      No-Code AI Digital Twin Builder
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Configure without programming skills
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      API & SDK for Custom Integration
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Connect to existing enterprise systems
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      Multi-Workspace & Role-Based Access
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Secure deployment across multiple clients
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="border bg-white p-6 rounded-xl space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.6,
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <h3 className="text-lg font-medium mb-2">
                Security-First AI Deployment
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Enterprise-grade security and compliance built into every aspect
                of the platform, ensuring your AI solutions meet the highest
                standards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      ISO 27001 Certified Hosting
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Data secured in Germany under strict frameworks
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      Real-Time Compliance Monitoring
                    </p>
                    <p className="text-sm text-muted-foreground">
                      AI-driven risk alerts and anomaly detection
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      Data Privacy & Governance
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Fully aligned with global protection standards
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
