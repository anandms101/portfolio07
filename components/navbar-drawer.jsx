"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { PanelLeft, PanelLeftClose } from "lucide-react";

import { ModeToggle } from "./mode-toggle";

export default function NavBarDrawer(props) {
  return (
    <div className="ml-2 mt-2">
      <Drawer direction="left">
        <DrawerTrigger>
          {" "}
          <PanelLeft />{" "}
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col mt-4">
            {props.navBarContents.map((content, index) => (
              <span className="mx-4  my-2 flex pl-4" key={index}>
                {content.title}
              </span>
            ))}
          </div>
          <DrawerFooter className="flex flex-row justify-between">
            <ModeToggle />
            <DrawerClose>
              <PanelLeftClose />
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
