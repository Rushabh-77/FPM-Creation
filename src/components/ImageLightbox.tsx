import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type ImageLightboxProps = {
  images: string[];
  open: boolean;
  defaultIndex?: number;
  onOpenChange: (open: boolean) => void;
};

const ImageLightbox = ({ images, open, defaultIndex = 0, onOpenChange }: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);

  useEffect(() => {
    if (open) {
      setCurrentIndex(defaultIndex);
    }
  }, [defaultIndex, open]);

  if (!images.length) return null;

  const showPrevious = () => setCurrentIndex((value) => (value - 1 + images.length) % images.length);
  const showNext = () => setCurrentIndex((value) => (value + 1) % images.length);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        overlayClassName="bg-transparent"
        className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-0 sm:rounded-3xl"
      >
        <div className="relative h-[70vh] w-full sm:h-[80vh]">
          <img
            src={images[currentIndex]}
            alt={`Product image ${currentIndex + 1}`}
            className="h-full w-full object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={showPrevious}
                className={cn(
                  "absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white",
                )}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={showNext}
                className={cn(
                  "absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white",
                )}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full bg-white/50 transition",
                  index === currentIndex && "bg-white",
                )}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
