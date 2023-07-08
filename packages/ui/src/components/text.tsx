"use client"

import * as React from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { NonNullable } from '@/types';
import { cn } from '@/lib/utils';

const textVariants = cva('', {
  variants: {
    variant: {
      p: 'leading-7',
      span: "leading-7 text-sm",
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
    },
    size: {
      small: 'text-sm font-medium leading-none',
      large: 'text-lg font-semibold',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

type TextElement = HTMLParagraphElement & HTMLSpanElement & HTMLQuoteElement;

export interface TextProps
  extends React.HTMLAttributes<TextElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const defaultVariant = 'p';

export const Text = React.forwardRef<TextElement, TextProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    type variantType = NonNullable<typeof variant>;
    const textVariant: variantType = variant || defaultVariant;
    const Comp = asChild ? Slot : textVariant;

    return (
      <Comp
        className={cn(textVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Text.displayName = 'text';
