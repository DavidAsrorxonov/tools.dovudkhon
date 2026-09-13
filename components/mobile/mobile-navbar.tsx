"use client";

import { socials } from "@/constants/socials";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../theme/mode-toggle";
import { Button, buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

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

const MobileNavbar = () => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-lg font-bold">
        <Link href="/">dovudkhon.com | tools</Link>
      </div>

      <div className="ml-auto">
        <MobileMenu />
      </div>
    </div>
  );
};

export default MobileNavbar;
