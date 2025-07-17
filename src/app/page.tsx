import { Merriweather, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-poppins"
});

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-merriweather"
});


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen text-center px-4">
            <h1 className={cn("text-2xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white", poppins.className)}>
                Welcome to Backtest Pro
            </h1>
            <p className={cn("mt-4 md:text-lg text-gray-600 dark:text-gray-300 max-w-xl", merriweather.className)}>
                Analyze, simulate, and optimize your trading strategies with historical data before risking real
                capital. Make smarter trading decisions with powerful backtesting tools.
            </p>
        </div>
    );
}
