import Link from "next/link";
import VanguardLogo from "../../../public/vanguard.webp";
import Image from "next/image";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";

export default function Vanguard() {
  return (
    <div>
      <div className="container">
        <div className="e-con-inner pb-40 md:pb-48">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="font-semibold tracking-tight text-2xl sm:text-3xl md:text-5xl">
                  VanguardAI by Normark Defence
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                  VanguardAI's impact with two key solutions:
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
                  Together, we're driving innovation and efficiency in defence
                  compliance and market intelligence.
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
            </div>
            <div className="flex justify-center">
              <Image
                src={VanguardLogo}
                alt="Vanguard Logo"
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
