"use client";

import React from "react";

import { Plus } from "lucide-react";

import { SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar";

export const AddSymbolPairDialog = () => {
    return (
        <SidebarMenuSubItem>
            <SidebarMenuSubButton>
                <Plus />
                Add Symbol Pair
            </SidebarMenuSubButton>
        </SidebarMenuSubItem>
    );
};
