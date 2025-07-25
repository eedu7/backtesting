import React from "react";
import { Metadata } from "next";

import { LoginCard } from "@/modules/auth/components/LoginCard";

export const metadata: Metadata = {
    title: "Login - Backtest Pro",
    description: "Login to Backtest Pro",
};

export default function LoginPage() {
    return <LoginCard />;
}
