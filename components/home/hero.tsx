import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden bg-foreground text-background"
      aria-label="Főoldal nyitó szekció"
    >
      {/* Background image — covers the full section including the area behind the header */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-martial-arts.jpg"
          alt="Harcművész edzésen"
          fill
          priority
          className="object-cover object-top opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/80" />
      </div>

      <div className="relative flex flex-col flex-1">

        {/* Marquee strip */}
        <div className="border-b border-background/10 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee" aria-hidden>
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-8 pr-8 text-[11px] tracking-[0.35em] uppercase text-background/60 font-medium">
                <span>Küzdősportok</span>
                <span className="w-1 h-1 rounded-full bg-brand" />
                <span>Edzéstechnikák</span>
                <span className="w-1 h-1 rounded-full bg-brand" />
                <span>Harcász Taktikák</span>
                <span className="w-1 h-1 rounded-full bg-brand" />
                <span>Magyar Harcművészet</span>
                <span className="w-1 h-1 rounded-full bg-brand" />
                <span>Bokszolás</span>
                <span className="w-1 h-1 rounded-full bg-brand" />
              </span>
            ))}
          </div>
        </div>

        {/* Main hero content — pinned to bottom */}
        <div className="flex-1 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10 max-w-[1400px] mx-auto w-full">
          {/* Vertical label */}
          <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-3" aria-hidden>
            <span className="writing-mode-vertical text-[10px] tracking-[0.4em] uppercase text-background/55 font-medium rotate-90 whitespace-nowrap">
              hungarymartialarts.com
            </span>
            <div className="w-px h-20 bg-background/20" />
          </div>

          <div className="max-w-5xl">
            <p className="text-[11px] tracking-[0.4em] uppercase text-brand font-semibold mb-6">
              Magyarország Harcművészeti Portálja
            </p>
            <h1
              className="font-display text-[13vw] md:text-[10vw] lg:text-[9vw] font-800 uppercase leading-[0.9] tracking-tighter text-balance text-background mb-8"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              HARC
              <br />
              <span className="text-brand">MŰVÉ</span>
              <br />
              SZETEK
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <p className="text-base md:text-lg text-background/80 max-w-md leading-relaxed">
                Technikák, taktikák és történelem. Mindaz, amit a harcművészetekről tudni érdemes.
              </p>
              <Link
                href="/tactics"
                className="shrink-0 inline-flex items-center gap-3 bg-brand text-background px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-brand/90 transition-colors"
              >
                Taktikák felfedezése
                <span aria-hidden>&#8594;</span>
              </Link>
            </div>
          </div>

          {/* Bottom stats row */}
          <div className="mt-16 border-t border-background/10 pt-8 grid grid-cols-3 gap-4 max-w-xl">
            {[
              { num: "15+", label: "Harcművészeti ág" },
              { num: "100+", label: "Technika részletesen" },
              { num: "Magyar", label: "Fókusz" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="font-display text-2xl md:text-3xl font-800 text-background uppercase"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                >
                  {s.num}
                </p>
                <p className="text-xs text-background/65 mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
