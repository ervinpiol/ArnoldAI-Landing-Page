import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";

export default function RiskClassificationTool() {
  return (
    <div>
      <div className="container">
        <div className="e-con-inner">
          <section className="relative flex items-center justify-center">
            <div className="flex flex-col items-center md:w-3/4 lg:w-3/5 gap-4 text-center">
              <h1 className="font-semibold text-4xl sm:text-[40px] xl:text-[56px] leading-[1.2]">
                AI Assistant Risk Classification Tool
              </h1>
              <p className="sm:text-lg text-muted-foreground">
                Find Out Your AI System's Risk Level Under the EU AI Act
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="container">
        <div className="e-con-inner !pt-20 md:!pt-28">
          <p className="mb-8 w-3/5 text-muted-foreground">
            Answer the following questions to determine whether your AI
            Assistant is classified as{" "}
            <strong className="text-black">
              Unacceptable Risk, High Risk, Limited Risk, or Minimal Risk
            </strong>{" "}
            according to the <strong className="text-black">EU AI Act</strong>.
          </p>

          <Card className="mx-auto">
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">
                  Step 1: Identify Prohibited AI Uses (Unacceptable Risk)
                </h2>
                <p className="font-medium">
                  Does your AI system involve any of the following applications?
                </p>

                <div className="space-y-2 ml-1">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="social-scoring" />
                    <label
                      htmlFor="social-scoring"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-0.5"
                    >
                      Social scoring by governments leading to discrimination
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="biometric" />
                    <label
                      htmlFor="biometric"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-0.5"
                    >
                      Real-time biometric identification in public spaces
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="manipulation" />
                    <label
                      htmlFor="manipulation"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-0.5"
                    >
                      Manipulation of human behavior against users' free will
                    </label>
                  </div>
                </div>

                <Alert className="bg-green-50 text-green-800 border-green-200">
                  <AlertDescription className="flex items-start gap-2">
                    <span>
                      ✓ If you selected any of these, your AI system is
                      classified as{" "}
                      <span className="font-bold">Unacceptable Risk</span> and
                      is prohibited under the EU AI Act.
                    </span>
                  </AlertDescription>
                </Alert>

                <Alert className="bg-green-50 text-green-800 border-green-200">
                  <AlertDescription className="flex items-start gap-2">
                    <span>✓ If none apply, continue to Step 2.</span>
                  </AlertDescription>
                </Alert>
              </div>

              <Separator />

              <div className="space-y-4">
                <h2 className="text-lg font-semibold">
                  Step 2: Does Your AI Fall Under High-Risk Categories?
                </h2>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="font-medium">
                      A. Is your AI used as a safety component of a product
                      regulated under existing EU legislation?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      (Examples: AI in medical devices, automotive safety,
                      aviation systems).
                    </p>

                    <div className="space-y-2 ml-1 mt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="safety-yes" />
                        <label
                          htmlFor="safety-yes"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Yes
                        </label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="safety-no" />
                        <label
                          htmlFor="safety-no"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium">
                      B. Could the failure or malfunction of your AI endanger
                      health, safety, or fundamental rights?
                    </p>

                    <div className="space-y-2 ml-1 mt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="endanger-yes" />
                        <label
                          htmlFor="endanger-yes"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Yes
                        </label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="endanger-no" />
                        <label
                          htmlFor="endanger-no"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium">
                      C. Is your AI system used for any of the following?
                    </p>

                    <div className="space-y-2 ml-1 mt-2">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="credit-scoring" />
                        <label
                          htmlFor="credit-scoring"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-0.5"
                        >
                          Credit scoring & financial evaluations
                        </label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="recruitment" />
                        <label
                          htmlFor="recruitment"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-0.5"
                        >
                          Recruitment, job hiring, or termination decisions
                        </label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="education" />
                        <label
                          htmlFor="education"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-0.5"
                        >
                          Education and vocational training access
                        </label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="law-enforcement" />
                        <label
                          htmlFor="law-enforcement"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-0.5"
                        >
                          Law enforcement (e.g., criminal risk profiling)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <FAQ />
      <CTA />
    </div>
  );
}
