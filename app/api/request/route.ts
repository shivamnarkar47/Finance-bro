
import { createClient } from '@supabase/supabase-js'

import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest) {
  const supabase = createClient(
    "https://ovmlhbnjyanzmnzvrehx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92bWxoYm5qeWFuem1uenZyZWh4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODgzNTUxMywiZXhwIjoyMDA0NDExNTEzfQ.tkJ4899pTmneJYxuvFO-lDYlHTVc6f2z5qC0MvWRSXw",
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  );
  const { data: { users }, error } = await supabase.auth.admin.listUsers();

  return Response.json({ "data": users })
}

export async function POST (req: NextApiRequest,res:NextApiResponse) {
  
}
