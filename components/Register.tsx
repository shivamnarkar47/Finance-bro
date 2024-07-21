
import React from 'react'
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/react";
import Link from "next/link"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const Register = () => {
  return (
    <div className="flex max-w-full justify-center items-center min-h-full">
      <Card className="p-3 md:min-w-[400px] hover:scale-105" isBlurred >
        <CardHeader>
          <h1 className="w-full text-center text-2xl p-4 font-bold">Register</h1>
        </CardHeader>
        <CardBody>
          <form>
            <div className="gap-4">

              <Input type="text" variant="bordered" label="Name" name='name' />
              <Input type="email" variant="bordered" label="Email" className='pt-4' name='email' />
              <Input type="password" variant="bordered" label="Password" className="py-4" name='password' />
            </div>
            <Button color="primary" variant="solid" className='w-full'>Be the part of the family now !</Button>
          </form>
        </CardBody>
        <CardFooter>
          <Link href={'/auth/login'} className="text-center w-full">Already have an account yet ? <span className="underline text-blue-500">Login now</span></Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Register
