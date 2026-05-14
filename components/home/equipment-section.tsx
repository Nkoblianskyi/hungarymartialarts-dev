import Image from "next/image"

const equipment = [
  {
    name: "Bokszzsák",
    category: "Alapfelszerelés",
    desc: "Erőfejlesztés, kombók és állóképesség edzéséhez nélkülözhetetlen. Súlya és keménysége az edzés típusától függ.",
  },
  {
    name: "Kézpólya",
    category: "Védelem",
    desc: "A csukló és csontköz védelme ütés közben. Helyes alkalmazása megelőzi a sérüléseket és stabilizálja az ízületet.",
  },
  {
    name: "Szájvédő",
    category: "Fejvédelem",
    desc: "Sparringnál kötelező. Védi a fogakat, az állkapocsízületet és csökkenti a fejrázás kockázatát.",
  },
  {
    name: "Ugrókötél",
    category: "Kondíció",
    desc: "A lábmunka, a koordináció és a kardiovaszkuláris állóképesség fejlesztésének leghatékonyabb eszköze.",
  },
  {
    name: "Mancs",
    category: "Partneredzés",
    desc: "Edzőpartneres munkához, pontosság és sebesség fejlesztéséhez. Különböző formák különböző technikákhoz.",
  },
  {
    name: "Fejvédő",
    category: "Sparring",
    desc: "Full-contact sparringhoz elengedhetetlen. Védi a szemöldököt, halántékot és az orrt az ütések hatásától.",
  },
]

export function EquipmentSection() {
  return (
    <section className="py-24 md:py-32 bg-background" aria-label="Harcművészeti felszerelések és eszközök">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-3">
            Felszerelés
          </p>
          <h2
            className="font-display text-5xl md:text-7xl font-800 uppercase leading-none tracking-tighter text-balance"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            Eszközök<br />
            <span className="text-brand">&amp; Kellékek</span>
          </h2>
        </div>

        {/* Horizontal scrollable list on mobile, grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-border">
          {equipment.map((item) => (
            <div
              key={item.name}
              className="border-r border-b border-border p-7 hover:bg-secondary transition-colors group"
            >
              <span className="text-[9px] tracking-[0.4em] uppercase text-brand font-semibold block mb-4">
                {item.category}
              </span>
              <h3
                className="font-display text-2xl md:text-3xl font-800 uppercase tracking-tight leading-none mb-4 group-hover:text-brand transition-colors"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Wide equipment image */}
        <div className="relative mt-px h-64 md:h-80 overflow-hidden border-x border-b border-border">
          <Image
            src="/images/equipment.jpg"
            alt="Harcművészeti felszerelések összeállítása"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
            <p
              className="font-display text-[5vw] font-800 uppercase tracking-tighter text-background/20"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              aria-hidden
            >
              EDZŐESZKÖZÖK
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
