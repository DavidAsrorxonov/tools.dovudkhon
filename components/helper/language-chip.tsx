import { languageColors } from "@/constants/linguist";
import { LanguageName } from "@/types/linguist";

type LanguageChipProps = {
  language: LanguageName;
};

export default function LanguageChip({ language }: LanguageChipProps) {
  const color = languageColors[language];

  return (
    <span
      key={language}
      className="flex items-center gap-1.5 rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
    >
      <span
        className="size-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      {language}
    </span>
  );
}
