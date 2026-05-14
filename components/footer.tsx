import Link from "next/link"

const footerLinks = {
  tartalom: [
    { href: "/tactics", label: "Taktikák" },
    { href: "/history", label: "Történelem" },
    { href: "/rules", label: "Szabályok" },
    { href: "/blog", label: "Blog" },
  ],
  info: [
    { href: "/about", label: "Rólunk" },
    { href: "/cookie-policy", label: "Cookie Szabályzat" },
    { href: "/privacy-policy", label: "Adatvédelmi Szabályzat" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-surface text-surface-foreground overflow-hidden">
      {/* Big wordmark background */}
      <div className="border-t border-surface-foreground/10 pt-16 pb-8 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="inline-flex items-end mb-4">
              <span
                className="uppercase font-display text-3xl font-800 tracking-tight text-surface-foreground lowercase"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                hungary
              </span>
              <span
                className="font-display text-3xl font-800 tracking-tight text-brand lowercase"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                martialarts
              </span>
            </Link>
            <p className="text-surface-foreground/75 text-sm leading-relaxed max-w-xs">
              A harcművészetek iránt szenvedélyesek közössége Magyarországon.
              Technikai tudás, történelem, edzéstervek.
            </p>
            <a
              href="mailto:info@hungarymartialarts.com"
              className="inline-block mt-6 text-sm text-surface-foreground/80 hover:text-brand transition-colors link-underline"
            >
              info@hungarymartialarts.com
            </a>
          </div>

          {/* Nav columns */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-surface-foreground/60 mb-5">
              Tartalom
            </h3>
            <ul className="space-y-3">
              {footerLinks.tartalom.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-surface-foreground/70 hover:text-surface-foreground transition-colors link-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-surface-foreground/60 mb-5">
              Információ
            </h3>
            <ul className="space-y-3">
              {footerLinks.info.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-surface-foreground/70 hover:text-surface-foreground transition-colors link-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-surface-foreground/55">
          <span>
            &copy; {new Date().getFullYear()} hungarymartialarts.com. Minden jog fenntartva.
          </span>
          <span className="uppercase tracking-widest text-[10px]">Harcművészetek Magyarországon</span>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="overflow-hidden px-6 md:px-10 pb-2 select-none pointer-events-none" aria-hidden>
        <p
          className="font-display text-[14vw] font-800 uppercase tracking-tighter leading-none text-surface-foreground/[0.04] whitespace-nowrap"
          style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
        >
          HARCMŰVÉSZETEK
        </p>
      </div>
    </footer>
  )
}
