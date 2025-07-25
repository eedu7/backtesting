import React from "react";
import Link from "next/link";

import { MainSidebarItems } from "@/modules/dashboard/journal/components/MainSidebarItems";
import { SidebarSignOutButton } from "@/modules/dashboard/journal/components/SidebarSignOutButton";
import { sidebarFooterItems, sidebarItems } from "@/modules/dashboard/layout/constants";
import { Lock } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";

export const DashboardSidebar = () => {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarTrigger />
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <MainSidebarItems />
            </SidebarContent>
            <SidebarFooter>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarFooterItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        title={item.title}
                                        className={cn(item.disable && "text-muted-foreground")}
                                    >
                                        <div>
                                            <item.icon />
                                            <span>{item.title}</span>
                                            {item.disable && <Lock />}
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Profile</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarSignOutButton />
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    );
};
