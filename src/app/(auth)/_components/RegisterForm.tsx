"use client";

import { useAuth } from "@/app/(auth)/_hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const RegisterForm = () => {
    const { signUp } = useAuth();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        signUp.mutate({ email, password });
    };

    return (
        <form
            className="space-y-8"
            onSubmit={onSubmit}
        >
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
                <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                />
            </div>
            <div className="flex justify-between gap-4">
                <Button className="flex-1 cursor-pointer">{signUp.isPending ? "Signing up..." : "Sign up"}</Button>
            </div>
        </form>
    );
};
