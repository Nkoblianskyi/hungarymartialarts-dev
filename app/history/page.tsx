import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Történelem | hungary martialarts",
  description:
    "A harcművészetek magyarországi és világtörténelme: olimpiai eredmények, stílusok eredete, legendás mesterek.",
}

const timeline = [
  {
    year: "Kr.e. 648",
    title: "Ókori olimpiai pankrátion",
    body: "A pankrátion az első ismert összetett küzdősport volt, amelyet az ókori görög olimpiákon alkalmaztak. Ütéseket, fogásokat és földharc-technikákat egyaránt tartalmazott. Az első dokumentált szabályrendszer az emberiség harcművészeti fejlődésének egyik mérföldköve.",
  },
  {
    year: "1600-as évek",
    title: "A Muay Thai kialakulása",
    body: "A thai királyságokban a katonai kiképzés részeként fejlődött ki a modern Muay Thai elődje. A csípő és a könyök technikák kidolgozása ebben a korszakban gyökerezik. A sport egyszerre szolgált önvédelmi és rituális célokat.",
  },
  {
    year: "1882",
    title: "Jigoro Kano megalapítja a judót",
    body: "A japán Jigoro Kano professzor kidolgozta a Kodokan Judo rendszerét, amelyben a jiu-jitsu legjobb dobás- és földharcrendszereit foglalta össze. A judo az első olyan küzdősport lett, amely a fizikai fejlesztés mellett erkölcsi nevelést is céljául tűzte ki.",
  },
  {
    year: "1896",
    title: "Első modern olimpia",
    body: "Athénban az első modern olimpiai játékokon a birkózás visszakerült a programba. Magyarország az első olimpiától aktívan részt vett a küzdősportokban. Az olimpiai mozgalom a harcművészetek standardizálásához és globális terjedéséhez járult hozzá.",
  },
  {
    year: "1920–1980",
    title: "A magyar bokszolás aranykora",
    body: "A két világháború közötti időszakban és az azt követő évtizedekben a magyar ökölvívók számos világversenyen és olimpián jeleskedtek. Magyarország az egy főre jutó olimpiai érmek számát tekintve a harcosportokban kiemelkedő eredményeket ért el. A Bp. Spartacus és más nagy klubok számos legendás mestert adtak a sportnak.",
  },
  {
    year: "1945",
    title: "A karate globális terjedése",
    body: "A második világháború után az okinawai és japán karate mesterek Nyugatra vitték a karate stílusokat. Az 1950–70-es évek a nagy stílusok (Shotokan, Goju-ryu, Kyokushin) megszilárdulásának korszaka. A kata és a kumite rendszer ebben az időszakban nyerte el mai formáját.",
  },
  {
    year: "1963",
    title: "Bruce Lee és a Jeet Kune Do",
    body: "Bruce Lee forradalmasította a harcművészetek szemléletét azzal, hogy elvette a stílusok korlátait. A Jeet Kune Do ('a közbülső út') megközelítése – 'nincs módszer, mint módszer' – megalapozta a modern MMA szemléletét és a vegyes harci rendszerek elterjedését.",
  },
  {
    year: "1993",
    title: "Az UFC megalapítása",
    body: "Az Ultimate Fighting Championship létrehozásával a vegyes harcművészetek (MMA) versenyrendszere formalizálódott. Az első UFC-k a 'melyik stílus a legjobb?' kérdéssel szerveződtek. Royce Gracie brazilian jiu-jitsu-val nyerte az első tornákat, megmutatva a grappling fontosságát.",
  },
  {
    year: "2000–2010",
    title: "Az MMA globális robbanása",
    body: "A 2000-es évek közepétől az MMA a világ egyik legnézettebb élő sporteseményévé vált. A technikai szint ugrásszerűen nőtt, ahogy a versenyzők egyre több diszciplínában képezték magukat. Ez az időszak a modern harcász poliglotsportolóját hozta létre.",
  },
  {
    year: "2016+",
    title: "Magyar harcászok a vilégszínpadon",
    body: "A mai Magyarország kiemelkedő tehetségeket ad a világ harcsporthegyein. Az UFC-től a kickboxig és az olimpiai birkózásig aktív magyar versenyzők képviselik az ország hagyományait. A fiatalok számára elérhető edzési infrastruktúra és az online platformok demokratizálják a harcász tudást.",
  },
]

export default function HistoryPage() {
  return (
    <div className="pt-10 md:pt-14">
      {/* Page header */}
      <div className="relative overflow-hidden bg-foreground text-background py-20 md:py-32 px-6 md:px-10">
        <Image
          src="/images/history-preview.jpg"
          alt="Történelmi harcász kép"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
        />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-4">
            Történelem
          </p>
          <h1
            className="font-display text-[12vw] md:text-[8vw] font-800 uppercase leading-none tracking-tighter text-balance text-background mb-6"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            HARCÁSZ<br />
            <span className="text-brand">KRÓNIKÁK</span>
          </h1>
          <p className="text-base md:text-lg text-background/85 max-w-xl leading-relaxed">
            A harcművészetek eredete az ókortól napjainkig — és Magyarország kiemelkedő helye ebben a globális történetben.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-background py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[80px] md:left-[110px] top-0 bottom-0 w-px bg-border" aria-hidden />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className="relative flex gap-6 md:gap-10 pb-0 group"
                >
                  {/* Year */}
                  <div className="shrink-0 w-20 md:w-28 text-right pt-8">
                    <span
                      className="font-display text-sm md:text-base font-800 text-brand uppercase tracking-tight"
                      style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="relative flex-none w-4 flex justify-center pt-9">
                    <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-brand transition-colors border-2 border-background ring-1 ring-border" />
                  </div>

                  {/* Content */}
                  <article className="flex-1 border-b border-border pb-10 pt-7 group-last:border-b-0">
                    <h2
                      className="font-display text-xl md:text-2xl font-800 uppercase tracking-tight leading-tight mb-3 group-hover:text-brand transition-colors"
                      style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                    >
                      {item.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom image */}
      <div className="relative h-72 md:h-[500px] overflow-hidden">
        <Image
          src="/images/history-preview.jpg"
          alt="Harcászok a történelem során"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
          <span
            className="font-display text-[9vw] font-800 uppercase tracking-tighter text-background/20 text-center"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            aria-hidden
          >
            MAGYARORSZÁG &bull; HARCÁSZAT
          </span>
        </div>
      </div>
    </div>
  )
}
