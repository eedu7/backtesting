import React, { Suspense } from "react";
import { Metadata } from "next";

import { CardSkeleton } from "@/modules/dashboard/components/CardSkeleton";
import { WinRatioBarChart } from "@/modules/dashboard/components/WinRatioBarChart";
import { WinRatioLineChart } from "@/modules/dashboard/components/WinRatioLineChart";
import { WinRatioPieChart } from "@/modules/dashboard/components/WinRatioPieChart";

export const metadata: Metadata = {
    title: "Dashboard | Backtest Pro",
    description: "Analyze your trading strategies with real historical data.",
};

export default function DashboardPage() {
    return (
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
            <WinRatioPieChart />
            <WinRatioBarChart />
            <WinRatioLineChart />
            <CardSkeleton />
        </div>
    );
}
