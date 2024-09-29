
import Follow from "@/components/Follow";
import { createClient } from "@/utils/supabase/server";
import { useEffect, useState } from "react";


export default async  function page() {
const supabase = createClient();
  const {data,error} = await supabase.auth.getUser();
  return (
    <Follow defaultUser={data?.user} />
  )
  
}

