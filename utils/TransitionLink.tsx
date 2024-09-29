"use client"

import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { resolve } from "path"

interface TransitionLinkProps extends LinkProps {
  children: ReactNode,
  href: string,
  className?: string
}


export function sleep(ms:number):Promise<void>{
  return new Promise((resolve)=>setTimeout(resolve,ms))
}

const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {

  const router = useRouter();
  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(500)
    router.push(href)
    await sleep(500)

    body?.classList.remove("page-transition");

  }
  return (
    <Link
      onClick={handleTransition}
      href={href} className={className} {...props}> {children} </Link>

  )
}

export default TransitionLink
