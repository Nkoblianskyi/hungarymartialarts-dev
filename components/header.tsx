"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/tactics", label: "Taktikák" },
  { href: "/history", label: "Történelem" },
  { href: "/blog", label: "Blog" },
  { href: "/rules", label: "Szabályok" },
  { href: "/about", label: "Rólunk" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "transition-all duration-300",
          "bg-background border-b border-border"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-0 group"
            aria-label="hungary martialarts főoldal"
          >
            <span
              className="uppercase font-display text-xl md:text-2xl font-800 tracking-tight text-foreground lowercase leading-none"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              hungary
            </span>
            <span
              className="font-display text-xl md:text-2xl font-800 tracking-tight text-brand lowercase leading-none"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              martialarts
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Fő navigáció">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium tracking-wide link-underline transition-colors",
                  pathname === l.href
                    ? "text-brand"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] w-8 h-8 justify-center items-end"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={open}
          >
            <span
              className={cn(
                "block h-px bg-foreground transition-all duration-300 origin-center",
                open ? "w-6 rotate-45 translate-y-[6px]" : "w-6"
              )}
            />
            <span
              className={cn(
                "block h-px bg-foreground transition-all duration-300",
                open ? "w-0 opacity-0" : "w-4"
              )}
            />
            <span
              className={cn(
                "block h-px bg-foreground transition-all duration-300 origin-center",
                open ? "w-6 -rotate-45 -translate-y-[6px]" : "w-6"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-foreground transition-transform duration-500 ease-in-out md:hidden flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 h-16">
          <Link href="/" className="flex items-center">
            <span className="font-display text-xl font-800 tracking-tight text-background lowercase" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              hungary
            </span>
            <span className="font-display text-xl font-800 tracking-tight text-brand lowercase" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              martialarts
            </span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Menü bezárása"
            className="w-8 h-8 flex items-center justify-center"
          >
            <span className="block w-6 h-px bg-background rotate-45 translate-y-px" />
            <span className="block w-6 h-px bg-background -rotate-45 -translate-y-px absolute" />
          </button>
        </div>
        <nav className="flex flex-col justify-center flex-1 px-8 gap-6" aria-label="Mobil navigáció">
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-background text-4xl font-display font-800 uppercase tracking-tight hover:text-brand transition-colors"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800, animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
