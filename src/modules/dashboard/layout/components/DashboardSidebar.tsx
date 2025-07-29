import React from "react";

import { MainSidebarItems } from "@/modules/dashboard/journal/components/MainSidebarItems";
import { ManageSettings } from "@/modules/dashboard/layout/components/ManageSettings";
import { SidebarUserGroup } from "@/modules/dashboard/layout/components/SidebarUserGroup";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar";

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
                <SidebarUserGroup />
            </SidebarFooter>
        </Sidebar>
    );
};
