import { createClient } from '@/utils/supabase/server'
import React from 'react'
import SidebarElement from "@/components/SidebarElement"
import Dashboard from '@/components/Dashboard'
import Feed from '@/components/Feed'
import Communities from '@/components/Communities'
export default async function Page() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  return (
    <>
      <Feed />
      <Communities />
    </>
  )
}


