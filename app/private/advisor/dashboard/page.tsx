import Dashboard from '@/components/Dashboard'
import { createClient } from '@/utils/supabase/server'
import React from 'react'

const page = async () => {
  const supabase = createClient();

  const {data,error} = await supabase.auth.getUser();
  return (
      <Dashboard user={data.user}/>
  )
}

export default page
