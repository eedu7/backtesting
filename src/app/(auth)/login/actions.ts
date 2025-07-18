"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

export async function login(formData: FormData) {

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        toast(error.message);

    }

    revalidatePath("/", "layout");
    redirect("/");
}

export async function signup(formData: FormData) {

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string
    };

    const { error } = await supabase.auth.signUp(data);

    if (error) {
        toast(error.message);

    }

    revalidatePath("/", "layout");
    redirect("/");
}