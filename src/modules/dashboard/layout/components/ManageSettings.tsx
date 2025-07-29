import React from "react";
import Link from "next/link";

import { AddSymbolPairDialog } from "@/modules/dashboard/layout/components/AddSymbolPairDialog";
import { ChevronDown, Plus, Settings2 } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export const ManageSettings = () => {
    return (
        <Collapsible
            defaultOpen
            className="group/collapsible"
        >
            <SidebarGroup>
                <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                        Manage Settings
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                    <SidebarGroupContent>
                        <SidebarMenuSub>
                            <SidebarMenuSubItem>
                                <SidebarMenuSubButton href={"/dashboard/add-trades"}>
                                    <Plus />
                                    Add Trade
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                            <AddSymbolPairDialog />
                        </SidebarMenuSub>
                    </SidebarGroupContent>
                </CollapsibleContent>
            </SidebarGroup>
        </Collapsible>
    );
};
