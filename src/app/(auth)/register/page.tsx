import { Metadata } from "next";

import { AuthCard } from "@/app/(auth)/_components/AuthCard";
import { LoginForm } from "@/app/(auth)/_components/LoginForm";

export const metadata: Metadata = {
    title: "Sign Up | Backtest Pro",
    description:
        "Create your Backtest Pro account and start analyzing trading strategies using real historical market data.",
};

export default function RegisterPage() {
    return (
        <AuthCard
            title="Create an Account"
            description="Join Backtest Pro to start backtesting your trading strategies with real historical data."
        >
            <LoginForm />
        </AuthCard>
    );
}
