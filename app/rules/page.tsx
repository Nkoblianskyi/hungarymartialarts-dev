import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Szabályok | hungary martialarts",
  description:
    "A legfontosabb harcművészeti szabályok, pontozási rendszerek és versenykövetelmények részletesen.",
}

const sports = [
  {
    name: "Ökölvívás",
    tag: "Boksz",
    intro:
      "Az ökölvívás szabályrendszere az 1867-es Queensberry-szabályokra vezethető vissza. A szabályok azóta sokat finomultak, de alapelveik változatlanok.",
    rules: [
      {
        title: "Megengedett technikák",
        body: "Kizárólag ököllel, a zárt kézfejjel leadott ütések engedélyeztek. Az ütések kizárólag az ellenfél kesztyűje feletti, az öv felett elhelyezkedő testre és fejre irányíthatók.",
      },
      {
        title: "Tilott fogások",
        body: "Tilos hátulról ütni, az ellenfél nyakszirtjére ütni, fejjel, könyökkel vagy térddel érintkezni, az ellenfél lábát emelni, harapni vagy körmözni.",
      },
      {
        title: "Pontozás",
        body: "A mérkőzést három bíró pontozza 10 pontos rendszerben. A menet győztese 10, az ellenfél 9 vagy kevesebb pontot kap. A pontokat a landolt effektív ütések száma, a védekezés, a ring-uralom és a versengés agresivitása alapján ítélik.",
      },
      {
        title: "Menet és időtartam",
        body: "Amatőr mérkőzések: 3×2 perces menet. Profi mérkőzések: 4–12 menet, általában 3 percesek. Köztük 1 perces szünetek.",
      },
      {
        title: "Knock-down szabály",
        body: "Ha az ellenfél padlót ér, a bíró 8-ig számol. Ha a versenyző feláll és rendben van, a mérkőzés folytatódik. Háromszoros knock-down egy menetben általában TKO-hoz vezet.",
      },
    ],
  },
  {
    name: "Muay Thai",
    tag: "Muay Thai",
    intro:
      "A Muay Thai nyolc végtagját (két kéz, két könyök, két térd, két láb) alkalmazza. A szabályok a WMC és IFMA szervezetek által standardizáltak.",
    rules: [
      {
        title: "Megengedett technikák",
        body: "Ütések kézzel, könyöktechnikák, térdtechnikák, rúgások (lábbal és cipőtalppal), és clinch munka egyaránt megengedett. Ez teszi a Muay Thai-t az egyik legteljesebb álló küzdő rendszerré.",
      },
      {
        title: "Clinch szabályok",
        body: "A clinch (fogás) megengedett, ha a sportoló aktívan technikát alkalmaz belőle. Passzív clinchért a bíró separálja a versenyzőket.",
      },
      {
        title: "Pontozás",
        body: "A thai stílusú pontozás a hatékonyságot és az ütések erőteljességét értékeli – nem csak a mennyiséget. A bírók kiemelt figyelmet fordítanak a rúgások és térdütések tisztaságára.",
      },
      {
        title: "Tilott fogások",
        body: "Tilos az ellenfél fejét fogni és földre tenni (takedown), nyakat szorítani, fejjel ütni. Dobásszerű technikák megítélése a szövetségtől függ.",
      },
    ],
  },
  {
    name: "Judo",
    tag: "Judo",
    intro:
      "A judo az 1964-es tokiói olimpia óta olimpiai sportág. A Nemzetközi Judo Szövetség (IJF) szabályrendszere részletes és szigorúan betartott.",
    rules: [
      {
        title: "A győzelem feltételei",
        body: "Ippon (teljes győzelem): az ellenfelet hátán, kontrolláltan a földre dobjuk. Waza-ari: részleges pontszám. Két waza-ari egyenlő egy ipponnál.",
      },
      {
        title: "Tilott technikák",
        body: "Tilos az ellenfél lábát fogni a görög-római szabályrendszerben. Tilos a fejre és nyakra alkalmazott kar-technikák. A szabályoknak megfelelő technika precízen meghatározott.",
      },
      {
        title: "Talajbirkózás szabályai",
        body: "Az osaekomi (leszorítás) 25 másodpercig ipponhoz vezet. A shime-waza (nyakszorítók) és kansetsu-waza (ízületi zárak) engedélyeztek felső súlycsoportokban.",
      },
      {
        title: "Shido (figyelmeztetés)",
        body: "Passzív harcért, menekülésért, a fogás megtagadásáért, tiltott technikákért shido adható. Négy shido hantei (vereség ítélet) eredményez.",
      },
    ],
  },
  {
    name: "MMA",
    tag: "MMA",
    intro:
      "A vegyes harcművészetekben az Unified Rules of MMA (USA) a legszélesebb körben alkalmazott szabályrendszer, amelyet a legtöbb nagy szervezet követ.",
    rules: [
      {
        title: "Megengedett technikák",
        body: "Ütések kézzel, rúgások, térdütések, könyöktechnikák, dobások, takedownok, ízületi zárak, fojtogatások. Az MMA az összes pozícióban (álló, félig-állva, talajon) alkalmazható technikák legszélesebb körét tartalmazza.",
      },
      {
        title: "Tiltott technikák",
        body: "Tilos: tarkóra ütni (12-6 könyök és ütés), harapni, körmözni, csíkot húzni, az egész testtel feküdni, szembe ujjat szúrni, gerinctörési kísérlet, és a fülre leadott nyitott tenyérütés.",
      },
      {
        title: "A mérkőzés befejezése",
        body: "Tap out (megadás), KO/TKO (bíró leállítja), bírói döntés (egyhangú, megosztott, döntetlen), technikai megadás orvosi okból.",
      },
      {
        title: "Súlycsoportok",
        body: "Szalmasúly (115 lbs), légsúly (125), tollsúly (145), könnyűsúly (155), félközépsúly (170), középsúly (185), félnehézsúly (205), nehézsúly (265). Versenyenként eltérő kategóriák is lehetnek.",
      },
    ],
  },
]

export default function RulesPage() {
  return (
    <div className="pt-10 md:pt-14">
      {/* Page header */}
      <div className="bg-foreground text-background py-20 md:py-32 px-6 md:px-10 overflow-hidden relative">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand/5"
          aria-hidden
        />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-4">
            Szabályok &amp; Fegyelem
          </p>
          <h1
            className="font-display text-[12vw] md:text-[8vw] font-800 uppercase leading-none tracking-tighter text-balance text-background mb-6"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            JÁTÉK<br />
            <span className="text-brand">SZABÁLYOK</span>
          </h1>
          <p className="text-base md:text-lg text-background/85 max-w-xl leading-relaxed">
            A harcművészetek szabályrendszerei nemcsak a sportot teszik lehetővé, hanem a kölcsönös tiszteletet és a biztonságos versenyzést is garantálják.
          </p>
        </div>
      </div>

      {/* Sports rules */}
      <div className="bg-background py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto space-y-0 divide-y divide-border border border-border">
          {sports.map((sport) => (
            <section key={sport.name} className="py-12 md:py-16 px-8 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                {/* Sport name */}
                <div className="lg:col-span-3">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-brand font-semibold mb-3 block">
                    {sport.tag}
                  </span>
                  <h2
                    className="font-display text-4xl md:text-5xl font-800 uppercase tracking-tighter leading-none text-balance"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                  >
                    {sport.name}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4">{sport.intro}</p>
                </div>

                {/* Rules */}
                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
                  {sport.rules.map((rule, i) => (
                    <div
                      key={rule.title}
                      className="p-6 border-b border-r border-border last:border-b-0 hover:bg-secondary transition-colors"
                    >
                      <h3
                        className="font-display text-lg font-800 uppercase tracking-tight leading-tight mb-3 text-foreground"
                        style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                      >
                        {rule.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{rule.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Safety note */}
      <div className="bg-brand text-brand-foreground py-12 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2
              className="font-display text-3xl md:text-4xl font-800 uppercase tracking-tight leading-tight mb-2"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Biztonság az első
            </h2>
            <p className="text-brand-foreground text-sm leading-relaxed max-w-xl">
              A szabályok megismerése és betartása minden harcász felelőssége. Az edzésen és a versenyen egyaránt a kölcsönös tisztelet és a safety-first szemlélet az alapvető érték.
            </p>
          </div>
          <div className="shrink-0 border-l border-brand-foreground/20 pl-8 hidden md:block">
            <p
              className="font-display text-6xl font-800 uppercase tracking-tighter text-brand-foreground/20 leading-none"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              aria-hidden
            >
              FAIR<br />PLAY
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
