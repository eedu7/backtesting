import { Merriweather, Poppins } from "next/font/google";

import { supabase } from "@/lib/supabaseClient";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-poppins",
});

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-merriweather",
});

export default function Home() {
    const data = supabase.auth.getUser(
        "eyJhbGciOiJIUzI1NiIsImtpZCI6IlB3cUhDQ0Vmb005M2JjVHQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2hieHlmdXVjbmZjcnJnaW55cnJ0LnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJiN2UxZjY1Mi01YmUxLTQ1MzItOTBkYi05NWI3MWRjOWRkOTMiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzUyODU1OTc3LCJpYXQiOjE3NTI4NTIzNzcsImVtYWlsIjoibXVlZWRhaG1hZDA2N0BnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVycyI6WyJnb29nbGUiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0xuekdST21Vc2FIYks3VXdUZ1dPODNiU0g4cnh1bzhTOFhQLVkzX182RmxpV3dqUT1zOTYtYyIsImVtYWlsIjoibXVlZWRhaG1hZDA2N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZnVsbF9uYW1lIjoiTXVlZWQgQWhtYWQiLCJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYW1lIjoiTXVlZWQgQWhtYWQiLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMbnpHUk9tVXNhSGJLN1V3VGdXTzgzYlNIOHJ4dW84UzhYUC1ZM19fNkZsaVd3alE9czk2LWMiLCJwcm92aWRlcl9pZCI6IjEwOTI3NzY0NjY4NzQ0NTk1OTYwMSIsInN1YiI6IjEwOTI3NzY0NjY4NzQ0NTk1OTYwMSJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im9hdXRoIiwidGltZXN0YW1wIjoxNzUyODUyMzc3fV0sInNlc3Npb25faWQiOiI4YzU0ZTFhMS0wMTQ1LTQyMGUtYmU0OS04NzFjZTEyMGM0NjciLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.T4bv7s1xwmLUXKmecXNt1K6ylxeu3w-9jHbgsXuQ2Qg",
    );
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen text-center px-4">
            <h1
                className={cn(
                    "text-2xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",
                    poppins.className,
                )}
            >
                Welcome to Backtest Pro
            </h1>
            <p className={cn("mt-4 md:text-lg text-gray-600 dark:text-gray-300 max-w-xl", merriweather.className)}>
                Analyze, simulate, and optimize your trading strategies with historical data before risking real
                capital. Make smarter trading decisions with powerful backtesting tools.
            </p>
        </div>
    );
}
