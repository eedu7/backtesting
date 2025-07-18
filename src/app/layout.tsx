import type { Metadata } from "next";
import "./globals.css";
import React from "react";


export const metadata: Metadata = {
    title: "Backtest Pro | Backtesting Platform for Trading Strategies",
    description: "Backtest Pro is a powerful backtesting platform for trading strategies with historical data before risking real capital."
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className="antialiased"
        >
        {children}
        </body>
        </html>
    );
}
