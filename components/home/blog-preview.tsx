import Link from "next/link"
import { blogArticles } from "@/lib/blog-data"

export function BlogPreview() {
  const featured = blogArticles.slice(0, 3)

  return (
    <section className="py-24 md:py-32 bg-surface text-surface-foreground" aria-label="Blog és cikkek előnézet">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-surface-foreground/10 pb-12">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold mb-3">
              Blog
            </p>
            <h2
              className="font-display text-5xl md:text-7xl font-800 uppercase leading-none tracking-tighter text-balance text-surface-foreground"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Legújabb<br />
              <span className="text-brand">Cikkek</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold tracking-wide border-b border-surface-foreground/40 pb-1 hover:border-brand hover:text-brand transition-colors text-surface-foreground/70"
          >
            Összes cikk <span aria-hidden>&#8594;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-l border-t border-surface-foreground/10">
          {featured.map((article, i) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="border-r border-b border-surface-foreground/10 p-8 md:p-10 flex flex-col justify-between min-h-[280px] group hover:bg-surface-foreground/5 transition-colors"
            >
              <div>
                <span className="text-[9px] tracking-[0.4em] uppercase text-brand font-semibold mb-5 block">
                  {article.category}
                </span>
                <h3
                  className="font-display text-2xl md:text-3xl font-800 uppercase tracking-tight leading-tight text-surface-foreground group-hover:text-brand transition-colors text-balance"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                >
                  {article.title}
                </h3>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <p className="text-xs text-surface-foreground/40 leading-relaxed max-w-[70%]">
                  {article.excerpt.slice(0, 80)}...
                </p>
                <span className="text-brand text-lg group-hover:translate-x-1 transition-transform" aria-hidden>
                  &#8594;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
