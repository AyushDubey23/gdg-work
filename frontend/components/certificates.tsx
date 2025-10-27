"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheck, ShieldAlert, Camera } from "lucide-react"

export function Certificates() {
  const [serial, setSerial] = useState("")
  const [open, setOpen] = useState(false)
  const [valid, setValid] = useState<boolean | null>(null)
  const [scan, setScan] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!scan) return
    const v = videoRef.current
    if (!v) return

    let stream: MediaStream
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then((s) => {
      stream = s
      v.srcObject = s
      return v.play()
    })

    const tick = () => requestAnimationFrame(tick)
    tick()

    return () => {
      stream?.getTracks().forEach((t) => t.stop())
    }
  }, [scan])

  const verify = (code: string) => {
    // Demo rule: serials starting with "GDG-" are valid
    const ok = /^GDG-[A-Z0-9]{5,}$/.test(code)
    setValid(ok)
    setOpen(true)
  }

  return (
    <section id="certificates" className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Certificate Verification</h2>

      <div className="rounded-2xl p-6 bg-(--glass-bg) ring-1 ring-(--glass-ring) backdrop-blur-xl grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-medium">Serial Number</span>
          <input
            value={serial}
            onChange={(e) => setSerial(e.target.value.toUpperCase())}
            placeholder="GDG-IT23A06"
            className="w-full rounded-xl border border-(--color-border) bg-(--color-card) px-3 py-2 outline-none focus:ring-2 focus:ring-(--g-blue)"
          />
        </label>

        <div className="flex gap-3">
          <button
            onClick={() => verify(serial)}
            className="px-4 py-2 rounded-xl bg-(--g-green) text-white hover:shadow-[0_0_0_3px_color-mix(in_oklab,var(--g-green)_40%,transparent)]"
            data-cursor="interactive"
          >
            Verify Now
          </button>
          <button
            onClick={() => setScan((s) => !s)}
            className="px-4 py-2 rounded-xl ring-1 ring-(--g-yellow) hover:shadow-[0_0_0_3px_color-mix(in_oklab,var(--g-yellow)_40%,transparent)]"
            data-cursor="interactive"
          >
            <Camera className="inline-block size-4 mr-2" />
            {scan ? "Stop Scanner" : "Use QR Scanner"}
          </button>
        </div>

        {scan && (
          <div className="rounded-xl overflow-hidden ring-1 ring-(--glass-ring)">
            <video ref={videoRef} className="w-full h-60 object-cover" playsInline muted />
          </div>
        )}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-sm rounded-2xl p-6 bg-(--color-card) ring-1 ring-(--color-border)"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-3">
              {valid ? (
                <ShieldCheck className="size-6 text-(--g-green)" />
              ) : (
                <ShieldAlert className="size-6 text-(--g-red)" />
              )}
              <h3 className="text-lg font-bold">Verification Result</h3>
            </div>
            <p className="opacity-90">
              {valid
                ? "This certificate serial is valid and recognized by GDG On Campus MMMUT."
                : "Invalid serial. Please check and try again."}
            </p>
            <button className="mt-4 px-4 py-2 rounded-xl bg-(--g-blue) text-white" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
