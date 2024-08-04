import Hero from '@/components/Hero'
import { NavbarElementDynamic } from '@/components/Layout'
import NavbarElement from '@/components/NavbarElement'
import React from 'react'

const home = () => {
  return (
    <>
      <NavbarElementDynamic/>
    <main className={`flex gap-5 py-20 min-h-full flex-col justify-center items-center `}>
      <Hero />
    </main>
    </>
  )
}

export default home
