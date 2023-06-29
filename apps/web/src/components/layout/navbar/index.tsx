"use client";

import { NavMenu } from "./nav-menu";

import { Heading } from "ui";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between items-center bg-background z-10">
      <div className="flex gap-x-10 md:gap-x-20 h-16 items-center">
        <Heading variant="h4">Michael</Heading>
        <NavMenu />
      </div>
      <div>Hey!😍</div>
    </nav>
  );
};
