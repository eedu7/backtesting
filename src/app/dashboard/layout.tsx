import React from "react";

import { DashboardSidebar } from "@/modules/dashboard/layout/components/DashboardSidebar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <div className="flex min-h-screen w-full flex-col">
                <SidebarTrigger />
                <main className="h-full w-full flex-1 p-2">{children}</main>
            </div>
        </SidebarProvider>
    );
}
