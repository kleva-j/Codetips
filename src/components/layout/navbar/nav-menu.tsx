'use client';

import {
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
} from '@/components/ui/navigation-menu';
import { NavigationLinks } from '@/lib/contants';
import { usePathname } from 'next/navigation';
import { NavLink } from './nav-link';

export const NavMenu = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NavigationLinks.map(({ id, path: href, label }) => (
          <NavLink key={id} href={href} isActive={pathname == href}>
            {label}
          </NavLink>
        ))}
        <NavigationMenuItem></NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
