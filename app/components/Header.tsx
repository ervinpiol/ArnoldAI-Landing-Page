import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import ScheduleDemo from "./ScheduleDemo";

export default function Header() {
  return (
    <div className="container fixed left-0 top-3 !py-0 z-[49]">
      <div className="e-con-inner !py-0">
        <div className="flex justify-between items-center p-3 bg-[#fefefe]/90 border border-zinc-200 backdrop-opacity-10 rounded-lg">
          <Link href="/">
            <Image
              src="/logo-brand.webp"
              alt="Arnold AI Logo"
              priority
              width={120}
              height={36}
            />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Use Cases
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col min-w-[200px]">
                  <NavigationMenuLink asChild>
                    <Link href="/use-cases/vanguard-ai">VanguardAI</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/use-cases/patentopia">Patentopia</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/use-cases/happytat">Happytat</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col min-w-[265px]">
                  <NavigationMenuLink asChild>
                    <Link href="/resources/risk-classification-tool">
                      AI Assistant Risk Classification Tool
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="bg-transparent">
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ScheduleDemo />
          {/* <Button className="md:hidden">
            <Menu size={16} />
          </Button> */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
