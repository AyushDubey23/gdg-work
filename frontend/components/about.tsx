"use client"

import { Cpu, Shield, Cloud, Smartphone, Laptop, Code, Database, Palette } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

const domains = [
  { icon: Laptop, label: "Web Development" },
  { icon: Smartphone, label: "Android Development" },
  { icon: Cpu, label: "AI & ML" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Cloud, label: "Open Source & Cloud" },
  { icon: Code, label: "Competitive Programming" },
  { icon: Database, label: "Data Science & Analytics" },
  { icon: Palette, label: "UI/UX Design" },
]

const stats = [
  { label: "Members", value: "1000+" },
  { label: "Events", value: "40+" },
  { label: "Speakers", value: "10+" },
  { label: "Workshops", value: "10+" },
  { label: "Hackathons", value: "2+" },
]

const paragraphs = [
  "Founded on 26th September 2020 by our esteemed alumnus Abhishek Kumar Yadav, our journey began as Developer Student Clubs (DSC) under the prestigious Google Developers Program. What started as a small initiative to bring together enthusiastic learners and innovators has, over time, grown into something much larger and impactful.",
  "Through consistent effort, dedication, and the passion of our members, we have developed, expanded, and evolved into the largest developer community on our campus and one of the most vibrant in the entire region. Our growth is not merely in numbers but in the diversity of skills, creativity, and opportunities that we bring to the table.",
  "From the very beginning, our mission has remained clear and unwavering—to promote technology, foster innovation, and nurture skill development within the tech community. We believe in empowering students to transform their ideas into reality, equipping them with the tools and mindset needed to solve real-world challenges.",
  "Over the years, we have hosted a wide array of impactful initiatives, including hands-on workshops, hackathons, coding competitions, speaker sessions, and expert-led seminars. These not only provide valuable technical knowledge but also cultivate teamwork, problem-solving abilities, and leadership skills among participants.",
  "Today, our community stands as a hub of collaboration, creativity, and technical excellence, inspiring countless students to explore new technologies, push their boundaries, and become future leaders in the tech ecosystem.",
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-start">
      {/* Timeline / Mission */}
      <div className="space-y-6">
        <div className="g-gradient-border p-6 bg-[canvas]">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold mb-2">Our Journey</h2>
            <Dialog>
              <DialogTrigger className="g-gradient-border bg-[canvas] h-9 px-4 text-sm font-medium hover:bg-[color-mix(in_oklab,var(--g-blue)_6%,transparent)] transition-colors">
                Read More
              </DialogTrigger>
              <DialogContent className="g-gradient-border bg-[canvas] max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Our Journey</DialogTitle>
                </DialogHeader>
                <div className="relative h-48 mb-4 g-gradient-border overflow-hidden">
                  <Image
                    src="https://ik.imagekit.io/guxtd3sah/IMG_0710.HEIC?updatedAt=1754648851818"
                    alt="GDG Community"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-sm space-y-3">
                  {paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <ol className="relative border-s border-(--color-border) ps-5 space-y-4">
            <li>
              <div className="absolute -start-1.5 size-3 rounded-full bg-(--g-blue)" />
              <p>
                <strong>26 Sep 2020</strong> — Founded by alumnus Abhishek Kumar Yadav.
              </p>
            </li>
            <li>
              <div className="absolute -start-1.5 size-3 rounded-full bg-(--g-red)" />
              <p>Grew from DSC to GDG On Campus, expanding impact and reach.</p>
            </li>
            <li>
              <div className="absolute -start-1.5 size-3 rounded-full bg-(--g-green)" />
              <p>Now the largest developer community in the region.</p>
            </li>
          </ol>
        </div>

        <div className="g-gradient-border p-6 bg-[canvas]">
          <h3 className="text-xl font-extrabold mb-2">Our Mission</h3>
          <p className="opacity-90">
            We foster innovation, upskill students, and empower the tech community through workshops, hackathons, and
            collaborations. Our programs prioritize production-grade learning—reviewed code, reproducible workflows, and
            practical mentorship—to turn skills into outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="g-gradient-border p-4 text-center bg-[canvas]" data-tilt>
              <div className="text-2xl font-extrabold">{s.value}</div>
              <div className="text-xs opacity-70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {domains.map((d, idx) => {
          const Icon = d.icon
          const colors = [
            "var(--g-blue)",
            "var(--g-red)",
            "var(--g-yellow)",
            "var(--g-green)",
            "var(--g-orange)",
            "var(--g-purple)",
          ]
          return (
            <div key={d.label} className="g-gradient-border p-5 bg-[canvas] group" data-tilt>
              <div className="flex flex-col items-center gap-3 text-center">
                <span
                  className="size-12 grid place-items-center"
                  style={{ background: `color-mix(in_oklab,${colors[idx % 6]}_12%,transparent)` }}
                >
                  <Icon className="size-6" style={{ color: colors[idx % 6] }} />
                </span>
                <span className="font-semibold text-sm leading-tight">{d.label}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
