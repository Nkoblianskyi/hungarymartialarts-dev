import Image from "next/image"
import Link from "next/link"

export function HistoryPreview() {
  return (
    <section className="py-24 md:py-32 bg-surface text-surface-foreground overflow-hidden" aria-label="Harcművészetek Magyarországon – történeti előnézet">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-2 relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/images/history-preview.jpg"
              alt="Magyar harcművészetek történeti archív fotó"
              fill
              className="object-cover grayscale opacity-80"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-surface to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="text-[9px] tracking-[0.45em] uppercase text-surface-foreground/40 border border-surface-foreground/20 px-2 py-1">
                Archív
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-6">
              Történelem
            </p>
            <h2
              className="font-display text-5xl md:text-6xl lg:text-7xl font-800 uppercase leading-none tracking-tighter text-balance text-surface-foreground mb-8"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Magyar<br />
              <span className="text-brand">Harcmű</span><br />
              vészetek
            </h2>
            <p className="text-surface-foreground/80 leading-relaxed mb-4 max-w-lg">
              A harcművészetek magyarországi gyükerei évszázadokra nyúlnak vissza. A nomád harci hagyományoktól a modern olimpiai sportokig az ország egyedülálló küzdősport kultúrát fejlesztett ki.
            </p>
            <p className="text-surface-foreground/80 leading-relaxed mb-10 max-w-lg">
              A XIX. és XX. századi fejlődés során a harcművészetek a fizikai erő és szellemi fegyelem egységes rendszerévé váltak.
            </p>
            <Link
              href="/history"
              className="inline-flex items-center gap-3 border border-brand text-brand px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-brand hover:text-background transition-colors"
            >
              Teljes történelem <span aria-hidden>&#8594;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Timeline strip */}
      <div className="mt-16 border-t border-surface-foreground/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee" aria-hidden>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-10 pr-10 py-5 text-[10px] tracking-[0.4em] uppercase text-surface-foreground/50">
              <span>1896</span>
              <span className="text-brand">Olimpiai bemutatkozás</span>
              <span>1920</span>
              <span className="text-brand">Szövetség megalapítása</span>
              <span>1952</span>
              <span className="text-brand">Olimpiai bajnokság</span>
              <span>1970</span>
              <span className="text-brand">Modern fejlődés</span>
              <span>2000</span>
              <span className="text-brand">Küzdősport reneszánsz</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
