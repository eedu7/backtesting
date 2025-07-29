import React from "react";
import Link from "next/link";

import { MainSidebarItems } from "@/modules/dashboard/journal/components/MainSidebarItems";
import { SidebarSignOutButton } from "@/modules/dashboard/journal/components/SidebarSignOutButton";
import { ManageSettings } from "@/modules/dashboard/layout/components/ManageSettings";
import { sidebarFooterItems, sidebarItems } from "@/modules/dashboard/layout/constants";
import { ChevronDown, Lock, Plus, Settings } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
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
                <ManageSettings />
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
