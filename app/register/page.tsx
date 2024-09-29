"use client"
import { NavbarElementDynamic } from '@/components/Layout'
import Loading from '@/components/Loading'
import Register from '@/components/Register'
import { sleep } from '@/utils/TransitionLink'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const body = document.querySelector("body");
      body?.classList.add("page-transition");
      await sleep(500);
      body?.classList.remove("page-transition");
      setLoading(false)
    })();
  }, [])
  if (loading) {
    return ;
  }
  return (
  <>
  <NavbarElementDynamic/>
  <Register/>
  </>
  )
}

export default Page
