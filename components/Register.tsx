"use client"
import React from 'react'
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/react";
import Link from "next/link"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { signup } from '@/app/actions';
import { Select, SelectItem } from "@nextui-org/react";

const Register = () => {
  const [value, setValue] = React.useState(new Set([]));

  return (
    <div className="flex max-w-full justify-center items-center min-h-full">
      <Card className="p-3 md:min-w-[400px] hover:scale-105" isBlurred >
        <CardHeader>
          <h1 className="w-full text-center text-2xl p-4 font-bold">Register</h1>
        </CardHeader>
        <CardBody>
          <form >
            <div className="gap-4">

              <Input type="text" variant="bordered" label="Name" name='name' />
              <Input type="email" variant="bordered" label="Email" className='pt-4' name='email' />
              <Input type="password" variant="bordered" label="Password" className="py-4" name='password' />

              <Select
                variant="bordered"
                placeholder="Select your Role"
                selectedKeys={value}
                className="max-w-full mb-5"
                name='role'
                //@ts-ignore
                onSelectionChange={setValue}
                size='lg'
              >
                <SelectItem key={"investor"}>
                  Investor
                </SelectItem>
                <SelectItem key={"advisor"}>
                  Financial Advisor
                </SelectItem>
                <SelectItem key={"admin"}>
                  Admin
                </SelectItem>
              </Select>
            </div>

            <Button type="submit" color="primary" variant="solid" className='w-full' formAction={signup}>Be the part of the family now !</Button>
          </form>
        </CardBody>
        <CardFooter>
          <Link href={'/login'} className="text-center w-full">Already have an account yet ? <span className="underline text-blue-500">Login now</span></Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Register
