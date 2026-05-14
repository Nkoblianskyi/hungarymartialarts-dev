import type { Metadata } from "next"
import Image from "next/image"
import { ContactForm } from "@/components/about/contact-form"

export const metadata: Metadata = {
  title: "Rólunk | hungary martialarts",
  description:
    "Ismerd meg a hungary martialarts portált: küldetésünk, csapatunk és a kapcsolatfelvétel lehetőségei.",
}

const values = [
  {
    num: "01",
    title: "Hitelesség",
    desc: "Minden tartalom tapasztalt harcászok és edzők által ellenőrzött, pontos és hiteles tudást közvetít.",
  },
  {
    num: "02",
    title: "Magyar fókusz",
    desc: "Magyar nyelven, magyar szemszögből – a helyi harcász kultúra és eredmények kerülnek középpontba.",
  },
  {
    num: "03",
    title: "Nyitottság",
    desc: "Minden harcászati ágat egyenlő figyelemmel mutatunk be – a boxtól a judón át az MMA-ig.",
  },
  {
    num: "04",
    title: "Fejlődés",
    desc: "Nemcsak versenyeredményekről írunk – az edzés, a technika és a mentális fejlődés egyformán fontos.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-10 md:pt-14">
      {/* Header */}
      <div className="relative overflow-hidden bg-foreground text-background py-20 md:py-32 px-6 md:px-10">
        <Image
          src="/images/about.jpg"
          alt="Harcász edzőterem"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-4">
            Rólunk
          </p>
          <h1
            className="font-display text-[12vw] md:text-[8vw] font-800 uppercase leading-none tracking-tighter text-balance text-background mb-6"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            KIK<br />
            <span className="text-brand">VAGYUNK</span>
          </h1>
          <p className="text-base md:text-lg text-background/85 max-w-xl leading-relaxed">
            A hungary martialarts Magyarország vezető online harcász portálja. Missziónk a harcművészetek iránt szenvedélyesek tudásának bővítése és a közösség összekapcsolása.
          </p>
        </div>
      </div>

      {/* Mission text */}
      <div className="bg-background py-16 md:py-24 px-6 md:px-10 border-b border-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <span className="text-[9px] tracking-[0.4em] uppercase text-brand font-semibold mb-4 block">
              Küldetésünk
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-800 uppercase tracking-tighter leading-tight text-balance mb-6"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Harcász tudás,<br />
              <span className="text-brand">Magyar közösség</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              A hungary martialarts 2020-ban jött létre azzal a céllal, hogy a harcművészetekről szóló minőségi, magyar nyelvű tartalmak egyetlen helyen legyenek elérhetők. Magyarország gazdag harcász hagyományai és az élő közösség inspirációja hozta létre ezt a portált.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hisszük, hogy a harcászat nem csupán verseny — hanem életmód, önfejlesztés és közösség. Ezért mutatjuk be a technikák mélységeit, a sportágak történelmét és az edzéstudományok friss eredményeit egyaránt.
            </p>
          </div>

          <div className="relative h-80 md:h-[500px] overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Harcász edzőterem belülről"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-secondary py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 border-b border-border pb-10">
            <span className="text-[9px] tracking-[0.4em] uppercase text-brand font-semibold mb-3 block">
              Értékeink
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-800 uppercase tracking-tighter leading-tight"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Amiben hiszünk
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-border">
            {values.map((v) => (
              <div
                key={v.num}
                className="border-r border-b border-border p-8 hover:bg-background transition-colors group"
              >
                <span
                  className="font-display text-4xl font-800 text-brand/30 leading-none block mb-5"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                  aria-hidden
                >
                  {v.num}
                </span>
                <h3
                  className="font-display text-xl font-800 uppercase tracking-tight leading-tight mb-3 group-hover:text-brand transition-colors"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="bg-background py-16 md:py-24 px-6 md:px-10" id="contact">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <span className="text-[9px] tracking-[0.4em] uppercase text-brand font-semibold mb-3 block">
                Kapcsolat
              </span>
              <h2
                className="font-display text-4xl md:text-6xl font-800 uppercase tracking-tighter leading-tight text-balance mb-6"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                Írj<br />
                <span className="text-brand">Nekünk</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm">
                Kérdésed van? Szívesen fogadunk visszajelzéseket, együttműködési ajánlatokat és tartalomjavaslásokat.
              </p>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="text-brand font-semibold">Email</span>
                  <a
                    href="mailto:info@hungarymartialarts.com"
                    className="hover:text-foreground transition-colors link-underline"
                  >
                    info@hungarymartialarts.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand font-semibold">Web</span>
                  <span>hungarymartialarts.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand font-semibold">Ország</span>
                  <span>Magyarország</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
