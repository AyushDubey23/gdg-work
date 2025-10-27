"use client"

import { useEffect } from "react"

export function AnimatedCursor() {
  useEffect(() => {
    const root = document.createElement("div")
    root.className = "gdg-cursor-root"
    document.body.appendChild(root)

    const dots: HTMLDivElement[] = []
    const maxDots = 20 // increased for smoother trail
    let lastX = 0
    let lastY = 0

    const addDot = (x: number, y: number, intense = false) => {
      const dot = document.createElement("div")
      dot.className = `gdg-cursor-dot ${intense ? "intense" : ""}`
      dot.style.left = `${x}px`
      dot.style.top = `${y}px`
      root.appendChild(dot)
      dots.push(dot)
      if (dots.length > maxDots) {
        const d = dots.shift()
        d?.remove()
      }
      requestAnimationFrame(() => dot.classList.add("fade"))
      setTimeout(() => dot.remove(), 700)
    }

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX
      lastY = e.clientY
      addDot(lastX, lastY, (e.target as HTMLElement)?.closest('a,button,[data-cursor="interactive"]') ? true : false)
    }
    const onClick = () => addDot(lastX, lastY, true)

    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("click", onClick)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("click", onClick)
      root.remove()
    }
  }, [])

  return null
}
