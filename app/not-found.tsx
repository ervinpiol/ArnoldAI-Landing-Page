import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container">
      <div className="e-con-inner !p-0">
        <div className="flex flex-col items-center justify-center gap-4 h-screen">
          <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
            404
          </div>
          <div className="space-y-2">
            <h1 className="font-semibold text-4xl sm:text-[40px] xl:text-[56px] leading-[1.2]">
              Page not found
            </h1>
            <p className="sm:text-lg text-muted-foreground">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
          </div>

          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
