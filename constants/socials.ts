import { GitHub } from "@/components/icons/github";
import { NPM } from "@/components/icons/npm";
import type { SVGProps } from "react";

interface Socials {
  name: string;
  link: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export const socials: Socials[] = [
  {
    name: "GitHub",
    link: "https://github.com/DavidAsrorxonov",
    icon: GitHub,
  },
  {
    name: "NPM",
    link: "https://www.npmjs.com/~david021106",
    icon: NPM,
  },
];
