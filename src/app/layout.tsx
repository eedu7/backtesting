import type { Metadata } from "next";

import "./globals.css";

import React from "react";

import TanstackQuery from "@/providers/TanstackQuery";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: "Backtest Pro | Backtesting Platform for Trading Strategies",
    description:
        "Backtest Pro is a powerful backtesting platform for trading strategies with historical data before risking real capital.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <TanstackQuery>
                <html lang="en">
                    <body className="antialiased">
                        {children}
                        <Toaster />
                    </body>
                </html>
            </TanstackQuery>
        </ClerkProvider>
    );
}
