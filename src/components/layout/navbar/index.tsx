import { ThemeDropdownMenu } from './theme-menu';
import { NavMenu } from './nav-menu';

import { DeveloperAnimation } from '@/components/animation/developer';
import { Heading } from '@/components/ui/heading';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between items-center bg-background z-10">
      <div className="flex gap-x-10 md:gap-x-20 h-16 items-center">
        <div className="flex items-center space-x-1">
          <DeveloperAnimation />
          <Heading variant="h4">Michael</Heading>
        </div>
        <NavMenu />
      </div>
      <ThemeDropdownMenu />
    </nav>
  );
};
