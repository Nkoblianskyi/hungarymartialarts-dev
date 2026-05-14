import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Adatvédelmi Szabályzat | hungary martialarts",
  description: "A hungarymartialarts.com adatvédelmi irányelvei és a személyes adatok kezelésének rendje.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-10 md:pt-14">
      <div className="bg-foreground text-background py-14 md:py-20 px-6 md:px-10 border-b border-background/10">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-4">Szabályzat</p>
          <h1
            className="font-display text-5xl md:text-7xl font-800 uppercase leading-none tracking-tighter text-background"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            Adatvédelmi<br /><span className="text-brand">Szabályzat</span>
          </h1>
        </div>
      </div>

      <div className="bg-background py-14 md:py-20 px-6 md:px-10">
        <div className="max-w-[700px] mx-auto space-y-8 text-sm text-foreground/75 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-800 uppercase tracking-tight text-foreground mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>Adatkezelő</h2>
            <p>Adatkezelő: hungary martialarts (hungarymartialarts.com). Elérhetőség: info@hungarymartialarts.com</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-800 uppercase tracking-tight text-foreground mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>Kezelt adatok</h2>
            <p>A kapcsolatfelvételi űrlap kitöltésekor az alábbi adatokat kezeljük: teljes név, email-cím, üzenet tartalma. Ezek az adatok kizárólag a kapcsolatfelvétel megválaszolásához kerülnek felhasználásra.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-800 uppercase tracking-tight text-foreground mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>Az adatkezelés jogalapja</h2>
            <p>Az adatkezelés jogalapja a GDPR 6. cikk (1) bekezdés a) pontja szerinti hozzájárulás, amelyet a felhasználó az üzenet elküldésével ad meg.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-800 uppercase tracking-tight text-foreground mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>Az adatok megőrzése</h2>
            <p>Az adatokat a kapcsolatfelvétel lezárásától számított maximum 1 évig őrizzük meg, ezt követően törlésre kerülnek.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-800 uppercase tracking-tight text-foreground mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>Felhasználói jogok</h2>
            <p>Önnek joga van hozzáférni személyes adataihoz, azokat helyesbíteni, törölni, vagy az adatkezelés ellen tiltakozni. Kérelmét az info@hungarymartialarts.com email-címre küldheti.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
