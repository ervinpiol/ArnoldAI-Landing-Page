import FAQ from "@/app/components/FAQ";
import HappytatLogo from "../../../public/happytat.png";
import Image from "next/image";
import CTA from "@/app/components/CTA";

export default function Happytat() {
  return (
    <div>
      <div className="container">
        <div className="e-con-inner pb-40 md:pb-48">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="font-semibold tracking-tight text-2xl sm:text-3xl md:text-5xl">
                  Happytat
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Built with ArnoldAI I Industry:{" "}
                  <strong className="text-black">Media</strong>
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Happytat is an AI-powered storytelling and content development
                  platform designed for the film, media, and gaming industries.
                  By leveraging ArnoldAI’s REELM (Regulatory Enhanced Language
                  Model) technology, Happytat is pioneering AI-driven creative
                  tools that enhance storytelling, user engagement, and
                  regenerative leadership in creative workflows.
                </p>
                <p>
                  Currently under development, Happytat integrates AI with human
                  creativity to create hyper-personalized, emotionally resonant
                  content while ensuring ethical and humane AI usage.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={HappytatLogo}
                alt="Happytat Logo"
                width={250}
                height={250}
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
