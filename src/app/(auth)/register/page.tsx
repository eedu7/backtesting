import { Metadata } from "next";

import { AuthCard } from "@/app/(auth)/_components/AuthCard";
import { RegisterForm } from "@/app/(auth)/_components/RegisterForm";

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
            <RegisterForm />
        </AuthCard>
    );
}
