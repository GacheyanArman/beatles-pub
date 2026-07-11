import Image from 'next/image'
import Link from 'next/link'
import { asc, eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { events } from '@/lib/db/schema'

export async function EventsSection() {
  const publishedEvents = await db.select().from(events).where(eq(events.published, true)).orderBy(asc(events.eventDate))
  const previewEvents = publishedEvents.slice(0, 3)
  const hasMore = publishedEvents.length > 3

  return (
    <section id="events" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/live-music.png" alt="Live band performing at Beatles Pub" fill className="object-cover" sizes="(max-width:1024px) 100vw, 42vw" />
            </div>
          </div>
          <div>
            <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">Live Music &amp; News</p>
            <h2 className="text-balance font-display text-4xl font-600 uppercase leading-tight tracking-tight text-foreground md:text-6xl">The band plays on</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">Concerts are occasional, but Beatles milestones always matter here. Follow this space for upcoming performances, celebrations, and pub news.</p>

            {previewEvents.length ? (
              <div className="mt-10 flex flex-col gap-6">
                {previewEvents.map((event) => (
                  <article key={event.id} className="grid gap-5 border-t border-border pt-6 sm:grid-cols-[9rem_1fr]">
                    <div>
                      <time className="font-display text-sm uppercase tracking-widest text-primary" dateTime={event.eventDate.toISOString()}>{event.eventDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</time>
                    </div>
                    <div><h3 className="font-display text-2xl uppercase tracking-wide text-foreground">{event.title}</h3><p className="mt-2 whitespace-pre-line leading-relaxed text-muted-foreground">{event.description}</p></div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-10 border-y border-border py-7"><p className="font-display text-xl uppercase tracking-wide text-foreground">No event announced right now</p><p className="mt-2 text-muted-foreground">New dates and pub news will appear here as soon as they are published.</p></div>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              {hasMore && (
                <Link href="/events" className="border border-foreground/40 px-6 py-3.5 font-display text-sm uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent">
                  View all events
                </Link>
              )}
              <a href="https://www.instagram.com/beatlespubyerevan/" target="_blank" rel="noopener noreferrer" className="border border-foreground/40 px-6 py-3.5 font-display text-sm uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent">Follow on Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
