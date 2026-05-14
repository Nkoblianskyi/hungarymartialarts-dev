import Link from "next/link"

const rules = [
  { num: "01", title: "Verseny kategóriák", desc: "Súlycsoportok és korcsoportok rendszere az igazságos versengés érdekében." },
  { num: "02", title: "Pontozási rendszer", desc: "A bírók értékelési kritériumai: technika, agresivitás, védekezés, hatékonyság." },
  { num: "03", title: "Tilott fogások", desc: "Hátulról mért ütések, gerincre irányuló csapások, tarkóra mért ütések tiltása." },
  { num: "04", title: "A mérkőzés menete", desc: "Menetek száma, időtartam, szünet és a bíró szerepe a szabályos lebonyolításban." },
]

export function RulesPreview() {
  return (
    <section className="py-24 md:py-32 bg-background" aria-label="Harcművészeti szabályok előnézet">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-3">
              Szabályok
            </p>
            <h2
              className="font-display text-5xl md:text-6xl font-800 uppercase leading-none tracking-tighter text-balance mb-8"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Játékszabályok<br />
              <span className="text-brand">&amp; Fegyelem</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-md">
              A harcművészetek alapját a szabályok és a kölcsönös tisztelet adja. Minden sport saját kódexszel rendelkezik, amelyek a biztonságos és fair versenyzést garantálják.
            </p>
            <Link
              href="/rules"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-semibold tracking-wide hover:bg-brand transition-colors"
            >
              Teljes szabályzat <span aria-hidden>&#8594;</span>
            </Link>
          </div>

          {/* Right: rules list */}
          <div className="divide-y divide-border border-y border-border">
            {rules.map((r) => (
              <div key={r.num} className="flex gap-6 py-7 group hover:bg-secondary transition-colors px-1">
                <span
                  className="font-display text-4xl font-800 text-brand/30 leading-none shrink-0 pt-1"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                  aria-hidden
                >
                  {r.num}
                </span>
                <div>
                  <h3
                    className="font-display text-xl font-800 uppercase tracking-tight leading-tight mb-2 group-hover:text-brand transition-colors"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
