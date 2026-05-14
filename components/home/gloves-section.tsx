import Image from "next/image"

const gloveTypes = [
  {
    name: "Edzőkesztyű",
    weight: "12–16 oz",
    desc: "Általános zsákos és sparring edzéshez. Vastagabb párnázás, jobb kézfejvédelem.",
    detail: "Ideális a mindennapi edzésmunkához, ahol a folyamatos ütközés és kopás elkerülhetetlen.",
  },
  {
    name: "Sparringkesztyű",
    weight: "14–18 oz",
    desc: "Partnergyakorláshoz kialakított, extra puha belső réteggel ellátott kesztyű.",
    detail: "A nagyobb méret és puha töltet védelmet nyújt a partnernek küzdelem közben.",
  },
  {
    name: "Verseny kesztyű",
    weight: "8–10 oz",
    desc: "Versenyzésre engedélyezett, szabályozottan tömött kesztyű amatőr és profi ökölvívóknak.",
    detail: "Kisebb méret, precíz ütéstechnikához optimalizált forma, szabályozó testületek által jóváhagyott.",
  },
  {
    name: "Zsákkesztyű",
    weight: "6–12 oz",
    desc: "Egyéni zsák- és mancsedzéshez való könnyebb, kompaktabb kesztyűtípus.",
    detail: "Jobb csukló mozgékonyság, megfelelő az intenzív kombógyakorláshoz.",
  },
]

const shortTypes = [
  { name: "Boksz short", desc: "Magas derék, laza szár – klasszikus ökölvívó stílus, amely teljes mozgásszabadságot biztosít." },
  { name: "MMA short", desc: "Feszesebb, rugalmas anyag, amely magas rúgásokat és grappling mozdulatokat is lehetővé tesz." },
  { name: "Muay thai short", desc: "Rendkívül rövid, hasított szárú design a maximális lábmozgásért és térdütésekért." },
  { name: "Hosszú edzőnadrág", desc: "Kompressziós vagy laza fazon – védi a bőrt és szabályozza az izomhőmérsékletet edzés közben." },
]

export function GlovesSection() {
  return (
    <section className="py-24 md:py-32 bg-background" aria-label="Kesztyűk és rövidnadrágok típusai">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="border-b border-border pb-10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-3">
              Felszerelés részletesen
            </p>
            <h2
              className="font-display text-5xl md:text-6xl font-800 uppercase leading-none tracking-tighter text-balance"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Kesztyűk
              <br />
              <span className="text-brand">&amp; Shortok</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            A megfelelő felszerelés kiválasztása alapvetően meghatározza az edzés minőségét és a sportoló biztonságát.
          </p>
        </div>

        {/* Gloves grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-px">
          {gloveTypes.map((g, i) => (
            <div key={g.name} className="bg-background p-8 md:p-10 group hover:bg-secondary transition-colors">
              <div className="flex items-start justify-between mb-5">
                <span
                  className="font-display text-4xl font-800 uppercase tracking-tighter leading-none"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                >
                  0{i + 1}
                </span>
                <span className="text-xs text-brand font-semibold tracking-widest uppercase border border-brand px-2 py-1">
                  {g.weight}
                </span>
              </div>
              <h3
                className="font-display text-2xl md:text-3xl font-800 uppercase tracking-tight leading-tight mb-3 group-hover:text-brand transition-colors"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                {g.name}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed mb-3">{g.desc}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{g.detail}</p>
            </div>
          ))}
        </div>

        {/* Gloves image strip */}
        <div className="relative h-64 md:h-96 overflow-hidden mb-px bg-border">
          <Image
            src="/images/gloves.jpg"
            alt="Különböző típusú bokszkesztyűk"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display text-[8vw] font-800 uppercase tracking-tighter text-background/20"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              aria-hidden
            >
              KESZTYŰK
            </span>
          </div>
        </div>

        {/* Shorts section */}
        <div className="bg-secondary grid grid-cols-1 md:grid-cols-4 gap-px bg-border mt-px">
          {shortTypes.map((s) => (
            <div key={s.name} className="bg-secondary p-7 hover:bg-background transition-colors">
              <h3
                className="font-display text-lg font-800 uppercase tracking-tight leading-tight mb-3 text-foreground"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                {s.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
