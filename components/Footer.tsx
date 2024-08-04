"use client"
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (!pathname.includes('/private/')) {
    return (
      <div className="flex w-full text-center justify-center p-5">Built with ❤  by Developers.</div>
    )
  }

  return
}

export default Footer
