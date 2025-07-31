import React from "react";
import Link from "next/link";

import { FilterCard } from "@/modules/dashboard/journal/components/FilterCard";
import { tradeDurations, tradeSides, tradeSymbolPairs, tradeTags } from "@/modules/dashboard/journal/constants";
import { Calendar, CandlestickChart, Funnel, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Filters = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 px-2 py-2 md:grid-cols-4 xl:px-4">
                <FilterCard
                    label="Symbol Pair"
                    values={tradeSymbolPairs}
                />
                <FilterCard
                    label="Tags"
                    values={tradeTags}
                />
                <FilterCard
                    label="Side"
                    values={tradeSides}
                />
                <FilterCard
                    label="Duration"
                    values={tradeDurations}
                />
            </div>
            <div className="grid grid-cols-2 gap-2 px-2 py-2 md:grid-cols-4 md:gap-4 xl:px-4">
                <Button
                    variant="outline"
                    disabled
                >
                    <div className="flex w-full items-center gap-1 md:gap-2">
                        <Calendar />
                        <span className="text-xs md:text-sm">Timeframe</span>
                    </div>
                </Button>
                <Button
                    variant="outline"
                    disabled
                >
                    <div className="flex w-full items-center gap-1 md:gap-2">
                        <Funnel />
                        <span className="text-xs md:text-sm">Advance Search</span>
                    </div>
                </Button>
                <Button
                    variant="outline"
                    disabled
                >
                    <div className="flex w-full items-center gap-1 md:gap-2">
                        <Trash />
                        <span className="text-xs md:text-sm">Clear</span>
                    </div>
                </Button>
                <Link
                    href="/dashboard/add-trades"
                    passHref
                    className="w-full"
                >
                    <Button
                        variant="outline"
                        className="w-full"
                    >
                        <div className="flex w-full items-center gap-1 md:gap-2">
                            <CandlestickChart />
                            <span className="text-xs md:text-sm">Add Trade</span>
                        </div>
                    </Button>
                </Link>
            </div>
        </div>
    );
};
