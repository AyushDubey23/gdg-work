"use client"

import Link from "next/link"
import { useState } from "react"
import { UserPlus, Mail, Lock, BadgeCheck } from "lucide-react"
import { RippleButton } from "@/components/ui/ripple-button"

export default function SignUpPage() {
  const [match, setMatch] = useState(true)

  return (
    <main className="min-h-dvh grid place-items-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_10%,_color-mix(in_oklab,var(--g-yellow)_80%,transparent)_0%,transparent_60%),radial-gradient(50%_50%_at_80%_10%,_color-mix(in_oklab,var(--g-blue)_70%,transparent)_0%,transparent_60%),radial-gradient(50%_60%_at_50%_90%,_color-mix(in_oklab,var(--g-red)_70%,transparent)_0%,transparent_60%)] opacity-25" />
      <section
        className="w-full max-w-md rounded-2xl p-6 md:p-8 backdrop-blur-xl bg-(--glass-bg) ring-1 ring-(--glass-ring) shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--g-green)_30%,transparent)] animate-in fade-in-50 slide-in-from-bottom-4"
        data-tilt
      >
        <header className="mb-6 text-center">
          <div className="mx-auto mb-3 size-12 rounded-full grid place-items-center bg-(--g-green) text-white shadow-lg">
            <UserPlus className="size-6" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold font-sans text-pretty">Create your account</h1>
          <p className="text-sm opacity-80">Join the largest developer community in the region</p>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.currentTarget as HTMLFormElement
            const pw = (form.querySelector('input[name="password"]') as HTMLInputElement)?.value
            const cpw = (form.querySelector('input[name="confirm"]') as HTMLInputElement)?.value
            setMatch(pw === cpw)
            if (pw === cpw) {
              window.alert("Demo only. Wire up auth provider as needed.")
            }
          }}
          className="grid gap-4"
        >
          <label className="grid gap-1">
            <span className="text-sm font-medium">Full Name</span>
            <div className="flex items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-card) px-3 py-2 focus-within:ring-2 focus-within:ring-(--g-green)">
              <BadgeCheck className="size-4 opacity-70" />
              <input type="text" required placeholder="Alex Doe" className="w-full bg-transparent outline-none" />
            </div>
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Email</span>
            <div className="flex items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-card) px-3 py-2 focus-within:ring-2 focus-within:ring-(--g-green)">
              <Mail className="size-4 opacity-70" />
              <input
                type="email"
                required
                placeholder="you@college.edu"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Password</span>
            <div className="flex items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-card) px-3 py-2 focus-within:ring-2 focus-within:ring-(--g-green)">
              <Lock className="size-4 opacity-70" />
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Confirm Password</span>
            <div className="flex items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-card) px-3 py-2 focus-within:ring-2 focus-within:ring-(--g-green)">
              <Lock className="size-4 opacity-70" />
              <input
                name="confirm"
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-transparent outline-none"
              />
            </div>
            {!match && <span className="text-xs text-(--g-red)">Passwords do not match</span>}
          </label>

          <RippleButton className="w-full bg-(--g-green) text-white hover:shadow-[0_0_0_3px_color-mix(in_oklab,var(--g-green)_40%,transparent),0_10px_30px_-10px_color-mix(in_oklab,var(--g-green)_60%,transparent)]">
            Sign Up
          </RippleButton>

          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-(--g-blue) underline underline-offset-4">
              Sign In
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}
