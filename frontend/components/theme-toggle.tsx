"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches
    const dark = saved ? saved === "dark" : prefersDark
    document.documentElement.classList.toggle("dark", dark)
    setIsDark(dark)
  }, [])

  if (!mounted) return null

  return (
    null
  )
}
