"use client";

import { RiFacebookFill, RiGithubFill, RiGoogleFill, RiTwitterXFill } from "@remixicon/react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { supabase } from "@/lib/supabaseClient";

export default function SocialLogin() {
    return (
        <div className="flex flex-wrap gap-2 w-full">
            <Button
                className="flex-1 cursor-pointer"
                variant="outline"
                aria-label="Login with Google"
                size="icon"
                onClick={async () => {
                    const { error } = await supabase.auth.signInWithOAuth({
                        provider: "google",
                    });
                    if (error) {
                        toast.error(("Error signing in." + error) as string);
                    }
                }}
            >
                <RiGoogleFill
                    className="dark:text-primary text-[#DB4437]"
                    size={16}
                    aria-hidden="true"
                />
            </Button>
            <Button
                className="flex-1 cursor-pointer"
                variant="outline"
                aria-label="Login with Facebook"
                size="icon"
                disabled
            >
                <RiFacebookFill
                    className="dark:text-primary text-[#1877f2]"
                    size={16}
                    aria-hidden="true"
                />
            </Button>
            <Button
                className="flex-1 cursor-pointer"
                variant="outline"
                aria-label="Login with X"
                size="icon"
                disabled
            >
                <RiTwitterXFill
                    className="dark:text-primary text-[#14171a]"
                    size={16}
                    aria-hidden="true"
                />
            </Button>
            <Button
                className="flex-1 cursor-pointer"
                variant="outline"
                aria-label="Login with GitHub"
                size="icon"
                disabled
            >
                <RiGithubFill
                    className="dark:text-primary text-black"
                    size={16}
                    aria-hidden="true"
                />
            </Button>
        </div>
    );
}
