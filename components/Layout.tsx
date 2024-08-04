import { ReactNode } from "react";
import Footer from "./Footer";
export const NavbarElementDynamic = dynamic(()=>import("@/components/NavbarElement"),{
  ssr:false
})
import { AuroraBackground } from "./ui/AuroraBackground";
import { Inter_Tight } from "next/font/google";
import dynamic from "next/dynamic";
import { supabase } from "@/hooks/user";
const inter = Inter_Tight({subsets:["latin"]});
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuroraBackground>
      <div className={`min-h-screen w-full flex flex-col text-foreground bg-background ${inter.className}`}>
        <main className="flex-1 z-10 ">{children}</main>
        <Footer />

      </div>
    </AuroraBackground>
  );
}
