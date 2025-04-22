import Image from "next/image";
import TabImage from "../../public/tab-image.avif";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Solutions() {
  return (
    <div className="container">
      <div className="e-con-inner">
        <section id="solutions" className="pb-20 md:pb-2">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-semibold tracking-tight text-2xl sm:text-3xl md:text-5xl">
              ArnoldAI is the Shopify for AI Assistants
            </h2>
            <p className="mt-4 text-muted-foreground">
              A fully ISO compliant, white-label AI platform for consulting
              firms, legal & compliance advisors, and startups within highly
              regulated industries
            </p>
          </div>

          <Tabs
            defaultValue="1"
            className="w-full flex md:flex-row gap-10 pt-16"
          >
            <TabsList className="md:w-1/2 h-full flex-col !gap-2 md:!gap-4 bg-transparent p-0">
              <TabsTrigger
                value="1"
                className="w-full whitespace-normal data-[state=active]:bg-muted data-[state=active]:border data-[state=active]:border-purple-400 data-[state=active]:shadow-sm rounded-lg p-6 transition hover:bg-muted hover:border-purple-400 hover:shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-purple-100 text-purple-900 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold text-start">
                      Sell AI-powered solutions
                    </h3>
                    <p className="mt-2 text-muted-foreground w-full text-start">
                      Offer AI solutions to your clients without writing a
                      single line of code. White-label our platform under your
                      brand.
                    </p>
                  </div>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="2"
                className="w-full whitespace-normal data-[state=active]:bg-muted data-[state=active]:border data-[state=active]:border-purple-400 data-[state=active]:shadow-sm rounded-lg p-6 transition hover:bg-muted hover:border-purple-400 hover:shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-purple-100 text-purple-900 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold text-start">
                      100% EU AI Act & GDPR Compliant
                    </h3>
                    <p className="mt-2 text-muted-foreground w-full text-start">
                      Every AI Assistant is pre-classified as low-risk or
                      high-risk and pre-certified for CE marking—ready for final
                      approval.
                    </p>
                  </div>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="3"
                className="w-full whitespace-normal data-[state=active]:bg-muted data-[state=active]:border data-[state=active]:border-purple-400 data-[state=active]:shadow-sm rounded-lg p-6 transition hover:bg-muted hover:border-purple-400 hover:shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-purple-100 text-purple-900 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold text-start">
                      Your AI. Your Pricing. Your Business.
                    </h3>
                    <p className="mt-2 text-muted-foreground w-full text-start">
                      Set custom pricing tiers and create recurring revenue
                      streams while ArnoldAI handles compliance &
                      infrastructure.
                    </p>
                  </div>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="4"
                className="w-full whitespace-normal data-[state=active]:bg-muted data-[state=active]:border data-[state=active]:border-purple-400 data-[state=active]:shadow-sm rounded-lg p-6 transition hover:bg-muted hover:border-purple-400 hover:shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-purple-100 text-purple-900 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold text-start">
                      From idea to market in days
                    </h3>
                    <p className="mt-2 text-muted-foreground w-full text-start">
                      While others spend 12-24 months on development, legal
                      reviews, and CE marking, you can launch in weeks.
                    </p>
                  </div>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="1">
              <div className="w-full h-full overflow-hidden bg-gray-200 p-2 rounded-[22px]">
                <Image
                  src={TabImage}
                  alt="Arnold AI Logo"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </TabsContent>

            <TabsContent value="2">
              <div className="w-full h-full overflow-hidden bg-gray-200 p-2 rounded-[22px]">
                <Image
                  src={TabImage}
                  alt="Arnold AI Logo"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </TabsContent>

            <TabsContent value="3">
              <div className="w-full h-full overflow-hidden bg-gray-200 p-2 rounded-[22px]">
                <Image
                  src={TabImage}
                  alt="Arnold AI Logo"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </TabsContent>

            <TabsContent value="4">
              <div className="w-full h-full overflow-hidden bg-gray-200 p-2 rounded-[22px]">
                <Image
                  src={TabImage}
                  alt="Arnold AI Logo"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
