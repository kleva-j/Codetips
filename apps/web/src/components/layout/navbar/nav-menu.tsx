"use client";

import { NavigationMenuList, NavigationMenu } from "ui";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { NavLink } from "./nav-link";

export const NavMenu = () => {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) pathname = "/blog";
  if (pathname.includes("/projects/")) pathname = "/projects";
  if (pathname.includes("/snippet/")) pathname = "/snippet";

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-7">
        {siteConfig.navigation.map(({ href, label }) => (
          <NavLink key={label} href={href} active={pathname == href}>
            {label}
          </NavLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
