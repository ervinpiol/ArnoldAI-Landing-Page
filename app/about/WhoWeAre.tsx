import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Zap } from "lucide-react";

export default function WhoWeAre() {
  return (
    <div className="container">
      <div className="e-con-inner">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
            Who We Are
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            A White-Label AI Platform for Compliant Solutions
          </h2>
          <p className="text-gray-600">
            ArnoldAI is a white-label AI platform that allows businesses to
            build, scale, and sell compliant AI solutions under their own brand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                No-Code AI Assistant Builder
              </h3>
              <p className="text-gray-600">
                Deploy AI-powered solutions without development overhead.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Built-in EU AI Act & ISO Compliance
              </h3>
              <p className="text-gray-600">
                AI governance, security, and regulatory alignment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                White-Label & Monetization Features
              </h3>
              <p className="text-gray-600">
                Enable B2B businesses to offer AI-driven services to their own
                customers.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-gray-600">
            Our team has deep experience in AI, regulatory compliance, and
            enterprise software, helping businesses in defense, legal,
            healthcare, finance, and media navigate the complexities of AI
            adoption without regulatory delays.
          </p>
        </div>
      </div>
    </div>
  );
}
