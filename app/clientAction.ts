"use client"
import { createClient as createClientSignOut } from "@/utils/supabase/client";

export async function signOut() {
    const supabase = createClientSignOut();
    console.log(supabase)
    const { error } = await supabase.auth.signOut();
    if (error) {
    }
}