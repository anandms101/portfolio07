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

export default function NavBar() {
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

  return (
    <NavigationMenu className="shadow-md rounded-3xl mt-4 container flex justify-center">
      <NavigationMenuList>
        <NavigationMenuItem>
          {navBarContents.map((content, index) => (
            <Link key={index} href={content.link} legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>{content.title}</NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
