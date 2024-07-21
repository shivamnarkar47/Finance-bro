import { title } from '@/components/primitives'
import React from 'react'

const Hero = () => {
  return (
    <div className="inline-block max-w-lg text-center justify-center ">
      <h1 className={title({ class: "self-center",size:"sm" })}>Welcome to the World of</h1>
      <br/>
      <h1 className={title({color:"green",size:"lg"})}>Advisors</h1>
    </div>
  )
}

export default Hero
