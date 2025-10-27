import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

import { Poppins, Inter } from "next/font/google"
import { AnimatedCursor } from "@/components/animated-cursor"
import { JoinFab } from "@/components/fab-join"
import { PageLoader } from "@/components/page-loader"
import { AuthProvider } from "@/lib/auth-context"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GDG On Campus MMMUT",
  description: "Google Developer Group On Campus MMMUT – Developing Together a Better Tomorrow.",
  generator: "v0.app",
  icons: { icon: "/GDG.png" }, // use embedded logo as favicon
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${poppins.variable} ${inter.variable} antialiased`}>
        <AuthProvider>
          <PageLoader />
          <Suspense fallback={null}>
            {/* Google-themed animated cursor */}
            <AnimatedCursor />
            {children}
            {/* Global FAB */}
            <JoinFab />
          </Suspense>
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
