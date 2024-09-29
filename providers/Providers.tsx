// app/providers.tsx
'use client'

import { AuroraBackground } from '@/components/ui/AuroraBackground'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Inter_Tight } from 'next/font/google'
const inter = Inter_Tight({subsets:["latin"]});
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme="dark" attribute="class">
        <AuroraBackground>
          <div className={`min-h-full w-full flex flex-col text-foreground bg-background ${inter.className} `}>
            {children}
          </div>
        </AuroraBackground>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
