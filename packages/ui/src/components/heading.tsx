import * as React from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { NonNullable } from '@/types';
import { cn } from '@/lib/utils';

const headingVariants = cva('scroll-m-20 tracking-tight', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold lg:text-5xl',
      h2: 'text-3xl font-semibold',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-semibold',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

const defaultVariant = 'h1';

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant = defaultVariant, asChild = false, ...props }, ref) => {
    type headingVariant = NonNullable<typeof variant>;
    const baseVariant: headingVariant = variant || defaultVariant;
    const Comp = asChild ? Slot : baseVariant;

    return (
      <Comp
        className={cn(headingVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Heading.displayName = 'Heading';
