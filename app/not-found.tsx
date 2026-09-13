import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Home, SearchX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-3xl space-y-8">
        <div className="mx-auto flex size-16 items-center justify-center rounded-lg border bg-secondary text-secondary-foreground">
          <SearchX className="size-7" strokeWidth={1.5} />
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium uppercase text-muted-foreground">
            404
          </p>
          <h1 className="text-4xl font-bold tracking-normal text-foreground sm:text-5xl lg:text-6xl">
            Page not found
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            The page you are looking for does not exist, moved, or is not ready
            to be published yet.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
          >
            <Home />
            Home
          </Link>
          <Link
            href="/p"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto",
            )}
          >
            See tools
            <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
