'use client';

import {
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
      <NavigationMenuList className="space-x-7">
        {NavigationLinks.map(({ id, path: href, label }) => (
          <NavLink key={id} href={href} active={pathname == href}>
            {label}
          </NavLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
