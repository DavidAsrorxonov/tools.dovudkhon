import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase text-muted-foreground">
            Hobby developer utilities
          </p>
          <h1 className="text-4xl font-bold tracking-normal text-foreground sm:text-5xl lg:text-6xl">
            Dovudkhon Tools
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A small collection of developer tools I build for experiments,
            workflow shortcuts, and useful everyday tasks.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/tools"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
          >
            See tools
            <ArrowRight />
          </Link>
          <Link
            href="https://dovudkhon.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto",
            )}
          >
            Main website
            <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
