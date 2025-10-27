"use client"

import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const tiers = [
  {
    label: "Platinum",
    logos: [{ name: "Google Cloud", img: "/google-cloud-logo.png", url: "https://cloud.google.com/" }],
  },
  {
    label: "Gold",
    logos: [
      { name: "Firebase", img: "/firebase-logo.png", url: "https://firebase.google.com/" },
      { name: "Android", img: "/android-logo.png", url: "https://www.android.com/" },
      { name: "TensorFlow", img: "/tensorflow.jpg", url: "https://www.tensorflow.org/" },
    ],
  },
  {
    label: "Silver",
    logos: [
      { name: "Chrome", img: "/chrome.jpg", url: "https://www.google.com/chrome/" },
      { name: "Flutter", img: "/flutter-logo.png", url: "https://flutter.dev/" },
      { name: "Angular", img: "/angular.jpg", url: "https://angular.io/" },
      { name: "Google Maps Platform", img: "/google-maps-app.png", url: "https://mapsplatform.google.com/" },
    ],
  },
]

export function Sponsors() {
  return (
    <section id="sponsors" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-extrabold">Sponsors</h2>
        <Dialog>
          <DialogTrigger className="g-gradient-border bg-[canvas] h-9 px-3 text-sm">Read More</DialogTrigger>
          <DialogContent className="g-gradient-border bg-[canvas] max-w-2xl">
            <DialogHeader>
              <DialogTitle>Partnerships</DialogTitle>
            </DialogHeader>
            <div className="text-sm space-y-3">
              <p>
                We partner with developer-first brands to enable education at scale—cloud credits, product workshops,
                and certification prep.
              </p>
              <p>
                Sponsorships help us run inclusive events and maintain open-source learning material, with transparent
                recognition across our touchpoints.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-8">
        {tiers.map((t) => (
          <div key={t.label}>
            <h3 className="text-xl font-bold mb-3">{t.label}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.logos.map((l) => (
                <article
                  key={l.name}
                  className="group g-gradient-border p-6 bg-[canvas] transition transform-gpu hover:-translate-y-1 flex flex-col items-center gap-4"
                >
                  <div className="relative h-20 w-full">
                    <Image alt={l.name} src={l.img || "/placeholder.svg"} fill className="object-contain" />
                  </div>
                  <h4 className="font-semibold text-center">{l.name}</h4>
                  <Link href={l.url} target="_blank">
                    <button className="g-gradient-border bg-[canvas] h-9 px-4 text-sm">Visit Website</button>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
