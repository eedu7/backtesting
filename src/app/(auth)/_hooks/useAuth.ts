"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { supabase } from "@/lib/supabaseClient";

interface SignInUpWithPassword {
    email: string;
    password: string;
}

export function useAuth() {
    const signIn = useMutation({
        mutationKey: ["sign-in-with-password"],
        mutationFn: async (values: SignInUpWithPassword) => {
            try {
                const { error } = await supabase.auth.signInWithPassword(values);
                if (error) {
                    toast.error(("Error signing in." + error) as string);
                }
            } catch (error) {
                toast.error(("Error signing in." + error) as string);
            }
        },
    });
    const signUp = useMutation({
        mutationKey: ["sign-up-with-password"],
        mutationFn: async (values: SignInUpWithPassword) => {
            try {
                const { error } = await supabase.auth.signUp(values);
                if (error) {
                    toast.error(("Error signing in." + error) as string);
                }
            } catch (error) {
                toast.error(("Error signing in." + error) as string);
            }
        },
    });

    return {
        signIn,
        signUp,
    };
}
