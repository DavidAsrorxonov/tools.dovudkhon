import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type ToolScreenshotsCarouselProps = {
  toolName: string;
  screenshots?: readonly string[];
};

const ToolScreenshotsCarousel = ({
  toolName,
  screenshots,
}: ToolScreenshotsCarouselProps) => {
  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-normal">Screenshots</h2>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {screenshots.map((screenshot, index) => (
            <CarouselItem key={screenshot} className="basis-full">
              <div className="relative aspect-16/10 overflow-hidden rounded-lg border bg-muted">
                <Image
                  src={screenshot}
                  alt={`${toolName} screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 64rem"
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:-left-10" />
        <CarouselNext className="right-2 sm:-right-10" />
      </Carousel>
    </section>
  );
};

export default ToolScreenshotsCarousel;
