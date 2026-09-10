import Link from "next/link";
import { Separator } from "../ui/separator";
import SocialLinks from "../socials/social-links";
import { ModeToggle } from "../theme/mode-toggle";

const Navbar = () => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center p-4">
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
      <Separator />
    </>
  );
};

export default Navbar;
