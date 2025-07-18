"use client";

import { useAuth } from "@/app/(auth)/_hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SocialLogin from "@/app/(auth)/_components/SocialLogin";

export default function LoginPage() {
    const { signIn } = useAuth();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        signIn.mutate({ email, password });
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-zinc-300">
            <Card>
                <CardContent>
                    <div className="w-[350px]">
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
                                <Button
                                    variant="secondary"
                                    className="flex-1 cursor-pointer"
                                >
                                    {signIn.isPending ? "Signing in..." : "Sign in"}
                                </Button>
                                <Button type="button">Google</Button>
                            </div>
                        </form>
                    </div>
                </CardContent>
                <CardFooter>
                    <SocialLogin />
                </CardFooter>
            </Card>
        </div>
    );
}
