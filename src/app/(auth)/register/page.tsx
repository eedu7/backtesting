import React from "react";
import { Metadata } from "next";

import { RegisterCard } from "@/modules/auth/components/RegisterCard";

export const metadata: Metadata = {
    title: "Register - Backtest Pro",
    description: "Register to Backtest Pro",
};

export default function RegisterPage() {
    return <RegisterCard />;
}
