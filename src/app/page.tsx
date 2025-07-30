import { Merriweather, Poppins } from "next/font/google";
import Link from "next/link";

import { ClientGreeting } from "@/app/client-greeting";
import { trpc } from "@/trpc/server";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

// TODO: Remove the fonts
const poppins = Poppins({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-poppins",
});

// TODO: Remove the fonts
const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-merriweather",
});

export default function HomePage() {
    void trpc.hello.prefetch({ text: "Batman" });
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center px-4 text-center">
            <h1
                className={cn(
                    "text-2xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white",
                    poppins.className,
                )}
            >
                Welcome to Backtest Pro
            </h1>
            <p className={cn("mt-4 max-w-xl text-gray-600 md:text-lg dark:text-gray-300", merriweather.className)}>
                Analyze, simulate, and optimize your trading strategies with historical data before risking real
                capital. Make smarter trading decisions with powerful backtesting tools.
            </p>
            <div className="mt-8">
                <Button asChild>
                    <Link href="/dashboard">Dashboard</Link>
                </Button>
                <ClientGreeting />
            </div>
        </div>
    );
}
