"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { MapPin, UsersRound, ExternalLink, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type Event = {
  id: string
  title: string
  kind: "Workshops" | "Hackathons" | "Webinars" | "Meetups"
  venue: string
  online?: boolean
  participants: number
  img: string
  desc: string
}

const DATA: Event[] = [
  {
    id: "ori-2025",
    title: "Orientation 2025",
    kind: "Meetups",
    venue: "Auditorium",
    participants: 450,
    img: "/orientation-2025.jpg",
    desc: "Kick off the academic year with a deep dive into GDG culture, programs, tracks, and how to build your roadmap. Meet the team, discover working groups, and join your first build challenge.",
  },
  {
    id: "hackblitz",
    title: "HackBlitz",
    kind: "Hackathons",
    venue: "Main Hall",
    participants: 200,
    img: "/hackblitz.jpg",
    desc: "A 24-hour product sprint focused on shipping MVPs. Mentors from industry guide teams through scoping, rapid prototyping, and demo day storytelling.",
  },
  {
    id: "web-ws",
    title: "Web Development Workshop",
    kind: "Workshops",
    venue: "Lab 3",
    participants: 120,
    img: "/web-workshop.jpg",
    desc: "Modern web fundamentals: Next.js App Router, Tailwind v4, accessibility, performance budgets, and production deployment workflows.",
  },
  {
    id: "ml-webinar",
    title: "ML Webinar",
    kind: "Webinars",
    venue: "Online",
    participants: 300,
    online: true,
    img: "/ml-webinar.jpg",
    desc: "A fast-paced session on applied ML—data pipelines, baseline modeling, and model monitoring with real case studies.",
  },
  {
    id: "app-dev",
    title: "App Dev Workshop",
    kind: "Workshops",
    venue: "Lab 5",
    participants: 110,
    img: "/app-dev.jpg",
    desc: "End-to-end Android app development with Kotlin and Jetpack: UI architecture, offline-first data, and publishing best practices.",
  },
  {
    id: "native-nexus",
    title: "Native Nexus",
    kind: "Meetups",
    venue: "Innovation Center",
    participants: 160,
    img: "/native-nexus.jpg",
    desc: "A meetup on native experiences—Flutter, Compose, and performance profiling on mobile.",
  },
]

const FILTERS = ["All", "Workshops", "Hackathons", "Webinars", "Meetups"] as const
type Filter = (typeof FILTERS)[number]

export function Events() {
  const [filter, setFilter] = useState<Filter>("All")
  const [active, setActive] = useState<Event | null>(null)
  const events = useMemo(() => (filter === "All" ? DATA : DATA.filter((e) => e.kind === filter)), [filter])

  return (
    <section id="events" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <header className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-extrabold">Events</h2>
        <Dialog>
          <DialogTrigger className="g-gradient-border bg-[canvas] h-9 px-3 text-sm">Read More</DialogTrigger>
          <DialogContent className="g-gradient-border bg-[canvas] max-w-2xl">
            <DialogHeader>
              <DialogTitle>Our event formats</DialogTitle>
            </DialogHeader>
            <div className="text-sm space-y-3">
              <p>
                We host four pillars of programming—Workshops for hands-on skill building, Webinars for knowledge
                distribution, Meetups for networking, and Hackathons for shipping.
              </p>
              <p>
                Each event focuses on production-grade learning: repos, issue trackers, and demos that you can include
                in your portfolio. We emphasize accessibility, performance, and maintainable patterns.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </header>

      <div className="flex flex-wrap gap-2 mb-6">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`g-gradient-border bg-[canvas] px-4 py-2 ${filter === f ? "outline outline-2 outline-(--g-blue)" : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((ev) => (
          <article key={ev.id} className="g-gradient-border bg-[canvas] overflow-hidden group" data-tilt>
            <div className="relative h-44">
              <Image alt={ev.title} src={ev.img || "/placeholder.svg"} fill className="object-cover" />
            </div>
            <div className="p-4 grid gap-3">
              <h3 className="font-bold">{ev.title}</h3>
              <div className="flex items-center justify-between text-sm opacity-80">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-4" /> {ev.venue} {ev.online && <em>(Online)</em>}
                </span>
                <span className="inline-flex items-center gap-1">
                  <UsersRound className="size-4" /> {ev.participants}
                </span>
              </div>
              <button
                onClick={() => setActive(ev)}
                className="inline-flex items-center gap-2 text-(--g-green) hover:underline"
                data-cursor="interactive"
              >
                Know More <ExternalLink className="size-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* modal for selected event */}
      {active && (
        <div className="fixed inset-0 z-50 grid place-items-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setActive(null)} />
          <div className="relative g-gradient-border bg-(--color-card) max-w-lg w-[92%] p-5">
            <button
              className="absolute top-2 right-2 h-8 w-8 grid place-items-center g-gradient-border bg-[canvas]"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
            <h4 className="text-xl font-bold mb-2">{active.title}</h4>
            <p className="text-sm opacity-90">{active.desc}</p>
          </div>
        </div>
      )}
    </section>
  )
}
