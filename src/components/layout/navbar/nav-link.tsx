import React, { FC, PropsWithChildren } from 'react';
import NextLink, { LinkProps } from 'next/link';

import {
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface NavLinkProps extends LinkProps, PropsWithChildren {
  className?: string;
  active: boolean;
  disabled?: boolean;
  external?: boolean;
}

export const NavLink: FC<NavLinkProps> = (props) => {
  const { href, active, className, ...rest } = props;
  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle(),
          'border-b-2 border-transparent hover:bg-transparent rounded-none data-[active]:border-b-rose-500 data-[active]:bg-transparent px-0',
          className,
        )}
        active={active}
        {...rest}
      />
    </NextLink>
  );
};
