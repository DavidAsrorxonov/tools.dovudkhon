import { GitHub } from "@/components/icons/github";
import { Gmail } from "@/components/icons/gmail";
import { NPM } from "@/components/icons/npm";
import { Telegram } from "@/components/icons/telegram";
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
  {
    name: "Telegram",
    link: "https://t.me/whoisdave02",
    icon: Telegram,
  },
  {
    name: "Gmail",
    link: "mailto:asrorxonovdovudxon@gmail.com",
    icon: Gmail,
  },
];
