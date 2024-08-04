import { createClient } from '@/utils/supabase/server'
import React from 'react'
import SidebarElement from "@/components/SidebarElement"
export default async function Page() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  return (
    <div className='flex justify-between items-center gap-3 h-[93vh] '>
      <SidebarElement data={data.user}/>
      
    </div>
  )
}


