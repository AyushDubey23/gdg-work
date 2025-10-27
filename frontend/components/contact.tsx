"use client"

import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-8">
      <div className="grid gap-4">
        <div className="rounded-2xl p-6 bg-(--glass-bg) ring-1 ring-(--glass-ring)">
          <h3 className="font-bold mb-2">Contact Info</h3>
          <p className="opacity-90">
            Email:{" "}
            <a className="underline text-(--g-blue)" href="mailto:gdgmmmut@gmail.com">
              gdgmmmut@gmail.com
            </a>
          </p>
          <p className="opacity-90">Address: MMMUT Campus, Gorakhpur, Uttar Pradesh, India</p>
        </div>
        <div className="rounded-2xl p-6 bg-(--glass-bg) ring-1 ring-(--glass-ring)">
          <h3 className="font-bold mb-2">Join Our Community</h3>
          <Link href="https://gdg.community.dev/" target="_blank">
            <button className="px-4 py-2 rounded-xl bg-(--g-blue) text-white">Join GDG</button>
          </Link>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          window.alert("Message sent. Thank you!")
        }}
        className="grid gap-3 rounded-2xl p-6 bg-(--glass-bg) ring-1 ring-(--glass-ring)"
      >
        <div className="grid sm:grid-cols-2 gap-3">
          <input
            required
            placeholder="Full name"
            className="rounded-xl border border-(--color-border) bg-(--color-card) px-3 py-2 outline-none focus:ring-2 focus:ring-(--g-blue)"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="rounded-xl border border-(--color-border) bg-(--color-card) px-3 py-2 outline-none focus:ring-2 focus:ring-(--g-blue)"
          />
        </div>
        <input
          required
          placeholder="Subject"
          className="rounded-xl border border-(--color-border) bg-(--color-card) px-3 py-2 outline-none focus:ring-2 focus:ring-(--g-blue)"
        />
        <textarea
          required
          placeholder="Message"
          rows={5}
          className="rounded-xl border border-(--color-border) bg-(--color-card) px-3 py-2 outline-none focus:ring-2 focus:ring-(--g-blue)"
        />
        <div className="flex items-center gap-3">
          <button
            className="px-5 py-2 rounded-xl bg-(--g-yellow) text-black hover:shadow-[0_0_0_3px_color-mix(in_oklab,var(--g-yellow)_40%,transparent)]"
            data-cursor="interactive"
          >
            Send Message
          </button>
          <Link href="https://gdg.community.dev/" target="_blank" className="underline text-(--g-green)">
            Join Our Community
          </Link>
        </div>
      </form>
    </section>
  )
}
