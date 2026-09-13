"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { socials } from "@/constants/socials";
import { useMobile } from "@/hooks/useMobile";
import { Button, buttonVariants } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import SocialLinks from "../socials/social-links";
import { ModeToggle } from "../theme/mode-toggle";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
      >
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-72">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation menu</SheetTitle>
          <SheetDescription>
            Links and theme controls for Dovudkhon Tools.
          </SheetDescription>
        </SheetHeader>

        <nav className="grid gap-2 p-4 pt-12">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.name}
                href={social.link}
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    className: "w-full justify-start",
                  }),
                )}
              >
                <Icon />
                {social.name}
              </Link>
            );
          })}
        </nav>

        <Separator />

        <div className="space-y-3 p-4">
          <p className="text-sm font-medium text-muted-foreground">Mode</p>
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Navbar = () => {
  const isMobile = useMobile();

  return (
    <>
      <div className="w-full p-4">
        {isMobile ? (
          <div className="relative flex items-center">
            <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-lg font-bold">
              <Link href="/">dovudkhon.com | tools</Link>
            </div>

            <div className="ml-auto">
              <MobileMenu />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-[1fr_auto_1fr] items-center">
            <div className="justify-self-start">
              <ModeToggle />
            </div>

            <div className="justify-self-center text-2xl font-bold">
              <Link href="/">dovudkhon.com | tools</Link>
            </div>

            <div className="justify-self-end">
              <SocialLinks />
            </div>
          </div>
        )}
      </div>
      <Separator />
    </>
  );
};

export default Navbar;
