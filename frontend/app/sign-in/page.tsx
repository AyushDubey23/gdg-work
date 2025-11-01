"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Mail, Lock, Sun, Github, LogIn, Linkedin } from "lucide-react"
import { RippleButton } from "@/components/ui/ripple-button"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"

export default function SignInPage() {
  const [remember, setRemember] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleEmailSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      const newUser = {
        id: Math.random().toString(),
        name: email.split("@")[0],
        email,
        provider: "email" as const,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      }
      console.log("[v0] Email sign in:", newUser)
      login(newUser)
      setTimeout(() => {
        router.push("/")
      }, 100)
    }
  }

  const handleGitHubSignIn = () => {
    const mockGitHubUser = {
      id: "github_" + Math.random().toString(),
      name: "GitHub User",
      email: "user@github.com",
      provider: "github" as const,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=github",
    }
    console.log("[v0] GitHub sign in:", mockGitHubUser)
    login(mockGitHubUser)
    setTimeout(() => {
      router.push("/")
    }, 100)
  }

  const handleGoogleSignIn = () => {
    const mockGoogleUser = {
      id: "google_" + Math.random().toString(),
      name: "Google User",
      email: "user@google.com",
      provider: "google" as const,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=google",
    }
    console.log("[v0] Google sign in:", mockGoogleUser)
    login(mockGoogleUser)
    setTimeout(() => {
      router.push("/")
    }, 100)
  }

  const handleLinkedInSignIn = () => {
    const mockLinkedInUser = {
      id: "linkedin_" + Math.random().toString(),
      name: "LinkedIn User",
      email: "user@linkedin.com",
      provider: "github" as const,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=linkedin",
    }
    console.log("[v0] LinkedIn sign in:", mockLinkedInUser)
    login(mockLinkedInUser)
    setTimeout(() => {
      router.push("/")
    }, 100)
  }

  return (
    <main className="min-h-dvh grid place-items-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_10%,_color-mix(in_oklab,var(--g-blue)_90%,transparent)_0%,transparent_60%),radial-gradient(50%_50%_at_80%_10%,_color-mix(in_oklab,var(--g-red)_75%,transparent)_0%,transparent_60%),radial-gradient(50%_60%_at_50%_90%,_color-mix(in_oklab,var(--g-green)_75%,transparent)_0%,transparent_60%)] opacity-25" />
      <section
        className="w-full max-w-md p-6 md:p-8 backdrop-blur-xl bg-(--glass-bg) ring-1 ring-(--glass-ring) shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--g-blue)_30%,transparent)] animate-in fade-in-50 slide-in-from-bottom-4"
        data-tilt
      >
        <header className="mb-6 text-center">
          <div className="mx-auto mb-3 size-12 rounded-full grid place-items-center bg-(--g-blue) text-white shadow-lg">
            <LogIn className="size-6" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold font-sans text-pretty">Welcome Back</h1>
          <p className="text-sm opacity-80">Sign in to continue your GDG journey</p>
        </header>

        <form onSubmit={handleEmailSignIn} className="grid gap-4">
          <label className="grid gap-1">
            <span className="text-sm font-medium">Email</span>
            <div className="flex items-center gap-2 border border-(--color-border) bg-(--color-card) px-3 py-2 focus-within:ring-2 focus-within:ring-(--g-blue)">
              <Mail className="size-4 opacity-70" />
              <input
                type="email"
                required
                placeholder="you@college.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent outline-none"
              />
            </div>
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Password</span>
            <div className="flex items-center gap-2 border border-(--color-border) bg-(--color-card) px-3 py-2 focus-within:ring-2 focus-within:ring-(--g-blue)">
              <Lock className="size-4 opacity-70" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent outline-none"
              />
            </div>
          </label>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-(--g-blue)"
              />
              Remember me
            </label>
            <Link href="#" className="underline decoration-(--g-blue) hover:opacity-80">
              Forgot password?
            </Link>
          </div>

          <RippleButton className="w-full bg-(--g-blue) text-white hover:shadow-[0_0_0_3px_color-mix(in_oklab,var(--g-blue)_40%,transparent),0_10px_30px_-10px_color-mix(in_oklab,var(--g-blue)_60%,transparent)]">
            Sign In
          </RippleButton>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-(--color-border)" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-(--glass-bg) px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              aria-label="Continue with Google"
              className="size-10 border border-(--g-blue) hover:shadow-[0_0_0_3px_color-mix(in_oklab,var(--g-blue)_40%,transparent)] transition will-change-transform grid place-items-center"
            >
              <Sun className="size-5 text-(--g-blue)" />
            </button>
            <button
              type="button"
              onClick={handleGitHubSignIn}
              aria-label="Continue with GitHub"
              className="size-10 border border-(--g-green) hover:shadow-[0_0_0_3px_color-mix(in_oklab,var(--g-green)_40%,transparent)] transition grid place-items-center"
            >
              <Github className="size-5 text-(--g-green)" />
            </button>
            <button
              type="button"
              onClick={handleLinkedInSignIn}
              aria-label="Continue with LinkedIn"
              className="size-10 border border-(--g-red) hover:shadow-[0_0_0_3px_color-mix(in_oklab,var(--g-red)_40%,transparent)] transition grid place-items-center"
            >
              <Linkedin className="size-5 text-(--g-red)" />
            </button>
          </div>

          <p className="text-center text-sm mt-2">
            New here?{" "}
            <Link href="/sign-up" className="text-(--g-green) underline underline-offset-4">
              Create an account
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}
