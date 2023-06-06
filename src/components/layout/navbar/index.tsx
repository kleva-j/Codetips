import { ThemeDropdownMenu } from './theme-menu';
import { NavMenu } from './nav-menu';

import { Heading } from '@/components/ui/heading';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between items-center bg-background z-10">
      <div className="flex gap-x-10 md:gap-x-16 h-16 items-center">
        <Heading variant="h4">Michael Obasi</Heading>
        <NavMenu />
      </div>
      <ThemeDropdownMenu />
    </nav>
  );
};
