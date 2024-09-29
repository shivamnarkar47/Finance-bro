"use client"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/react";
import Link from "next/link"
import {login} from "@/app/actions"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { sleep } from "@/utils/TransitionLink";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
 const handleTransition = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(5000)
    router.push("/private")

    body?.classList.remove("page-transition");

  }

  return (
    <div className="flex max-w-full justify-center items-center min-h-full">
      <Card className="p-3 md:min-w-[400px] hover:scale-105" isBlurred >
        <CardHeader>
          <h1 className="w-full text-center text-2xl p-4 font-bold">Login</h1>
        </CardHeader>
        <CardBody>
          <form className="">
            <div className="gap-4">
              <Input type="email" variant="bordered" label="Email" name="email" />
              <Input type="password" variant="bordered" label="Password" className="py-4" name="password" />
            </div>
            <Button type="submit" formAction={login} className="w-full" color="primary" variant="solid"  >Login Now !</Button>
          </form>
        </CardBody>
        <CardFooter>
          <Link href={'/register'} className="text-center w-full">Don&lsquo;t have an account yet ? <span className="underline text-blue-500">Sign up now</span></Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
