"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScheduleDemo from "./ScheduleDemo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-1/2 -translate-x-1/2 top-3 z-[49] w-full container !py-0">
      <div className="flex justify-between items-center p-3 !py-3 bg-[#fefefe]/90 border border-zinc-200 backdrop-opacity-10 rounded-lg e-con-inner">
        <Link href="/">
          <Image
            src="/logo-brand.webp"
            alt="Arnold AI Logo"
            priority
            width={120}
            height={36}
          />
        </Link>

        {/* Desktop Navigation */}
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

        <div className="hidden md:flex">
          <ScheduleDemo />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu size={20} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="pt-14">
            <SheetHeader className="absolute top-4 left-3 p-0">
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="h-8 w-8"
              >
                <X size={18} />
                <span className="sr-only">Close menu</span>
              </Button> */}
              <SheetTitle>
                <Link href="/">
                  <Image
                    src="/logo-brand.webp"
                    alt="Arnold AI Logo"
                    priority
                    width={120}
                    height={36}
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 p-5">
              <Accordion type="single" collapsible className="w-full m-0">
                <AccordionItem value="use-cases" className="border-none">
                  <AccordionTrigger className="py-3">
                    Use Cases
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-3 pl-4">
                      <Link
                        href="/use-cases/vanguard-ai"
                        className="text-sm py-2"
                        onClick={() => setOpen(false)}
                      >
                        VanguardAI
                      </Link>
                      <Link
                        href="/use-cases/patentopia"
                        className="text-sm py-2"
                        onClick={() => setOpen(false)}
                      >
                        Patentopia
                      </Link>
                      <Link
                        href="/use-cases/happytat"
                        className="text-sm py-2"
                        onClick={() => setOpen(false)}
                      >
                        Happytat
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="resources" className="border-none">
                  <AccordionTrigger className="py-3">
                    Resources
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-3 pl-4">
                      <Link
                        href="/resources/risk-classification-tool"
                        className="text-sm py-2"
                        onClick={() => setOpen(false)}
                      >
                        AI Assistant Risk Classification Tool
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href="/about"
                className="py-3 m-0"
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>

              <div className="pt-2">
                <ScheduleDemo />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
