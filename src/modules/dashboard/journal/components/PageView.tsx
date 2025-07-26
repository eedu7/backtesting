import React from "react";
import { Merriweather } from "next/font/google";

import { Filters } from "@/modules/dashboard/journal/components/Filters";

import { cn } from "@/lib/utils";

// TODO: Remove the fonts
const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-merriweather",
});

export const JournalPageView = () => {
    return (
        <div className="space-y-4 p-2 xl:p-4">
            <h1 className={cn("text-bold rounded-lg bg-zinc-50 px-2 py-2 text-xl xl:px-4", merriweather.className)}>
                Journal
            </h1>
            <Filters />
        </div>
    );
};
