import Link from "next/link";
import PatentopiaLogo from "../../../public/patentopia.png";
import Image from "next/image";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";

export default function Patentopia() {
  return (
    <div>
      <div className="container">
        <div className="e-con-inner pb-40 md:pb-48">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="font-semibold tracking-tight text-2xl sm:text-3xl md:text-5xl">
                  Patentopia
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
            </div>
            <div className="flex justify-center">
              <Image
                src={PatentopiaLogo}
                alt="Patentopia Logo"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <FAQ />
      <CTA />
    </div>
  );
}
