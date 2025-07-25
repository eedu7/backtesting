import React from "react";
import { Metadata } from "next";

import { JournalPageView } from "@/modules/dashboard/journal/components/PageView";

export const metadata: Metadata = {
    title: "Journal - Backtest Pro",
    description: "Journal of Backtest Pro",
};

export default function JournalPage() {
    return <JournalPageView />;
}
