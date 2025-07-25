import React from "react";
import { Metadata } from "next";

import { CardSkeleton } from "@/modules/dashboard/layout/components/CardSkeleton";
import { WinRatioBarChart } from "@/modules/dashboard/layout/components/WinRatioBarChart";
import { WinRatioLineChart } from "@/modules/dashboard/layout/components/WinRatioLineChart";
import { WinRatioPieChart } from "@/modules/dashboard/layout/components/WinRatioPieChart";

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
