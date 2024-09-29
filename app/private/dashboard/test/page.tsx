"use client"
import React, { FormEvent } from 'react'
import { Input, Button } from "@nextui-org/react"
import axios from 'axios';
const page = () => {
  const [val, setValue] = React.useState('');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(val)
    const response = await fetch('/api/user/update', {
      method: 'PUT',
      body: formData,
    })

    const data = await response.json()
    console.log(data)
  }
  return (
    <div className='mt-40 flex'>
      <form onSubmit={handleSubmit}>
        <Input type='text' name="data" onChange={(e) => setValue(e.target.value)} />
        <Button type='submit' >Submit</Button>
      </form>
    </div>
  )
}

export default page
