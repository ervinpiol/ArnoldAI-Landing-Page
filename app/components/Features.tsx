import { Check } from "lucide-react";
import Image from "next/image";
import { HeroBlock } from "./HeroBlock";

export default function Features() {
  return (
    <div className="container">
      <div className="e-con-inner !pt-0">
        <section id="features" className="py-20 md:py-28">
          <HeroBlock
            title="Turn Compliance into a Business Opportunity"
            description="ArnoldAI is built for consulting firms, legal experts, and
              startups looking to sell AI-powered solutions to clients—without
              compliance complexity."
          />
          <div className="mt-16 grid grid-cols-2 gap-4">
            <div className="border bg-white p-6 rounded-xl space-y-6">
              <Image
                src="/tab-image.avif"
                alt="AI Assistant Builder Interface"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  Build AI Assistants in Minutes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">
                        No-code AI Assistant Builder
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Create powerful AI solutions without coding skills
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Connect LLMs</p>
                      <p className="text-sm text-muted-foreground">
                        ChatGPT, Azure OpenAI, in-house models
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">
                        Integrate structured & unstructured data sources
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Databases, SharePoint, Confluence, APIs, research
                        publications
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border bg-white p-6 rounded-xl space-y-6">
              <Image
                src="/tab-image.avif"
                alt="AI Assistant Builder Interface"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  Instant AI Act Compliance & Risk Classification
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">
                        Automated EU AI Act risk classification
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Low-risk or high-risk assessment
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">
                        Pre-certified compliance documentation
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Ready for CE marking approval
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">
                        Fully GDPR, HIPAA & ISO 27001-ready
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Meet all regulatory requirements
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border bg-white p-6 rounded-xl space-y-6">
              <Image
                src="/tab-image.avif"
                alt="AI Assistant Builder Interface"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  White-Label & Monetize AI Assistants
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">
                        Sell AI Assistants under your own brand
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Complete white-labeling capabilities
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">
                        Set custom pricing tiers
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Enterprise licenses and pay-per-use models
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">
                        Multi-client workspaces
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Secure, compliant data access for all clients
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border bg-white p-6 rounded-xl space-y-6">
              <Image
                src="/tab-image.avif"
                alt="AI Assistant Builder Interface"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  Deploy & Certify with Confidence
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">
                        ISO Compliant AI Assistant Builder
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Fully aligned with EU AI Act & ISO 42001
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Security Layers</p>
                      <p className="text-sm text-muted-foreground">
                        LLM Security Firewall & Threat Intelligence Layer
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">
                        Hosted in ISO 27001-certified environment
                      </p>
                      <p className="text-sm text-muted-foreground">
                        In Germany with strict compliance frameworks
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
