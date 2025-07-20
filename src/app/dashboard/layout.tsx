import React from "react";

import { DashboardSidebar } from "@/modules/dashboard/components/DashboardSidebar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <div className="flex flex-col min-h-screen">
                <SidebarTrigger />
                <main className="flex-1 mx-8 my-4">{children}</main>
            </div>
        </SidebarProvider>
    );
}
