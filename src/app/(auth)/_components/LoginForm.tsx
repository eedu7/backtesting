"use client";

import Link from "next/link";

import { useAuth } from "@/app/(auth)/_hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/app/(auth)/_components/PasswordInput";

export const LoginForm = () => {
    const { signIn } = useAuth();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        signIn.mutate({ email, password });
    };

    return (
        <form
            className="space-y-8"
            onSubmit={onSubmit}
        >
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="email">Email:</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password:</Label>
                    <PasswordInput
                        id="password"
                        name="password"
                        type="password"
                        required
                    />
                </div>
            </div>
            <div className="space-y-4 text-xs">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                        <p>New user?</p>

                        <Link
                            href="/register"
                            className="text-primary font-bold underline"
                        >
                            Create an account
                        </Link>
                    </div>
                    <Link
                        href="#"
                        className="font-bold underline"
                    >
                        Forgot password?
                    </Link>
                </div>
                <div className="flex justify-between gap-4">
                    <Button className="flex-1 cursor-pointer">{signIn.isPending ? "Signing in..." : "Sign in"}</Button>
                </div>
            </div>
        </form>
    );
};
