import React, { FC, PropsWithChildren } from 'react';
import NextLink, { LinkProps } from 'next/link';

import {
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

interface NavLinkProps extends LinkProps, PropsWithChildren {
  isActive: boolean;
}

export const NavLink: FC<NavLinkProps> = ({ href, isActive, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <NavigationMenuLink
        className={navigationMenuTriggerStyle()}
        active={isActive}
        {...props}
      />
    </NextLink>
  );
};
