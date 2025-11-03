"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Team" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, isLoading } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[color-mix(in_oklab,var(--color-background)_75%,transparent)] border-b border-(--color-border)">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3 group" aria-label="GDG On Campus MMMUT">
          <div className="relative h-7 w-7">
            <Image src="/GDG.png" alt="GDG Logo" fill className="object-contain" />
          </div>
          <span className="font-extrabold font-sans text-lg tracking-tight">GDG On Campus MMMUT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[linear-gradient(90deg,var(--g-blue),var(--g-red),var(--g-yellow),var(--g-green))] hover:after:w-full after:transition-all after:duration-500"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            {!isLoading && (
              <>
                {user ? (
                  <div className="flex items-center gap-2">
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium">{user.name}</span>
                  </div>
                ) : (
                  <Link
                    href="/sign-in"
                    className="g-gradient-border bg-[canvas] h-9 px-4 grid place-items-center font-semibold text-sm"
                  >
                    Sign In/Sign Up
                  </Link>
                )}
              </>
            )}
          </div>
        </nav>

        <button
          className="md:hidden size-10 grid place-items-center g-gradient-border bg-[canvas]"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-screen w-80 max-w-[88%] bg-(--color-card) border-l border-(--color-border)
                      shadow-2xl p-6 transition-transform duration-300 ease-out flex flex-col overflow-y-auto ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="font-extrabold">Menu</span>
            <button
              className="size-10 grid place-items-center bg-[canvas] border border-(--color-border) hover:bg-[color-mix(in_oklab,var(--g-blue)_6%,transparent)] transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="grid flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base py-4 px-3 border-b border-(--color-border) hover:bg-[color-mix(in_oklab,var(--g-blue)_6%,transparent)] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            {!isLoading && (
              <>
                {user ? (
                  <div className="py-4 px-3 border-b border-(--color-border) flex items-center gap-3">
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs opacity-70">{user.email}</p>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/sign-in"
                    onClick={() => setOpen(false)}
                    className="text-base py-4 px-3 border-b border-(--color-border) hover:bg-[color-mix(in_oklab,var(--g-blue)_6%,transparent)] transition-colors font-semibold"
                  >
                    Sign In/Sign Up
                  </Link>
                )}
              </>
            )}
          </nav>
        </aside>
      </div>
    </header>
  )
}
