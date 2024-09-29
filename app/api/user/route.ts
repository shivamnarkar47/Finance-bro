// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "@/utils/types";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export async function GET(
) {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  return Response.json({ data : user});
}


