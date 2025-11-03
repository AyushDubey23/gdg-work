"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { CountdownSection } from "@/components/countdown"
import { Events } from "@/components/events"
import { Team } from "@/components/team"
import { Sponsors } from "@/components/sponsors"
import { Certificates } from "@/components/certificates"
import { Contact } from "@/components/contact"
import { SocialMedia } from "@/components/social-media"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh bg-(--color-background) text-(--color-foreground) pt-16">
        <Hero />
        <About />
        <CountdownSection />
        <Events />
        <Team />
        <Sponsors />
        <Certificates />
        <Contact />
        <SocialMedia />
        <Footer />
      </main>
    </>
  )
}
