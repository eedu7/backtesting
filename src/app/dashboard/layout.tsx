import React from "react";

import { DashboardSidebar } from "@/modules/dashboard/components/DashboardSidebar";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <main>{children}</main>
        </SidebarProvider>
    );
}
