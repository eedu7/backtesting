import React from "react";

import { RiSwap2Line } from "@remixicon/react";
import { ChevronDown, Plus } from "lucide-react";

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
                                <SidebarMenuSubButton href={"/dashboard/add-symbol-pair#add-symbol-pair"}>
                                    <RiSwap2Line /> Symbol Pair
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </SidebarGroupContent>
                </CollapsibleContent>
            </SidebarGroup>
        </Collapsible>
    );
};
