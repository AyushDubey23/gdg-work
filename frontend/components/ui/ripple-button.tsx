"use client"

import type { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

export function RippleButton(
  props: PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> & {
    className?: string
  },
) {
  const { className, children, onClick, ...rest } = props
  return (
    <button
      {...rest}
      onClick={(e) => {
        const btn = e.currentTarget
        const circle = document.createElement("span")
        const diameter = Math.max(btn.clientWidth, btn.clientHeight)
        const radius = diameter / 2
        const rect = btn.getBoundingClientRect()
        circle.style.width = circle.style.height = `${diameter}px`
        circle.style.left = `${e.clientX - rect.left - radius}px`
        circle.style.top = `${e.clientY - rect.top - radius}px`
        circle.className = "ripple"
        const ripple = btn.getElementsByClassName("ripple")[0]
        if (ripple) ripple.remove()
        btn.appendChild(circle)
        onClick?.(e)
      }}
      className={cn(
        "relative overflow-hidden px-5 py-3 rounded-xl transition select-none active:scale-[0.99] bg-chart-4",
        "shadow hover:brightness-[1.03]",
        className,
      )}
    >
      {children}
    </button>
  )
}
