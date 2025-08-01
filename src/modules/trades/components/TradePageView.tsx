import React from "react";
import { Merriweather } from "next/font/google";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-merriweather",
});
// TODO: Design not made friendly for mobile users
export const TradePageView = () => {
    return (
        <div className="space-y-4 p-2 xl:p-4">
            <h1 className={cn("text-bold px-2 py-2 text-xl xl:px-4", merriweather.className)}>Trade Logs</h1>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                <NETPNLCard />
                <ProfitFactorCard />
                <TradeWinPercentageCard />
                <AvgWinNLossTrades />
            </div>
        </div>
    );
};

export const NETPNLCard = () => {
    // TODO: Add a line chart
    return (
        <Card>
            <CardHeader>
                <CardDescription>Net Accumulative P&L</CardDescription>
                <CardTitle className="text-xl">$2,386.88</CardTitle>
            </CardHeader>
        </Card>
    );
};

export const ProfitFactorCard = () => {
    // TODO: Add a donut chart
    return (
        <Card>
            <CardHeader>
                <CardDescription>Profit Factor</CardDescription>
                <CardTitle>1.61</CardTitle>
            </CardHeader>
        </Card>
    );
};

export const TradeWinPercentageCard = () => {
    // TODO: Add a Half Circle type of Chart
    return (
        <Card>
            <CardHeader>
                <CardDescription>Trade Win %</CardDescription>
                <CardTitle>33.33%</CardTitle>
            </CardHeader>
        </Card>
    );
};

export const AvgWinNLossTrades = () => {
    // TODO: Add a range chart
    return (
        <Card>
            <CardHeader>
                <CardDescription>Avg win/loss trade</CardDescription>
                <CardTitle>3.21</CardTitle>
            </CardHeader>
        </Card>
    );
};
