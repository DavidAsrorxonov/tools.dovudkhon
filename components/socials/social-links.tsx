import Link from "next/link";
import { socials } from "@/constants/socials";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <Link
            href={social.link}
            key={social.name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="w-5 h-5" />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
