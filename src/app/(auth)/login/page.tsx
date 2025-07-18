import { Metadata } from "next";

import { AuthCard } from "@/app/(auth)/_components/AuthCard";
import { LoginForm } from "@/app/(auth)/_components/LoginForm";

export const metadata: Metadata = {
    // TODO: Change the title, and description
    title: "Login",
    description: "Login",
};

export default function LoginPage() {
    return (
        <AuthCard
            title={"Sign up"}
            description={"Sign in description"}
        >
            <LoginForm />
        </AuthCard>
    );
}
