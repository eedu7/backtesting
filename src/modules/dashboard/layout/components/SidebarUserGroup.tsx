"use client";

import React from "react";

import { SidebarUserGroupSignOut } from "@/modules/dashboard/layout/components/SidebarUserGroupSignOut";
import { ChevronUp, User2 } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export const SidebarUserGroup = () => {
    return (
        <SidebarMenu className="w-full">
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton>
                            <User2 /> Username
                            <ChevronUp className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        side="top"
                        className="w-60"
                    >
                        <DropdownMenuItem>
                            <span>Account</span>
                        </DropdownMenuItem>
                        <SidebarUserGroupSignOut />
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
};
