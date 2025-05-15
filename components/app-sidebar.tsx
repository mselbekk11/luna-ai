import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { LogoThree } from "./logo-three";
import Link from "next/link";
import { Home, Package } from "lucide-react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: <Home className="mr-1 h-4 w-4" />,
    },
    {
      title: "Products",
      url: "#",
      icon: <Package className="mr-1 h-4 w-4" />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-12 border-b p-0">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/home" className="hover:bg-transparent">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <LogoThree />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-bold text-1xl font-heading">
                    Luna AI
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium flex items-center">
                    {item.icon}
                    {item.title}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        {/* <UserButton /> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
