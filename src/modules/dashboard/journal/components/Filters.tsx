import React from "react";

import { FilterCard } from "@/modules/dashboard/journal/components/FilterCard";
import { tradeDurations, tradeSides, tradeSymbolPairs, tradeTags } from "@/modules/dashboard/journal/constants";

import { Button } from "@/components/ui/button";

export const Filters = () => {
    return (
        <div className="flex items-center gap-4 p-2">
            <div className="flex items-center gap-4">
                <FilterCard
                    label="Symbol Pair"
                    placeholder="Select a symbol Pair"
                    values={tradeSymbolPairs}
                />
                <FilterCard
                    label="Tags"
                    placeholder="Select a tag"
                    values={tradeTags}
                />
                <FilterCard
                    label="Side"
                    placeholder="Select a side"
                    values={tradeSides}
                />
                <FilterCard
                    label="Duration"
                    placeholder="Select a duration"
                    values={tradeDurations}
                />
            </div>
            <div className="mt-[22px] flex items-center gap-4">
                {/* TODO: Made modal for these two */}
                <Button
                    variant="outline"
                    className="min-w-44 cursor-pointer"
                >
                    Apr 10 - May 8
                </Button>
                <Button
                    variant="outline"
                    className="min-w-44 cursor-pointer"
                >
                    Advance
                </Button>
                {/* TODO: Clear all the filters */}
                <Button
                    variant="outline"
                    className="min-w-44 cursor-pointer"
                >
                    Clear
                </Button>
            </div>
        </div>
    );
};
