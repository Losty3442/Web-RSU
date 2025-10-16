import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/presentation/lib/utils";

const aspectRatioVariants = cva("overflow-hidden", {
  variants: {
    ratio: {
      square: "aspect-square",
      video: "aspect-video",
      portrait: "aspect-[3/4]",
      landscape: "aspect-[4/3]",
      wide: "aspect-[16/9]",
      ultrawide: "aspect-[21/9]",
    },
  },
  defaultVariants: {
    ratio: "square",
  },
});

const AspectRatio = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof aspectRatioVariants>
>(({ className, ratio, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(aspectRatioVariants({ ratio }), className)}
    {...props}
  />
));
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };

