"use client"

import Link from "next/link"
import { RippleButton } from "./ui/ripple-button"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92svh] grid place-items-center overflow-hidden bg-[rgba(255,255,255,1)]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design-mode/image(1).png"
          alt="Google Developer Group background"
          fill
          className="object-cover blur-sm"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center space-y-6 reveal-up">
        <h1 className="text-balance font-extrabold font-sans text-3xl md:text-6xl leading-tight text-foreground">
          Google Developer Group On Campus
        </h1>
        <p className="text-lg text-foreground md:text-3xl font-black">
          Madan Mohan Malaviya University of Technology, Gorakhpur
        </p>
        <p className="text-foreground font-medium font-sans text-xl">Developing Together a Better Tomorrow.</p>
        <p className="text-pretty text-foreground md:max-w-3xl mx-auto font-sans text-lg opacity-90">
          Join the largest developer community in the region, where learning, innovation, and collaboration meet. From
          hands-on workshops and hackathons to expert talks and community projects, GDG On Campus empowers students to
          build impactful real-world solutions.
        </p>
        <div className="flex items-center justify-center">
          <Link
            href="https://gdg.community.dev/gdg-on-campus-madan-mohan-malaviya-university-of-technology-gorakhpur-india/"
            target="_blank"
            data-cursor="interactive"
          >
            <RippleButton className="g-gradient-border bg-[canvas] text-foreground font-semibold hover:shadow-[0_0_40px_-10px_color-mix(in_oklab,var(--g-green)_60%,transparent)]">
              Join the Community
            </RippleButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
