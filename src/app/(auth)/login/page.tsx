"use client";
import { login, signup } from "./actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-zinc-300">
            <Card>
                <CardContent>
                    <div className="w-[350px]">
                        <form className="space-y-8">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email:</Label>
                                <Input id="email" name="email" type="email" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password:</Label>
                                <Input id="password" name="password" type="password" required />
                            </div>
                            <div className="flex justify-between gap-4">
                                <Button formAction={login} variant="default" className="flex-1 cursor-pointer">Log
                                    in</Button>
                                <Button formAction={signup} variant="secondary" className="flex-1 cursor-pointer">Sign
                                    up</Button>
                                <Button type="button" onClick={async () => {
                                    const { data, error } = await supabase.auth.signInWithOAuth({
                                        provider: "google"
                                    });
                                    console.log(data, error);
                                }}>
                                    Google
                                </Button>
                            </div>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}