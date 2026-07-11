import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { asc, eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { events } from '@/lib/db/schema'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming concerts, celebrations, and pub news at The Beatles Pub Yerevan.',
}

export default async function EventsPage() {
  const publishedEvents = await db.select().from(events).where(eq(events.published, true)).orderBy(asc(events.eventDate))

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-24 md:px-6 md:py-32">
        <Link href="/#events" className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-accent transition-opacity hover:opacity-80">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>

        <h1 className="mt-8 font-display text-5xl font-600 uppercase leading-tight tracking-tight text-foreground md:text-7xl">All Events</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">Every concert, celebration, and milestone at The Beatles Pub.</p>

        {publishedEvents.length ? (
          <div className="mt-12 flex flex-col gap-8">
            {publishedEvents.map((event) => (
              <article key={event.id} className="grid gap-5 border-t border-border pt-8 sm:grid-cols-[10rem_1fr]">
                <div>
                  <time className="font-display text-sm uppercase tracking-widest text-primary" dateTime={event.eventDate.toISOString()}>
                    {event.eventDate.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })}
                  </time>
                  <p className="mt-1 font-display text-xs uppercase tracking-widest text-muted-foreground">
                    {event.eventDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl uppercase tracking-wide text-foreground md:text-3xl">{event.title}</h2>
                  <p className="mt-3 whitespace-pre-line leading-relaxed text-muted-foreground">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 border-y border-border py-10">
            <p className="font-display text-xl uppercase tracking-wide text-foreground">No events announced yet</p>
            <p className="mt-2 text-muted-foreground">New dates and pub news will appear here as soon as they are published.</p>
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
