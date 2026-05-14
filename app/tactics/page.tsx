import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Taktikák & Technikák | hungary martialarts",
  description:
    "Részletes harcművészeti taktikák, edzéstervek és technikai útmutatók kezdőknek és haladóknak.",
}

const sections = [
  {
    tag: "Alapok",
    title: "Az alappozíció és a lábmunka",
    body: `Az ideális boksz alappozíció a teljesítmény alapja. Az ortrodox állásnál a bal láb elöl, a jobb láb hátul, a kezek az arc előtt. A testsúly egyenletesen megoszlik a lábak között, a térdek enyhén hajlítva.

A lábmunka során az egyik legfontosabb szabály: mindig abba az irányba lépünk először, amerre mozgunk. Soha nem hozzuk egymáshoz a lábakat. A körözésnél az ellenfél vezető kezétől távolabb – ez csökkenti a sebezhetőséget és új szöget nyit.

Alapmozdulatsor: előre lépés, hátra lépés, bal oldali körözés, jobb oldali körözés. Ezeket először lassan, majd egyre gyorsabban kell ismételni a zene ritmikájára.`,
  },
  {
    tag: "Technika",
    title: "Az alapütések biomechanikája",
    body: `**Jab:** Az elülső karral egyenes irányban leadott gyors ütés. A csípő minimálisan fordul, a váll előredől, az ütés után azonnal visszahúzzuk a kart. Fő felhasználása: távolságtartás, ellenfél méretezése, kombinációk indítása.

**Cross:** A hátsó karral leadott erőteljes egyenes ütés. A teljes csípőforgatás elengedhetetlen – a teljesítmény nagy része innen ered. A cross az offenzív arzenál legpusztítóbb alapeleme.

**Hook:** Ívelt, oldalirányú ütés, amelynél a könyök kb. 90 fokos szögben van. Közel harcoban a leghatásosabb. Mindkét kézzel alkalmazható, és az ellenfél védelmét átkerüli.

**Uppercut:** Felülről jövő, felső irányban leadott ütés. Közel harcoban, clinch közelében alkalmazzák. A csípő lefelé majd felfelé irányuló mozdulatából nyeri az erejét.`,
  },
  {
    tag: "Taktika",
    title: "A távolsággazdálkodás",
    body: `A harcosok három fő távolságban harcolnak: hosszú távolság (jab-os, rúgásos range), közepes távolság (cross, hook range), és közel harc (uppercut, clinch). A győztes taktika lényege, hogy azt a távolságot erőltessük az ellenfélre, amelyen mi vagyunk a leghatékonyabbak.

A hosszú távolság taktikusai jellemzően mozékony, pontosan dolgozó harcosok, akik a jab-bal irányítják a meccset. A közepes távolság ütői a nagy teljesítményű, precíz kombinációkra specializálódtak.

A távolságváltás az egyik legfontosabb taktikai eszköz: egy gyors belépés vagy hátrálás teljesen megváltoztatja az erőviszonyokat.`,
  },
  {
    tag: "Védekezés",
    title: "Slipping, bobbing és parrying",
    body: `A slipping az a mozdulat, amellyel a fejjel az ütés mellé kitérünk. Az irány helyes megválasztása azonnal visszatámadási lehetőséget nyit.

A bobbing and weaving a hook ütések ellen alkalmazott térd-mozdulatsor. A fej lefelé és oldalra mozdul, miközben a szemkontaktus megmarad. A kulcs a térd aktív használata – ne a hát hajtson, hanem a térd.

A parrying minimális mozdulattal tér el az ütéstől – a saját kézzel enyhén elhárítjuk az érkező jab-ot vagy cross-t. Az elütés iránya döntő: a jabra belülre, a crossra kívülre irányítunk.`,
  },
  {
    tag: "Kombinációk",
    title: "Az ötvenpontos kombinációrendszer",
    body: `A bokszban a kombinációk számai az ütéstípusokat jelölik:
1 = jab, 2 = cross, 3 = bal hook, 4 = jobb hook, 5 = bal uppercut, 6 = jobb uppercut.

Az alapkombinációk: 1-2 (jab-cross), 1-2-3 (jab-cross-bal hook), 1-2-3-2 (jab-cross-hook-cross).

A haladó szinten a testütések (body shots) is bekerülnek a kombinációkba: egy magasra irányított jab után a test elleni cross váratlanul érkezik.

A kombináció befejezésekor mindig meg kell tartani a védekezési pozíciót – a befejező ütés után azonnal vissza kell a karokat az arc elé hozni.`,
  },
  {
    tag: "Kondíció",
    title: "Edzésterv és periódizáció",
    body: `Egy klasszikus harcász heti edzésterv: hétfő (technika, mancsozás), kedd (kondíció, ugrókötelezés), szerda (pihenő vagy könnyű futás), csütörtök (sparring, taktika), péntek (erőfejlesztés, zsák), szombat (hosszabb kardio futás).

Az erőfejlesztés a funkcionális mozdulatokon alapul: kitörések, húzódzkodások, kettlebell-swing, medicinlabdás rotáció. A harcász erő nem a tükörizomra, hanem a kinetikus lánc komplexitására épül.

A periódizáció szempontjából az élesítési fázis (taper) rendkívül fontos: verseny előtt 2 héttel az edzések intenzitása és térfogata fokozatosan csökken, hogy a test csúcsteljesítményre legyen kész.`,
  },
  {
    tag: "Muay Thai",
    title: "A nyolc végtagú harci forma taktikái",
    body: `A Muay Thai megkülönböztető taktikai eleme a csípő és a kar összehangolása. Minden rúgásnál a csípő teljes elfordítása szükséges a maximális erőátvitelhez.

A teep (láb-jab) a Muay Thai legtávolságtartóbb fegyvere – lábbal, egyenesen előre leadott lökőtechnikai, amellyel az ellenfél előrenyomulását lehet megakadályozni.

A clinch taktikájában a nyakkontroll az alapvető pozicionális cél. Aki kontrollálja az ellenfél nyakát és fejét, az irányítja a közel harci tempót, és hatékonyan alkalmazza a térdütéseket.`,
  },
  {
    tag: "Judo",
    title: "A kuzushi és az egyensúlybontás",
    body: `A kuzushi az egyensúlybontás japán fogalma. Mielőtt bármilyen dobást végrehajtunk, az ellenfél egyensúlyát meg kell bontani abba az irányba, amerre dobjuk.

Az egyensúlybontás nyolc irányban lehetséges: előre, hátra, két oldalra, és a négy átlós irányba. A legjobb kuzushik természetes mozdulatokból, húzás-tolás váltakozásából alakulnak ki.

A tsugi ashi (lépő lépés) a judo alapmozgása, amellyel az egyensúlybontást előkészítjük és végrehajtjuk – soha nem hozzuk a lábakat egymáshoz a lépés közben.`,
  },
]

export default function TacticsPage() {
  return (
    <div className="pt-10 md:pt-14">
      {/* Page header */}
      <div className="relative overflow-hidden bg-foreground text-background py-20 md:py-32 px-6 md:px-10">
        <Image
          src="/images/tactics-preview.jpg"
          alt="Taktikák fejléc kép"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-4">
            Taktikák &amp; Technikák
          </p>
          <h1
            className="font-display text-[12vw] md:text-[8vw] font-800 uppercase leading-none tracking-tighter text-balance text-background mb-6"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            EDZÉSI<br />
            <span className="text-brand">TUDÁSBÁZIS</span>
          </h1>
          <p className="text-base md:text-lg text-background/85 max-w-xl leading-relaxed">
            Részletes technikai útmutatók és taktikai elemzések, amelyek megalapozzák a harcász fejlődését — kezdő szinttől a profik világáig.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-background py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-border">
            {sections.map((section, i) => (
              <article
                key={section.title}
                className={`lg:col-span-${i % 3 === 0 ? "12" : i % 3 === 1 ? "7" : "5"} border-b border-r border-border p-8 md:p-10 last:border-b-0 hover:bg-secondary transition-colors`}
              >
                <span className="text-[9px] tracking-[0.4em] uppercase text-brand font-semibold mb-4 block">
                  {section.tag}
                </span>
                <h2
                  className="font-display text-2xl md:text-4xl font-800 uppercase tracking-tight leading-tight mb-6 text-balance"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                >
                  {section.title}
                </h2>
                <div className="prose prose-sm max-w-none text-foreground/80 leading-relaxed space-y-4">
                  {section.body.split("\n\n").map((para, j) => (
                    <p key={j} className="text-sm leading-relaxed text-foreground">
                      {para.replace(/\*\*(.*?)\*\*/g, "$1")}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
