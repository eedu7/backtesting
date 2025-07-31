import type { Metadata } from "next";

import "./globals.css";

import React from "react";

import { TRPCProvider } from "@/trpc/client";
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
        <html lang="en">
            <body className="antialiased">
                <ClerkProvider>
                    <TRPCProvider>
                        {children}
                        <Toaster />
                    </TRPCProvider>
                </ClerkProvider>
            </body>
        </html>
    );
}
