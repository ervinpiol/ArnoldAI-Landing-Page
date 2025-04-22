import { Button } from "@/components/ui/button";
import ScheduleDemo from "./ScheduleDemo";

export default function CTA() {
  return (
    <div className="container">
      <div className="e-con-inner !py-20 md:!py-28">
        <section id="cta" className="py-20 md:py-28 bg-purple-900 rounded-4xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white">
              Our bootstrapped MVP is already delivering real results
            </h2>
            <p className="mt-4 text-purple-100">
              Join us as an early adopter, strategic partner or investor in our
              journey to revolutionize highly-regulated industries with the
              ultimate compliant AI Platform builder.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <ScheduleDemo variant="outline" />
              <Button variant="secondary">Contact Us</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
