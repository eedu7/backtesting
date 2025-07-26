"use client";

import React from "react";

import { useClerk } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export const SidebarSignOutButton = () => {
    const { signOut } = useClerk();
    return (
        <SidebarMenuItem>
            <SidebarMenuButton onClick={() => signOut()}>
                <LogOut />
                Sign
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
};
