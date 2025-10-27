"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  provider: "github" | "google" | "email"
}

interface AuthContextType {
  user: User | null
  login: (user: User) => void
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const stored = localStorage.getItem("gdg_user")
      if (stored) {
        const parsedUser = JSON.parse(stored)
        setUser(parsedUser)
        console.log("[v0] User loaded from localStorage:", parsedUser)
      }
    } catch (e) {
      console.error("[v0] Failed to parse stored user:", e)
      localStorage.removeItem("gdg_user")
    }
    setIsLoading(false)
  }, [])

  const login = (newUser: User) => {
    console.log("[v0] Logging in user:", newUser)
    setUser(newUser)
    localStorage.setItem("gdg_user", JSON.stringify(newUser))
  }

  const logout = () => {
    console.log("[v0] Logging out user")
    setUser(null)
    localStorage.removeItem("gdg_user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
