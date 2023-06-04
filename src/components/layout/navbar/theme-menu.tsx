'use client';

import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';

import { Moon, Sun, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { atomWithStorage } from 'jotai/utils';
import { colorScheme } from '@/types';
import { useAtom } from 'jotai';

const themeAtom = atomWithStorage<colorScheme>('theme', colorScheme.light);

export const ThemeDropdownMenu = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  const systemTheme = prefersDarkMode ? colorScheme.dark : colorScheme.light;

  if (theme === 'dark' || (!('theme' in localStorage) && prefersDarkMode)) {
    document.documentElement.classList.add('dark');
  } else document.documentElement.classList.remove('dark');

  const Icon = theme === colorScheme.dark ? Moon : Sun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-10 p-0">
          <Icon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme(colorScheme.light)}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(colorScheme.dark)}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(systemTheme)}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
