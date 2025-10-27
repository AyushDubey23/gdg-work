"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

function diffParts(target: Date) {
  const now = new Date().getTime()
  const d = Math.max(0, target.getTime() - now)
  const days = Math.floor(d / (1000 * 60 * 60 * 24))
  const hours = Math.floor((d / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((d / (1000 * 60)) % 60)
  const seconds = Math.floor((d / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export function CountdownSection() {
  const [time, setTime] = useState(() => diffParts(new Date("2025-11-01T10:00:00+05:30")))
  useEffect(() => {
    const target = new Date("2025-11-01T10:00:00+05:30")
    const id = setInterval(() => setTime(diffParts(target)), 1000)
    return () => clearInterval(id)
  }, [])

  const Block = ({ label, value }: { label: string; value: number }) => (
    <div className="w-24 md:w-28 text-center g-gradient-border bg-[canvas] p-4">
      <div className="text-3xl md:text-4xl font-extrabold tabular-nums">{value.toString().padStart(2, "0")}</div>
      <div className="text-xs opacity-70">{label}</div>
    </div>
  )

  return (
    <section id="countdown" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 g-gradient-border bg-[color-mix(in_oklab,var(--g-blue)_6%,transparent)] pointer-events-none" />
      <div className="mx-auto max-w-5xl px-4 text-center grid gap-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">Induction 2025 – Your GDG Journey Begins.</h2>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Block label="Days" value={time.days} />
          <Block label="Hours" value={time.hours} />
          <Block label="Minutes" value={time.minutes} />
          <Block label="Seconds" value={time.seconds} />
        </div>
        <div>
          <Link href="https://gdg.community.dev/" target="_blank">
            <button className="g-gradient-border bg-[canvas] h-11 px-5 text-sm font-semibold" data-cursor="interactive">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
