"use client"
import Hero from '@/components/Hero'
import { NavbarElementDynamic } from '@/components/Layout'
import Loading from '@/components/Loading'
import { sleep } from '@/utils/TransitionLink'
import React, { useEffect, useState } from 'react'

const home = () => {
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
    return <Loading/>
  }
  return (
    <>
      <NavbarElementDynamic />
      <main className={`flex gap-5 py-20 min-h-full flex-col justify-center items-center `}>
        <Hero />
      </main>
    </>
  )
}

export default home
