import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { blogArticles } from "@/lib/blog-data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = blogArticles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} | hungary martialarts blog`,
    description: article.excerpt,
  }
}

function renderContent(content: string) {
  const lines = content.trim().split("\n")
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="font-display text-2xl md:text-3xl font-800 uppercase tracking-tight leading-tight mt-10 mb-4"
          style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
        >
          {line.replace("## ", "")}
        </h2>
      )
    } else if (line.startsWith("**") && line.endsWith("**")) {
      // Bold standalone line
      elements.push(
          <p key={i} className="text-sm leading-relaxed text-foreground mb-3">
          <strong>{line.slice(2, -2)}</strong>
        </p>
      )
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-sm leading-relaxed text-foreground ml-4 list-disc mb-1">
          {line.replace(/^- \*\*(.*?)\*\*/, (_, m) => m).replace("- ", "")}
        </li>
      )
    } else if (line.trim() === "") {
      // empty line – skip
    } else {
      // Handle inline bold
      const parts = line.split(/(\*\*.*?\*\*)/)
      elements.push(
        <p key={i} className="text-sm md:text-base leading-relaxed text-foreground mb-4">
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={j} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
            }
            return part
          })}
        </p>
      )
    }
    i++
  }

  return elements
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = blogArticles.find((a) => a.slug === slug)
  if (!article) notFound()

  const currentIndex = blogArticles.findIndex((a) => a.slug === slug)
  const prev = blogArticles[currentIndex - 1]
  const next = blogArticles[currentIndex + 1]

  return (
    <div className="pt-10 md:pt-14">
      {/* Article header */}
      <div className="bg-foreground text-background py-16 md:py-24 px-6 md:px-10 border-b border-background/10">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/blog"
              className="text-[10px] tracking-[0.4em] uppercase text-background/70 hover:text-background transition-colors link-underline"
            >
              Blog
            </Link>
            <span className="text-background/50" aria-hidden>/</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold">
              {article.category}
            </span>
          </div>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-800 uppercase leading-tight tracking-tighter text-balance text-background"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            {article.title}
          </h1>
          <p className="mt-6 text-base text-background/85 leading-relaxed max-w-2xl">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="bg-background py-14 md:py-20 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="border-l-2 border-brand pl-8 mb-10">
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              {article.excerpt}
            </p>
          </div>

          <article className="max-w-[700px]">
            {renderContent(article.content)}
          </article>
        </div>
      </div>

      {/* Prev/next navigation */}
      <div className="bg-secondary border-t border-border px-6 md:px-10 py-0">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="flex flex-col gap-2 py-8 px-4 group hover:bg-background transition-colors"
            >
              <span className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground">
                Előző cikk
              </span>
              <span
                className="font-display text-xl font-800 uppercase tracking-tight leading-tight text-foreground group-hover:text-brand transition-colors text-balance"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                <span className="text-brand mr-2" aria-hidden>&#8592;</span>
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="flex flex-col gap-2 py-8 px-4 md:text-right group hover:bg-background transition-colors"
            >
              <span className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground">
                Következő cikk
              </span>
              <span
                className="font-display text-xl font-800 uppercase tracking-tight leading-tight text-foreground group-hover:text-brand transition-colors text-balance"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                {next.title}
                <span className="text-brand ml-2" aria-hidden>&#8594;</span>
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Back to blog CTA */}
      <div className="bg-background py-12 md:py-16 px-6 md:px-10 border-t border-border text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 text-sm font-semibold border-b border-foreground pb-1 hover:border-brand hover:text-brand transition-colors tracking-wide"
        >
          <span aria-hidden>&#8592;</span> Összes cikk megtekintése
        </Link>
      </div>
    </div>
  )
}
