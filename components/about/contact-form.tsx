"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface SuccessPopupProps {
  onClose: () => void
}

function SuccessPopup({ onClose }: SuccessPopupProps) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Üzenet elküldve"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/80"
        onClick={onClose}
        aria-hidden
      />
      {/* Modal */}
      <div className="relative bg-background border border-border max-w-md w-full p-10 md:p-12">
        <div className="mb-8">
          <div className="w-12 h-12 bg-brand flex items-center justify-center mb-6" aria-hidden>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
              <path
                d="M3.5 11.5L8.5 16.5L18.5 6.5"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2
            className="font-display text-3xl md:text-4xl font-800 uppercase tracking-tighter leading-tight mb-3"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            Üzenet<br />
            <span className="text-brand">Elküldve</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Köszönjük az üzenetet! Csapatunk 1-2 munkanapon belül válaszol a megadott email-címre.
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-foreground text-background py-3.5 text-sm font-semibold tracking-wide hover:bg-brand transition-colors"
        >
          Bezárás
        </button>
      </div>
    </div>
  )
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = "A néved megadása kötelező."
    if (!form.email.trim()) {
      newErrors.email = "Az email-cím megadása kötelező."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Érvénytelen email-cím."
    }
    if (!form.subject.trim()) newErrors.subject = "A tárgy megadása kötelező."
    if (!form.message.trim() || form.message.length < 10) {
      newErrors.message = "Az üzenet legalább 10 karakter legyen."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Simulate send delay
    await new Promise((res) => setTimeout(res, 1000))
    setLoading(false)
    setSent(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const Field = ({
    id,
    label,
    error,
    children,
  }: {
    id: string
    label: string
    error?: string
    children: React.ReactNode
  }) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
        {label}
      </label>
      {children}
      {error && (
        <span className="text-xs text-brand" role="alert">
          {error}
        </span>
      )}
    </div>
  )

  return (
    <>
      {sent && <SuccessPopup onClose={() => setSent(false)} />}

      <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Kapcsolatfelvételi űrlap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field id="name" label="Neved" error={errors.name}>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Pl. Kovács Péter"
              autoComplete="name"
              className={cn(
                "w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors",
                errors.name && "border-brand"
              )}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
          </Field>

          <Field id="email" label="Email-cím" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="te@email.com"
              autoComplete="email"
              className={cn(
                "w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors",
                errors.email && "border-brand"
              )}
              aria-invalid={!!errors.email}
            />
          </Field>
        </div>

        <Field id="subject" label="Tárgy" error={errors.subject}>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={cn(
              "w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors",
              !form.subject && "text-muted-foreground/50",
              errors.subject && "border-brand"
            )}
            aria-invalid={!!errors.subject}
          >
            <option value="" disabled>Válassz témát...</option>
            <option value="Általános kérdés">Általános kérdés</option>
            <option value="Tartalomjavaslat">Tartalomjavaslat</option>
            <option value="Együttműködés">Együttműködés</option>
            <option value="Hibajelentés">Hibajelentés</option>
            <option value="Egyéb">Egyéb</option>
          </select>
        </Field>

        <Field id="message" label="Üzenet" error={errors.message}>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Írd le üzeneted..."
            className={cn(
              "w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none",
              errors.message && "border-brand"
            )}
            aria-invalid={!!errors.message}
          />
        </Field>

        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-foreground text-background px-10 py-4 text-sm font-semibold tracking-wide hover:bg-brand transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" aria-hidden />
              Küldés...
            </>
          ) : (
            <>
              Üzenet küldése <span aria-hidden>&#8594;</span>
            </>
          )}
        </button>
      </form>
    </>
  )
}
