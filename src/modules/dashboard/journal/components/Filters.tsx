import React from "react";

import { FilterCard } from "@/modules/dashboard/journal/components/FilterCard";
import { SkeletonFilterCard } from "@/modules/dashboard/journal/components/SkeletonFilterCard";
import { coins } from "@/modules/dashboard/journal/constants";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const Filters = () => {
    return (
        <div className="flex items-center gap-4 p-2">
            <div className="flex items-center gap-4">
                <FilterCard
                    label="Symbol"
                    placeholder="Select a symbol"
                    values={coins}
                />
                <FilterCard
                    label="Tags"
                    placeholder="Select a tag"
                    values={coins}
                />
                <FilterCard
                    label="Side"
                    placeholder="Select a side"
                    values={coins}
                />
                <FilterCard
                    label="Duration"
                    placeholder="Select a duration"
                    values={coins}
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
