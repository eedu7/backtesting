"use client";

import { TradeSchema } from "@/modules/trades/trades.schema";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const TradeColumns: ColumnDef<z.infer<typeof TradeSchema>>[] = [
    {
        accessorKey: "symbol",
        header: "Symbol",
    },
    {
        accessorKey: "tag",
        header: "Tag",
    },
    {
        accessorKey: "entryDate",
        header: "Entry Date",
        cell: ({ getValue }) => {
            const date = new Date(getValue() as string);

            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();

            return `${day}-${month}-${year}`;
        },
    },
    {
        accessorKey: "exitDate",
        header: "Exit Date",
        cell: ({ getValue }) => {
            const date = new Date(getValue() as string);

            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();

            return `${day}-${month}-${year}`;
        },
    },
    {
        accessorKey: "entryTime",
        header: "Entry Time",
    },
    {
        accessorKey: "exitTime",
        header: "Exit Time",
    },
    {
        accessorKey: "entryPrice",
        header: "Entry Price",
    },
    {
        accessorKey: "exitPrice",
        header: "Exit Price",
    },
    {
        accessorKey: "tradeStatus",
        header: "Status",
    },
    {
        accessorKey: "riskToReward",
        header: "RR",
    },
    {
        accessorKey: "actualRiskToReward",
        header: "Actual RR",
    },
    {
        accessorKey: "riskToTrade",
        header: "RT",
    },
    {
        accessorKey: "profitNLoss",
        header: "PnL",
    },
    {
        accessorKey: "tradeGrade",
        header: "Grade",
    },
    {
        accessorKey: "newsDay",
        header: "News Day",
    },
    {
        accessorKey: "impactOfNewsDay",
        header: "Impact of News Day",
    },
];
