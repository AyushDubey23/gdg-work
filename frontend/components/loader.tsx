"use client"

import { useEffect, useState } from "react"

export default function Loader() {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 1200)
    return () => clearTimeout(t)
  }, [])

  if (hide) return null

  return (
    <div className="fixed inset-0 z-[120] grid place-items-center bg-background">
      <div className="loader-wrap">
        <img src="/gdg.png" alt="GDG Loader" className="loader-gdg" />
      </div>
    </div>
  )
}
