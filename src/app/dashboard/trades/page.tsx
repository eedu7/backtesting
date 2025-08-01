import React from "react";
import { Metadata } from "next";

import { TradePageView } from "@/modules/trades/components/TradePageView";

export const metadata: Metadata = {
    title: "Trades - Backtest Pro",
    description: "Trades of Backtest Pro",
};

export default function TradesPage() {
    return <TradePageView />;
}
