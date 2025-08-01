import React from "react";
import { Metadata } from "next";

import { TradePageView } from "@/modules/trades/components/TradePageView";
import { trpc } from "@/trpc/server";

export const metadata: Metadata = {
    title: "Trades - Backtest Pro",
    description: "Trades of Backtest Pro",
};

export default function TradesPage() {
    void trpc.trade.getMany.prefetch();
    return <TradePageView />;
}
