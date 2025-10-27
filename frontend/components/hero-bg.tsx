"use client"

/* New hero abstract background that adapts to light/dark with animated layers */
export default function HeroBackground() {
  const isDark = typeof window !== "undefined" && document.documentElement.classList.contains("dark")
  return (
    <div className={`hero-bg ${isDark ? "dark" : "light"}`} aria-hidden="true">
      <div className="layer l1" />
      <div className="layer l2" />
      <div className="layer l3" />
      <div className="grid-overlay" />
    </div>
  )
}
