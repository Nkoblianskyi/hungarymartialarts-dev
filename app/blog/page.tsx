import type { Metadata } from "next"
import Link from "next/link"
import { blogArticles } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | hungary martialarts",
  description:
    "Harcművészeti cikkek, technikaleírások, történelmi írások és edzéstippek Magyarország legnagyobb harcász portáljától.",
}

const categoryColors: Record<string, string> = {
  Technika: "text-brand",
  "Muay Thai": "text-brand",
  Judo: "text-brand",
  Kondíció: "text-brand",
  Pszichológia: "text-brand",
  Birkózás: "text-brand",
  Karate: "text-brand",
  Történelem: "text-brand",
  Kickboksz: "text-brand",
  Regeneráció: "text-brand",
  MMA: "text-brand",
  Önvédelem: "text-brand",
}

const categories = ["Összes", ...Array.from(new Set(blogArticles.map((a) => a.category)))]

export default function BlogPage() {
  const featured = blogArticles[0]
  const rest = blogArticles.slice(1)

  return (
    <div className="pt-10 md:pt-14">
      {/* Page header */}
      <div className="bg-foreground text-background py-16 md:py-24 px-6 md:px-10 border-b border-background/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-4">
              Blog
            </p>
            <h1
              className="font-display text-[12vw] md:text-[6vw] font-800 uppercase leading-none tracking-tighter text-balance text-background"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              CIKKEK &amp;<br />
              <span className="text-brand">ELEMZÉSEK</span>
            </h1>
          </div>
          <p className="text-sm text-background/80 max-w-xs leading-relaxed md:pb-2">
            {blogArticles.length} cikk — technikáktól az edzéstudományig, a harcos fejlődéséhez szükséges tudás egy helyen.
          </p>
        </div>
      </div>

      {/* Featured article */}
      <Link
        href={`/blog/${featured.slug}`}
        className="block bg-secondary hover:bg-border transition-colors border-b border-border"
        aria-label={`Kiemelt cikk: ${featured.title}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
          <div className="md:col-span-2">
            <span className="text-[9px] tracking-[0.4em] uppercase text-brand font-semibold block mb-2">
              Kiemelt
            </span>
            <span
              className="font-display text-7xl md:text-9xl font-800 text-border leading-none"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              aria-hidden
            >
              01
            </span>
          </div>
          <div className="md:col-span-7">
            <span className="text-[9px] tracking-[0.4em] uppercase text-brand font-semibold block mb-3">
              {featured.category}
            </span>
            <h2
              className="font-display text-3xl md:text-5xl font-800 uppercase tracking-tighter leading-tight text-balance mb-4 hover:text-brand transition-colors"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              {featured.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{featured.excerpt}</p>
          </div>
          <div className="md:col-span-3 md:text-right">
            <span className="inline-flex items-center gap-2 text-sm font-semibold border-b border-foreground pb-1 hover:border-brand hover:text-brand transition-colors">
              Cikk olvasása <span aria-hidden>&#8594;</span>
            </span>
          </div>
        </div>
      </Link>

      {/* All articles grid */}
      <div className="bg-background py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="border border-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="border-r border-b border-border p-8 flex flex-col justify-between min-h-[260px] group hover:bg-secondary transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] tracking-[0.4em] uppercase text-brand font-semibold">
                      {article.category}
                    </span>
                    <span
                      className="font-display text-3xl font-800 text-border leading-none"
                      style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                      aria-hidden
                    >
                      {String(i + 2).padStart(2, "0")}
                    </span>
                  </div>
                  <h2
                    className="font-display text-xl md:text-2xl font-800 uppercase tracking-tight leading-tight text-foreground group-hover:text-brand transition-colors text-balance"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                  >
                    {article.title}
                  </h2>
                </div>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                    {article.excerpt.slice(0, 100)}...
                  </p>
                  <span
                    className="text-brand shrink-0 group-hover:translate-x-1 transition-transform"
                    aria-hidden
                  >
                    &#8594;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
