"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { ModeToggle } from "./mode-toggle";

import NavBarDrawer from "./navbar-drawer";

import { useMediaQuery } from "@/hooks/use-media-query";

export default function NavBar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // arrary of navbar contents
  const navBarContents = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About",
      link: "#",
    },
    {
      title: "Skills",
      link: "#",
    },
    {
      title: "Projects",
      link: "#",
    },
    {
      title: "Experience",
      link: "#",
    },
    {
      title: "Contact",
      link: "#",
    },
  ];

  if (isDesktop) {
    return (
      <>
        <div className="flex flex-row mt-4 container">
          <NavigationMenu className="shadow-md rounded-3xl  container flex justify-center">
            <NavigationMenuList>
              <NavigationMenuItem>
                {navBarContents.map((content, index) => (
                  <Link key={index} href={content.link} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()}`}
                    >
                      {content.title}
                    </NavigationMenuLink>
                  </Link>
                ))}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </>
    );
  } else {
    return (
      <>
        <NavBarDrawer navBarContents={navBarContents} />
      </>
    );
  }
}
