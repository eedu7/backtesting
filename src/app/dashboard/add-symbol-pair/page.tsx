import React from "react";
import { Metadata } from "next";

import { AddSymbolPairFormCard } from "@/modules/add-symbol-pair/components/AddSymbolPairFormCard";

export const metadata: Metadata = {
    title: "Add Symbol Pair | Backtest Pro",
    description: "Add a new symbol pair to Backtest Pro",
};

export default function Page() {
    return (
        <div>
            <AddSymbolPairFormCard />
        </div>
    );
}
