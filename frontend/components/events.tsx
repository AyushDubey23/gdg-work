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
  date: string
  images: string[]
  isUpcoming?: boolean
}

const DATA: Event[] = [
  {
    id: "ori-2025",
    title: "Orientation 2025",
    kind: "Meetups",
    venue: "Auditorium",
    participants: 450,
    img: "https://ik.imagekit.io/guxtd3sah/IMG_0710.HEIC?updatedAt=1754648851818",
    date: "January 15, 2025",
    isUpcoming: true,
    images: [
      "https://ik.imagekit.io/guxtd3sah/IMG_0710.HEIC?updatedAt=1754648851818",
      "https://ik.imagekit.io/vkajf4kza/IMG_0376.JPG?updatedAt=1754639902883",
      "https://ik.imagekit.io/vkajf4kza/DSC_0238%20(1)_2.jpg?updatedAt=1754639916150",
      "https://ik.imagekit.io/vkajf4kza/DSC_0190.JPG?updatedAt=1754639915604",
    ],
    desc: "Kick off the academic year with a deep dive into GDG culture, programs, tracks, and how to build your roadmap. Meet the team, discover working groups, and join your first build challenge. This orientation session is designed to introduce new members to the Google Developer Group community, showcase our mission of fostering innovation and collaboration, and help you find your place within our diverse technical tracks. Whether you're interested in web development, mobile apps, AI/ML, or cloud technologies, we have something for everyone. Network with fellow developers, learn about upcoming events and hackathons, and get inspired to build amazing projects.",
  },
  {
    id: "hackblitz",
    title: "HackBlitz",
    kind: "Hackathons",
    venue: "Main Hall",
    participants: 200,
    img: "https://ik.imagekit.io/vkajf4kza/IMG_0376.JPG?updatedAt=1754639902883",
    date: "February 20, 2025",
    images: [
      "https://ik.imagekit.io/vkajf4kza/IMG_0376.JPG?updatedAt=1754639902883",
      "https://ik.imagekit.io/vkajf4kza/DSC_0238%20(1)_2.jpg?updatedAt=1754639916150",
      "https://ik.imagekit.io/vkajf4kza/DSC_0190.JPG?updatedAt=1754639915604",
      "https://ik.imagekit.io/vkajf4kza/DSC_0271_1.jpg?updatedAt=1754639914878",
    ],
    desc: "A 24-hour product sprint focused on shipping MVPs. Mentors from industry guide teams through scoping, rapid prototyping, and demo day storytelling. HackBlitz is our flagship hackathon where innovation meets execution. Teams compete to build functional prototypes in just 24 hours, with mentorship from experienced developers and industry professionals. Prizes, swag, and recognition await the top teams. Whether you're a seasoned hacker or building your first project, HackBlitz provides the perfect platform to showcase your skills, collaborate with talented peers, and potentially launch your next big idea.",
  },
  {
    id: "web-ws",
    title: "Web Development Workshop",
    kind: "Workshops",
    venue: "Lab 3",
    participants: 120,
    img: "https://ik.imagekit.io/vkajf4kza/DSC_0238%20(1)_2.jpg?updatedAt=1754639916150",
    date: "March 10, 2025",
    images: [
      "https://ik.imagekit.io/vkajf4kza/DSC_0238%20(1)_2.jpg?updatedAt=1754639916150",
      "https://ik.imagekit.io/vkajf4kza/DSC_0190.JPG?updatedAt=1754639915604",
      "https://ik.imagekit.io/vkajf4kza/DSC_0271_1.jpg?updatedAt=1754639914878",
      "https://ik.imagekit.io/guxtd3sah/IMG_0710.HEIC?updatedAt=1754648851818",
    ],
    desc: "Modern web fundamentals: Next.js App Router, Tailwind v4, accessibility, performance budgets, and production deployment workflows. Learn from industry experts how to build scalable, performant web applications using the latest technologies. This hands-on workshop covers everything from setting up your development environment to deploying production-ready applications. You'll learn best practices for responsive design, SEO optimization, and accessibility standards. Perfect for developers looking to level up their web development skills and stay current with modern frameworks and tools.",
  },
  {
    id: "ml-webinar",
    title: "ML Webinar",
    kind: "Webinars",
    venue: "Online",
    participants: 300,
    online: true,
    img: "https://ik.imagekit.io/vkajf4kza/DSC_0190.JPG?updatedAt=1754639915604",
    date: "April 5, 2025",
    images: [
      "https://ik.imagekit.io/vkajf4kza/DSC_0190.JPG?updatedAt=1754639915604",
      "https://ik.imagekit.io/vkajf4kza/DSC_0271_1.jpg?updatedAt=1754639914878",
      "https://ik.imagekit.io/guxtd3sah/IMG_0710.HEIC?updatedAt=1754648851818",
      "https://ik.imagekit.io/vkajf4kza/IMG_0376.JPG?updatedAt=1754639902883",
    ],
    desc: "A fast-paced session on applied ML—data pipelines, baseline modeling, and model monitoring with real case studies. Discover how machine learning is transforming industries and learn practical techniques for building ML systems. This webinar covers the entire ML lifecycle from data collection and preprocessing to model training, evaluation, and deployment. Industry practitioners will share real-world case studies and lessons learned. Ideal for developers interested in AI/ML who want to understand how to integrate machine learning into their applications.",
  },
  {
    id: "app-dev",
    title: "App Dev Workshop",
    kind: "Workshops",
    venue: "Lab 5",
    participants: 110,
    img: "https://ik.imagekit.io/vkajf4kza/DSC_0271_1.jpg?updatedAt=1754639914878",
    date: "May 12, 2025",
    images: [
      "https://ik.imagekit.io/vkajf4kza/DSC_0271_1.jpg?updatedAt=1754639914878",
      "https://ik.imagekit.io/guxtd3sah/IMG_0710.HEIC?updatedAt=1754648851818",
      "https://ik.imagekit.io/vkajf4kza/IMG_0376.JPG?updatedAt=1754639902883",
      "https://ik.imagekit.io/vkajf4kza/DSC_0238%20(1)_2.jpg?updatedAt=1754639916150",
    ],
    desc: "End-to-end Android app development with Kotlin and Jetpack: UI architecture, offline-first data, and publishing best practices. Build production-ready Android applications using modern development practices. This workshop covers the complete app development lifecycle including UI design patterns, data persistence, networking, and app store publishing. Learn from experienced Android developers about common pitfalls and best practices. Whether you're new to Android development or looking to improve your skills, this workshop provides hands-on experience with real-world scenarios.",
  },
  {
    id: "native-nexus",
    title: "Native Nexus",
    kind: "Meetups",
    venue: "Innovation Center",
    participants: 160,
    img: "https://ik.imagekit.io/guxtd3sah/IMG_0710.HEIC?updatedAt=1754648851818",
    date: "June 8, 2025",
    images: [
      "https://ik.imagekit.io/guxtd3sah/IMG_0710.HEIC?updatedAt=1754648851818",
      "https://ik.imagekit.io/vkajf4kza/IMG_0376.JPG?updatedAt=1754639902883",
      "https://ik.imagekit.io/vkajf4kza/DSC_0238%20(1)_2.jpg?updatedAt=1754639916150",
      "https://ik.imagekit.io/vkajf4kza/DSC_0190.JPG?updatedAt=1754639915604",
    ],
    desc: "A meetup on native experiences—Flutter, Compose, and performance profiling on mobile. Connect with fellow mobile developers and explore the latest in cross-platform and native mobile development. This meetup brings together developers passionate about building beautiful, performant mobile applications. Discuss best practices, share experiences, and learn about emerging technologies in the mobile development space. Network with industry professionals and discover new opportunities in mobile development.",
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
          <DialogTrigger className="g-gradient-border bg-[canvas] h-9 px-4 text-sm font-medium hover:bg-[color-mix(in_oklab,var(--g-blue)_6%,transparent)] transition-colors">
            Read More
          </DialogTrigger>
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
            className={`g-gradient-border bg-[canvas] px-4 py-2 font-medium hover:bg-[color-mix(in_oklab,var(--g-blue)_6%,transparent)] transition-colors ${filter === f ? "outline outline-2 outline-(--g-blue)" : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((ev) => (
          <article key={ev.id} className="g-gradient-border bg-[canvas] overflow-hidden group relative" data-tilt>
            {ev.isUpcoming && (
              <div className="absolute top-2 right-2 z-10 bg-(--g-green) text-white px-3 py-1 text-xs font-bold">
                UPCOMING
              </div>
            )}
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
                className="g-gradient-border bg-[canvas] px-3 py-2 text-sm font-medium inline-flex items-center gap-2 hover:bg-[color-mix(in_oklab,var(--g-blue)_6%,transparent)] transition-colors"
                data-cursor="interactive"
              >
                Know More <ExternalLink className="size-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setActive(null)} />
          <div className="relative g-gradient-border bg-(--color-card) max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8">
            <button
              className="absolute top-4 right-4 h-8 w-8 grid place-items-center g-gradient-border bg-[canvas] hover:bg-[color-mix(in_oklab,var(--g-blue)_6%,transparent)] transition-colors"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="size-4" />
            </button>

            <h2 className="text-2xl font-bold mb-2">{active.title}</h2>
            <p className="text-sm opacity-80 mb-6">{active.date}</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {active.images.map((img, idx) => (
                <div key={idx} className="relative h-40 overflow-hidden g-gradient-border">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${active.title} - Image ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <p className="text-sm leading-relaxed opacity-90">{active.desc}</p>
          </div>
        </div>
      )}
    </section>
  )
}
