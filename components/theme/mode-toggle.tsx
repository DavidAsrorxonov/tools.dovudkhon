"use client";

import { themeProps } from "@/constants/theme";
import { useMounted } from "@/hooks/useMounted";
import { useTheme } from "next-themes";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const mounted = useMounted();
  if (!mounted) return <Skeleton className="h-8 w-8" />;

  return (
    <Card size="sm" className="w-fit [--card-spacing:--spacing(1)]">
      <CardContent className="flex items-center gap-1">
        {themeProps.map((t) => (
          <button
            key={t.value}
            type="button"
            aria-label={`Use ${t.value} theme`}
            aria-pressed={t.value === theme}
            onClick={() => setTheme(t.value)}
            className={`flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground ${
              t.value === theme ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <t.icon strokeWidth={1} className="size-5" />
          </button>
        ))}
      </CardContent>
    </Card>
  );
}
