import { MapPin, Phone, Mail } from 'lucide-react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">Come Together</p>
          <h2 className="font-display text-4xl font-600 uppercase leading-tight tracking-tight text-foreground md:text-6xl text-balance">
            Book your table
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-foreground/80 text-pretty">
            The pub is often busy, even on weekdays — we recommend booking in advance. The fastest way to reach us is a
            DM on Instagram or Facebook.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/beatlespubyerevan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary px-6 py-3.5 font-display text-sm uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              <InstagramIcon className="size-4" />
              Book via Instagram
            </a>
            <a
              href="https://www.facebook.com/beatlespub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-foreground/40 px-6 py-3.5 font-display text-sm uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <FacebookIcon className="size-4" />
              Book via Facebook
            </a>
          </div>
        </div>

        <div className="border border-border bg-card p-8 md:p-10">
          <h3 className="font-display text-2xl font-600 uppercase tracking-wide text-accent">Contact Us</h3>
          <dl className="mt-6 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="font-display text-sm uppercase tracking-widest text-muted-foreground">Address</dt>
                <dd className="mt-1 text-lg text-foreground">60 Pushkin St., Yerevan 0002, Armenia</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="font-display text-sm uppercase tracking-widest text-muted-foreground">Phones</dt>
                <dd className="mt-1 text-lg text-foreground">
                  <a href="tel:+37410522023" className="transition-colors hover:text-accent">
                    (010) 522-023
                  </a>
                  <span className="block text-sm text-muted-foreground">
                    (041) 522-023 &middot; 12:00 &ndash; 18:00
                  </span>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="font-display text-sm uppercase tracking-widest text-muted-foreground">Email</dt>
                <dd className="mt-1 text-lg">
                  <a href="mailto:info@beatles.am" className="text-foreground transition-colors hover:text-accent">
                    info@beatles.am
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
