"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined")
    setVisible(false)
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[60] transition-transform duration-500 ease-out",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      role="dialog"
      aria-label="Cookie hozzájárulás"
    >
      <div className="bg-foreground text-background px-6 md:px-10 py-5 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm text-background/75 leading-relaxed max-w-2xl">
            Ez a weboldal sütiket (cookie-kat) használ a felhasználói élmény javítása érdekében.
            A folytatással elfogadod{" "}
            <Link href="/cookie-policy" className="text-background underline underline-offset-2 hover:text-brand transition-colors">
              cookie szabályzatunkat
            </Link>{" "}
            és{" "}
            <Link href="/privacy-policy" className="text-background underline underline-offset-2 hover:text-brand transition-colors">
              adatvédelmi irányelveinket
            </Link>
            .
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              className="text-sm text-background/50 hover:text-background transition-colors px-4 py-2 border border-background/20 hover:border-background/40"
            >
              Elutasítás
            </button>
            <button
              onClick={accept}
              className="text-sm bg-brand text-background px-6 py-2 font-semibold hover:bg-brand/90 transition-colors"
            >
              Elfogadom
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
