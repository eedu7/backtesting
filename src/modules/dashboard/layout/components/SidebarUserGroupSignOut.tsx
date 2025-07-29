"use client";

import React from "react";

import { useClerk } from "@clerk/nextjs";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export const SidebarUserGroupSignOut = () => {
    const { signOut } = useClerk();

    return (
        <DropdownMenuItem onClick={() => signOut()}>
            <span>Sign out</span>
        </DropdownMenuItem>
    );
};
