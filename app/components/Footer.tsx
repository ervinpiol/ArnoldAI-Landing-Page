import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container">
      <div className="e-con-inner !pt-20 md:!pt-28">
        <div className="flex flex-col md:flex-row w-full justify-between gap-16 !pb-12 md:!pb-16">
          <div>
            <Link href="/">
              <Image
                src="/logo-brand.webp"
                alt="NVIDIA Inception Program"
                width={120}
                height={40}
                className="w-auto object-contain"
              />
            </Link>

            <div className="space-y-1.5 pt-5">
              <p className="text-sm text-muted-foreground">
                Gerasdorfer Straße 61/4/2
                <br />
                1210 Vienna, Austria
              </p>
              <p className="text-sm text-muted-foreground">
                VAT-ID: ATU78302114
              </p>

              <a
                href="mailto:info@arnoldai.io"
                className="text-sm text-muted-foreground"
              >
                info@arnoldai.io
              </a>

              <p className="text-sm text-muted-foreground"></p>
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/company/arnold-ai/"
                  className="text-muted-foreground hover:text-purple-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-sm">Use Cases</h3>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/use-cases/vanguard-ai"
                  className="text-sm text-muted-foreground hover:text-purple-700"
                >
                  VanguardAI
                </Link>
                <Link
                  href="/use-cases/patentopia"
                  className="text-sm text-muted-foreground hover:text-purple-700"
                >
                  Patentopia
                </Link>
                <Link
                  href="/use-cases/happytat"
                  className="text-sm text-muted-foreground hover:text-purple-700"
                >
                  Happytat
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t py-8 flex justify-between">
          <p className="text-sm text-muted-foreground">
            © 2025 ArnoldAI All rights reserved.
          </p>

          <ul className="flex gap-10">
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-purple-700"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="text-sm text-muted-foreground hover:text-purple-700"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
