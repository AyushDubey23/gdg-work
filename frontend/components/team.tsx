"use client"

import Image from "next/image"
import useSWR from "swr"
import { Github, Linkedin } from "lucide-react"
import { useState, useMemo } from "react"

type Member = {
  name: string
  role: string
  session: string
  avatar: string
  linkedin: string
  github: string
}
type Group = { label: string; members: Member[] }
type Payload = { groups: Group[] }

const fetcher = (url: string) => fetch(url).then((r) => r.json() as Promise<Payload>)

export function Team() {
  const { data } = useSWR("/data/team.json", fetcher)
  const allGroups = data?.groups || []
  const yearLabels = ["2025", "2024", "2023", "2022", "2021"]
  const [year, setYear] = useState<string>(yearLabels[0])

  const current = useMemo(() => allGroups.find((g) => g.label.includes(year)), [allGroups, year])

  return (
    <section id="team" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold">Team</h2>
        <div className="flex flex-wrap gap-2">
          {yearLabels.map((y, i) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`h-9 px-3 border border-(--color-border) ${
                year === y ? "bg-[color-mix(in_oklab,var(--g-blue)_10%,transparent)]" : "bg-[canvas]"
              } transition-colors`}
              style={{
                // alternating subtle gradients per year
                background:
                  year === y
                    ? [
                        "linear-gradient(90deg,rgba(66,133,244,.12),transparent)",
                        "linear-gradient(90deg,rgba(52,168,83,.12),transparent)",
                        "linear-gradient(90deg,rgba(251,188,5,.12),transparent)",
                        "linear-gradient(90deg,rgba(234,67,53,.12),transparent)",
                        "linear-gradient(90deg,rgba(66,133,244,.12),transparent)",
                      ][i]
                    : undefined,
              }}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 reveal-up">
        {current?.members?.map((m) => (
          <div key={m.name} className="[perspective:1000px] group">
            <div
              className="relative h-80 bg-[canvas] border border-(--color-border) [transform-style:preserve-3d]
                           transition-transform duration-500 group-hover:[transform:rotateY(180deg)] overflow-hidden"
              data-tilt
            >
              {/* front - full image with text overlay */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <Image
                  alt={m.name}
                  src={m.avatar || "/placeholder.svg?height=320&width=240&query=team%20member"}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                  <div className="text-white font-bold text-lg">{m.name}</div>
                  <div className="text-white/90 text-sm">{m.role}</div>
                  <div className="text-white/70 text-xs">{m.session}</div>
                </div>
              </div>
              {/* back - social links */}
              <div
                className="absolute inset-0 grid place-items-center gap-3 bg-[color-mix(in_oklab,var(--g-blue)_10%,transparent)]
                                shadow-inner [transform:rotateY(180deg)] [backface-visibility:hidden]"
              >
                <div className="flex items-center gap-3">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    className="h-10 w-10 grid place-items-center bg-[canvas] border border-(--color-border)"
                    rel="noreferrer"
                  >
                    <Linkedin className="size-5" />
                  </a>
                  <a
                    href={m.github}
                    target="_blank"
                    className="h-10 w-10 grid place-items-center bg-[canvas] border border-(--color-border)"
                    rel="noreferrer"
                  >
                    <Github className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
