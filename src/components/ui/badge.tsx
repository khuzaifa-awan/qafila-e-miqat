// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "./utils";

// const badgeVariants = cva(
//   "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
//   {
//     variants: {
//       variant: {
//         default:
//           "border-transparent bg-accent text-foreground [a&]:hover:bg-forground/90",
//         secondary:
//           "border-transparent bg-accent text-foreground [a&]:hover:bg-accent/90",
//         destructive:
//           "border-transparent bg-accent text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
//         outline:
//           "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//     },
//   },
// );

// function Badge({
//   className,
//   variant,
//   asChild = false,
//   ...props
// }: React.ComponentProps<"span"> &
//   VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
//   const Comp = asChild ? Slot : "span";

//   return (
//     <Comp
//       data-slot="badge"
//       className={cn(badgeVariants({ variant }), className)}
//       {...props}
//     />
//   );
// }

// export { Badge, badgeVariants };

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--accent)] text-[var(--foreground)] [a&]:hover:bg-[var(--foreground)]/10",
        secondary:
          "border-transparent bg-[var(--accent)] text-[var(--foreground)] [a&]:hover:bg-[var(--accent)]/80",
        destructive:
          "border-transparent bg-[var(--primary)] text-[var(--accent)] [a&]:hover:bg-[var(--primary)]/90 focus-visible:ring-[var(--primary)]/20 dark:focus-visible:ring-[var(--primary)]/40",
        outline:
          "border-[var(--accent)] bg-transparent text-[var(--foreground)] [a&]:hover:bg-[var(--accent)] [a&]:hover:text-[var(--foreground)]",
        accent:
          "border-transparent bg-[var(--primary)] text-[var(--accent)] [a&]:hover:bg-[var(--primary)]/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };