import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Szabályzat | hungary martialarts",
  description: "A hungarymartialarts.com cookie (süti) szabályzata.",
}

export default function CookiePolicyPage() {
  return (
    <div className="pt-10 md:pt-14">
      <div className="bg-foreground text-background py-14 md:py-20 px-6 md:px-10 border-b border-background/10">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-4">Szabályzat</p>
          <h1
            className="font-display text-5xl md:text-7xl font-800 uppercase leading-none tracking-tighter text-background"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            Cookie<br /><span className="text-brand">Szabályzat</span>
          </h1>
        </div>
      </div>

      <div className="bg-background py-14 md:py-20 px-6 md:px-10">
        <div className="max-w-[700px] mx-auto space-y-8 text-sm text-foreground/75 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-800 uppercase tracking-tight text-foreground mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>Mi az a süti?</h2>
            <p>A sütik (cookie-k) kis szöveges fájlok, amelyeket a weboldal a böngésző segítségével tárol a készüléken. A sütik segítségével a weboldal megjegyzi a felhasználó beállításait és preferenciáit.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-800 uppercase tracking-tight text-foreground mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>Milyen sütiket használunk?</h2>
            <p><strong className="text-foreground">Szükséges sütik:</strong> Az oldal alapvető működéséhez szükséges sütik. Ezek nélkül az oldal nem működik megfelelően.</p>
            <p className="mt-3"><strong className="text-foreground">Analitikai sütik:</strong> Az oldal használatával kapcsolatos névtelen statisztikák gyűjtésére szolgálnak, hogy javíthassuk a felhasználói élményt.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-800 uppercase tracking-tight text-foreground mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>Sütik kezelése</h2>
            <p>A böngésző beállításaiban bármikor letilthatja vagy törölheti a sütiket. Figyelmeztetünk, hogy egyes sütik letiltása hatással lehet az oldal funkcionalitására.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-800 uppercase tracking-tight text-foreground mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>Kapcsolat</h2>
            <p>Kérdéseivel forduljon hozzánk az <a href="mailto:info@hungarymartialarts.com" className="text-brand link-underline">info@hungarymartialarts.com</a> email-címen.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
