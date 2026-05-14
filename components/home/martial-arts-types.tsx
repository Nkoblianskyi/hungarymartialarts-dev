const types = [
  {
    abbr: "BX",
    name: "Boksz",
    origin: "Nyugati",
    desc: "Az ökölvívás tiszta formája – csak kezek, precíz technika, lábtaktika és stratégiai gondolkodás.",
  },
  {
    abbr: "MT",
    name: "Muay Thai",
    origin: "Thaiföldi",
    desc: "A nyolc végtagot alkalmazó harci rendszer: ököl, könyök, lábszár, térd. Thaiföldi nemzeti sport.",
  },
  {
    abbr: "JD",
    name: "Judo",
    origin: "Japán",
    desc: "A lágy út harcászata. Dobások, emelések és földre viteli technikák rendszere, olimpiai sport.",
  },
  {
    abbr: "KR",
    name: "Karate",
    origin: "Japán",
    desc: "Az üres kézzel való védekezés és támadás rendszere, ahol a forma és a szellem egyensúlya a kulcs.",
  },
  {
    abbr: "WR",
    name: "Birkózás",
    origin: "Görög-Római",
    desc: "A legősibb küzdősport. Fogás, dobás és kontroll technikák rendszere, Magyarország olimpiai erőssége.",
  },
  {
    abbr: "KK",
    name: "Kickboksz",
    origin: "Vegyes",
    desc: "A boksz és a harcászati rúgástechnikák ötvözete. Dinamikus, látványos és hatékony küzdőrendszer.",
  },
  {
    abbr: "MMA",
    name: "MMA",
    origin: "Vegyes",
    desc: "Vegyes harcászati rendszer – az összes küzdőstílus legjobb elemeit ötvözi egy teljes harci filozófiában.",
  },
  {
    abbr: "SW",
    name: "Szambo",
    origin: "Szovjet",
    desc: "Orosz-szovjet alapú harci rendszer, amely a birkózást, a judo technikákat és a talpra állást ötvözi.",
  },
]

export function MartialArtsTypes() {
  return (
    <section className="py-24 md:py-32 bg-secondary" aria-label="Harcművészeti stílusok és típusok">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-12">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-3">
              Stílusok
            </p>
            <h2
              className="font-display text-5xl md:text-7xl font-800 uppercase leading-none tracking-tighter text-balance"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Harcmű<br />
              vészeti<br />
              <span className="text-brand">Ágazatok</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Minden küzdőrendszer eltérő filozófiával, technikával és testmozgással rendelkezik. Ismerd meg mindegyiket.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-border border-y border-border">
          {types.map((type, i) => (
            <div
              key={type.name}
              className="flex items-center gap-6 md:gap-10 py-6 hover:bg-background transition-colors group px-0"
            >
              {/* Abbreviation */}
              <span
                className="font-display text-sm font-800 tracking-wider text-brand/60 w-10 shrink-0"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                aria-hidden
              >
                {type.abbr}
              </span>

              {/* Index */}
              <span className="text-xs text-muted-foreground w-6 shrink-0 hidden md:block">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Name */}
              <h3
                className="font-display text-2xl md:text-3xl font-800 uppercase tracking-tight leading-none w-36 md:w-48 shrink-0 group-hover:text-brand transition-colors"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                {type.name}
              </h3>

              {/* Origin */}
              <span className="text-xs text-muted-foreground tracking-widest uppercase hidden md:block w-28 shrink-0">
                {type.origin}
              </span>

              {/* Desc */}
              <p className="text-sm text-muted-foreground leading-relaxed hidden lg:block">
                {type.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
