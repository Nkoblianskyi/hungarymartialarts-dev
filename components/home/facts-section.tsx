const facts = [
  {
    number: "01",
    title: "Az agyban is edz",
    desc: "A harcművészetek rendszeres gyakorlása javítja a döntéshozatali sebességet és a térbeli tudatosságot – a mentális állóképesség ugyanolyan fontos, mint a fizikai.",
  },
  {
    number: "02",
    title: "A lábmunka mindent meghatároz",
    desc: "A profik körülbelül 70%-a a győzelmét a lábmunkának és pozicionálásnak tulajdonítja, nem az ütőerőnek. A mozgékonyság megelőzi az erőt.",
  },
  {
    number: "03",
    title: "1500 kalória egy edzésen",
    desc: "Egy intenzív harcművészeti edzés akár 1500 kalóriát is égethet, ami a legtöbb sportághoz képest kiemelkedően magas értéknek számít.",
  },
  {
    number: "04",
    title: "A légzés fegyver",
    desc: "A precíz légzési technika ütésnél nem csak erőt ad, hanem az elveszett energiát is gyorsabban visszatölti és stabilizálja a törzset.",
  },
  {
    number: "05",
    title: "Reakcióidő: 0.2 mp",
    desc: "A tapasztalt harcosok reakcióideje edzetten akár 200 milliszekundumra csökkenthet, ami gyorsabb, mint amennyit szem rebben.",
  },
  {
    number: "06",
    title: "Magyar bajnokok öröksége",
    desc: "Magyarország az egy főre jutó olimpiai érmek számát tekintve a világ vezető harcsporthatalmai közé tartozik a historikus versenyeken.",
  },
]

export function FactsSection() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background overflow-hidden" aria-label="Érdekes tények a harcművészetekről">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-background/10 pb-12">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-3">
              Tudtad?
            </p>
            <h2
              className="font-display text-5xl md:text-7xl font-800 uppercase leading-none tracking-tighter text-balance text-background"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Egyedi<br />
              <span className="text-brand">Tények</span>
            </h2>
          </div>
          <p className="text-sm text-background/70 max-w-xs leading-relaxed">
            Meglepő összefüggések és ritka adatok, amelyek a harcművészetek mélyebb megértéséhez vezet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-background/10">
          {facts.map((fact) => (
            <div
              key={fact.number}
              className="border-r border-b border-background/10 p-8 group hover:bg-background/5 transition-colors"
            >
              <span
                className="font-display text-5xl font-800 text-brand/40 leading-none block mb-6"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                aria-hidden
              >
                {fact.number}
              </span>
              <h3
                className="font-display text-xl md:text-2xl font-800 uppercase tracking-tight leading-tight mb-4 text-background group-hover:text-brand transition-colors"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                {fact.title}
              </h3>
              <p className="text-sm text-background/80 leading-relaxed">{fact.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
