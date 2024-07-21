// app/providers.tsx
'use client'

import Layout from '@/components/Layout'
import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme="dark" attribute="class">
        <Layout>
          {children}
        </Layout>

      </NextThemesProvider>
    </NextUIProvider>
  )
}
