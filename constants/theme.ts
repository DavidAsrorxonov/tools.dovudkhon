import { LucideIcon, Monitor, Moon, Sun } from "lucide-react";

interface ThemeProps {
  value: "light" | "dark" | "system";
  icon: LucideIcon;
}

export const themeProps: ThemeProps[] = [
  {
    value: "light",
    icon: Sun,
  },
  {
    value: "dark",
    icon: Moon,
  },
  {
    value: "system",
    icon: Monitor,
  },
];
