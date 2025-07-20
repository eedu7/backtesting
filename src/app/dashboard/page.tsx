import React from "react";
import { Metadata } from "next";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Dashboard | Backtest Pro",
    description: "Analyze your trading strategies with real historical data.",
};

export default function DashboardPage() {
    return (
        <div className="grid w-full grid-cols-4 gap-4 border">
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
        </div>
    );
}

const DashboardCard = () => {
    return (
        <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
        </Card>
    );
};
