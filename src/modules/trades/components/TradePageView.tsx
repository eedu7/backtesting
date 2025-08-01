import React from "react";
import { Merriweather } from "next/font/google";

import { AvgWinNLossTrades } from "@/modules/trades/components/AvgWinNLossTrades";
import { NETPNLCard } from "@/modules/trades/components/NETPNLCard";
import { ProfitFactorCard } from "@/modules/trades/components/ProfitFactorCard";
import { TradeColumns } from "@/modules/trades/components/tradeTable/TradeColumns";
import { TradeDataTable } from "@/modules/trades/components/tradeTable/TradeDataTable";
import { TradeWinPercentageCard } from "@/modules/trades/components/TradeWinPercentageCard";
import { getTradeData } from "@/modules/trades/trades.constants";

import { cn } from "@/lib/utils";

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-merriweather",
});
// TODO: Make it mobile friendly
export const TradePageView = async () => {
    const data = await getTradeData();

    return (
        <div className="space-y-4 p-2 xl:p-4">
            <h1 className={cn("text-bold px-2 py-2 text-xl xl:px-4", merriweather.className)}>Trade Logs</h1>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                <NETPNLCard />
                <ProfitFactorCard />
                <TradeWinPercentageCard />
                <AvgWinNLossTrades />
            </div>
            <TradeDataTable
                columns={TradeColumns}
                data={data}
            />
        </div>
    );
};
