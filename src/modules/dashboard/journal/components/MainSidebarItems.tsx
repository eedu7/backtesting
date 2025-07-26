"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarItems } from "@/modules/dashboard/layout/constants";
import { Lock } from "lucide-react";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";

export const MainSidebarItems = () => {
    const pathname = usePathname();

    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {sidebarItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                title={item.title}
                                variant={pathname === item.url ? "outline" : "default"}
                                className={cn(item.disable && "text-muted-foreground")}
                            >
                                <Link
                                    href={item.url}
                                    prefetch={false}
                                >
                                    <item.icon />
                                    <span>{item.title} </span>
                                    {item.disable && <Lock />}
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};
