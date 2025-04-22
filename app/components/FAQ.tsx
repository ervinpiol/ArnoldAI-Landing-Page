import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="container">
      <div className="e-con-inner !pt-0">
        <section id="faq" className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-semibold tracking-tight text-2xl sm:text-3xl md:text-5xl">
              FAQ
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything You Need to Know About ArnoldAI & Compliance
            </p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-purple-100">
                <AccordionTrigger className="font-semibold">
                  What is ArnoldAI?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm">
                  <p className="mb-4">
                    ArnoldAI is a{" "}
                    <strong>
                      no-code, fully compliant AI assistant builder
                    </strong>{" "}
                    for{" "}
                    <strong>
                      consulting firms, legal advisors, and startups
                    </strong>
                    . It allows you to{" "}
                    <strong>
                      create, customize, and sell AI-powered assistants
                    </strong>{" "}
                    while ensuring full{" "}
                    <strong>EU AI Act, GDPR, and ISO 27001</strong> compliance.
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Prepares AI Assistants for regulatory approval</li>
                    <li>
                      Pre-certifies high-risk AI Assistants for CE marking
                    </li>
                    <li>
                      Ensures compliance with the EU AI Act, including risk
                      classification and transparency obligations
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-purple-100">
                <AccordionTrigger className="font-semibold">
                  Who is ArnoldAI for?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm">
                  <p className="mb-4">ArnoldAI is built for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Consulting firms</strong> – Automate compliance,
                      legal, and advisory workflows
                    </li>
                    <li>
                      <strong>Startups</strong> – Launch AI-powered SaaS
                      products with built-in compliance
                    </li>
                    <li>
                      <strong>Legal & compliance experts</strong> – Offer
                      AI-powered solutions to clients
                    </li>
                    <li>
                      <strong>B2B businesses</strong> – Monetize AI assistants
                      with a scalable pricing model
                    </li>
                  </ul>
                  <p className="mt-4">
                    If you're looking to <strong>sell AI solutions</strong>{" "}
                    without regulatory headaches, ArnoldAI is for you.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-purple-100">
                <AccordionTrigger className="font-semibold">
                  What is the EU AI Act?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm">
                  <p className="mb-4">
                    The <strong className="font-semibold">EU AI Act</strong> is
                    the{" "}
                    <strong>world's first comprehensive AI regulation</strong>,
                    designed to ensure{" "}
                    <strong>
                      safe, transparent, and accountable AI systems
                    </strong>{" "}
                    within the European Union. It establishes{" "}
                    <strong>rules based on risk levels</strong> and imposes{" "}
                    <strong>compliance obligations</strong> on AI providers,
                    developers, and users.
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Risk-Based AI Classification:</strong> AI systems
                      are categorized as{" "}
                      <strong>low-risk, high-risk, or prohibited</strong> based
                      on their potential harm.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
}
