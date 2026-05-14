import Image from "next/image"
import Link from "next/link"

const items = [
  { tag: "Edzésterv", title: "Alapütések és pozicionálás", desc: "Az ideális boksz alap a lábmunkán és a pontos pozicionáláson múlik. Fedezd fel a fundamentumokat." },
  { tag: "Taktika", title: "Védekezési technikák mesterkurzus", desc: "A csúcsosztályú harcosok kulcsát az ütések elhárítása és a szögletes mozgás jelenti." },
  { tag: "Kondíció", title: "Intervall edzéstervek harcosoknak", desc: "Magas intenzitású edzések, amelyek a teljesítményt és az állóképességet egyszerre fejlesztik." },
]

export function TacticsPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-background" aria-label="Taktikák és edzéstippek előnézet">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-3">
              Taktikák &amp; Tippek
            </p>
            <h2
              className="font-display text-5xl md:text-7xl font-800 uppercase leading-none tracking-tighter text-balance"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Edzési<br />
              <span className="text-brand">Tudásbázis</span>
            </h2>
          </div>
          <Link
            href="/tactics"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold tracking-wide border-b border-foreground pb-1 hover:border-brand hover:text-brand transition-colors"
          >
            Összes taktika <span aria-hidden>&#8594;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border">
          {/* Left: big image */}
          <div className="relative overflow-hidden" style={{ minHeight: 460 }}>
            <Image
              src="/images/tactics-preview.jpg"
              alt="Boksz technikák – ökölvívó ütés"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-foreground/30" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="inline-block text-[10px] tracking-[0.35em] uppercase text-background/70 mb-2">Kiemelt</span>
              <p
                className="font-display text-3xl font-800 uppercase text-background leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                Profi technikák<br />lépésről lépésre
              </p>
            </div>
          </div>

          {/* Right: list */}
          <div className="divide-y divide-border">
            {items.map((item) => (
              <div key={item.title} className="p-8 group hover:bg-secondary transition-colors cursor-pointer">
                <span className="text-[10px] tracking-[0.35em] uppercase text-brand font-semibold mb-3 block">
                  {item.tag}
                </span>
                <h3
                  className="font-display text-xl md:text-2xl font-800 uppercase leading-tight tracking-tight mb-3 group-hover:text-brand transition-colors text-balance"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
