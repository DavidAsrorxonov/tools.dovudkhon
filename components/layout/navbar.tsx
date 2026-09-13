"use client";

import { useMobile } from "@/hooks/useMobile";
import Link from "next/link";
import MobileNavbar from "../mobile/mobile-navbar";
import SocialLinks from "../socials/social-links";
import { ModeToggle } from "../theme/mode-toggle";
import { Separator } from "../ui/separator";

const Navbar = () => {
  const isMobile = useMobile();

  return (
    <>
      <div className="w-full p-4">
        {isMobile ? (
          <MobileNavbar />
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
