import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }
  if (data?.user?.user_metadata?.role === "investor") {
    redirect(`/private/dashboard/`)
  }
  else if(data?.user?.user_metadata?.role == "advisor"){
     redirect(`/private/advisor/dashboard/`)

  }

}
