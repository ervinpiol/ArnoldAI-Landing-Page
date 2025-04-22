import Image from "next/image";
import Nvidia from "../../public/nvidia.png";
import AWS from "../../public/aws.png";
import Microsoft from "../../public/microsoft.webp";
import { HeroBlock } from "./HeroBlock";

export default function Partners() {
  return (
    <div className="container">
      <div className="e-con-inner !pt-0">
        <section id="partners" className="py-20 md:py-28">
          <HeroBlock
            title="Powered by Cutting Edge AI & Cloud Technology"
            description="Leverage our backing from major tech programs to access
              state-of-the-art AI and cloud technologies—plus insights from top
              industry experts at NVIDIA, AWS, and Microsoft."
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-12 md:gap-16">
            <Image
              src={Nvidia}
              alt="NVIDIA Inception Program"
              width={200}
              height={65}
              className="h-[65px] object-cover"
            />
            <Image
              src={AWS}
              alt="AWS Activate"
              width={200}
              height={65}
              className="h-[65px] object-contain"
            />
            <Image
              src={Microsoft}
              alt="Microsoft for Startups Founders Hub"
              width={200}
              height={65}
              className="h-[77px] object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
