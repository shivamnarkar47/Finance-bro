import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {


  return (<main className={`flex gap-5 py-20 min-h-full flex-col justify-center items-center ${inter.className}`}>
    <Hero />

  </main>);
}
