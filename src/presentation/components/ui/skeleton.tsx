import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/presentation/lib/utils";

const skeletonVariants = cva("animate-pulse rounded-md bg-muted", {
  variants: {
    variant: {
      default: "bg-muted",
      card: "bg-muted/50",
      text: "bg-muted/30",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof skeletonVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(skeletonVariants({ variant }), className)}
    {...props}
  />
));
Skeleton.displayName = "Skeleton";

export { Skeleton };

