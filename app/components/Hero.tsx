"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Normark from "../../public/normark.png";
import Patentopia from "../../public/patentopia.png";
import HappyTat from "../../public/happytat.png";
import ScheduleDemo from "./ScheduleDemo";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="container">
      <div className="e-con-inner">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center md:w-3/4 lg:w-3/5 gap-4 text-center">
            <h1 className="font-semibold text-4xl sm:text-[40px] xl:text-[56px] leading-[1.2]">
              The <span className="text-primary-500">Fastest</span> Path to
              Selling AI in Regulated Industries
            </h1>
            <p className="sm:text-lg text-muted-foreground">
              Build. Sell. Scale. Your AI Business Compliant from Day One.
            </p>
          </div>

          <div className="flex gap-2">
            <ScheduleDemo />
            <ScheduleDemo buttonText="Contact Sales" variant="secondary" />
          </div>
        </div>

        <div className="flex items-center justify-center pt-20 w-full">
          <Tabs defaultValue="connect" className="w-full gap-4">
            <TabsList className="mx-auto bg-transparent gap-8">
              <TabsTrigger value="connect">Connect</TabsTrigger>
              <TabsTrigger value="build">Build</TabsTrigger>
              <TabsTrigger value="interact">Interact</TabsTrigger>
            </TabsList>
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
          </Tabs>
        </div>

        <div className="flex flex-col gap-6 items-center pt-20">
          <p className="md:text-xl font-medium text-muted-foreground text-center">
            Trusted by Our Early Adopters in Defence, Legal, and Media.
          </p>
          <div className="flex items-center justify-center gap-10 w-full overflow-hidden">
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
          </div>
        </div>
      </div>
    </div>
  );
}
