import { Metadata } from "next";

import { AuthCard } from "@/app/(auth)/_components/AuthCard";
import { LoginForm } from "@/app/(auth)/_components/LoginForm";

export const metadata: Metadata = {
    title: "Sign In | Backtest Pro",
    description: "Sign in to your Backtest Pro account and access powerful backtesting tools for trading strategies.",
};

export default function LoginPage() {
    return (
        <AuthCard
            title={"Welcome Back"}
            description="Sign in to access your trading dashboard and manage your strategies."
        >
            <LoginForm />
        </AuthCard>
    );
}
