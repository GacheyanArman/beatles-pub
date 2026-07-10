import Image from 'next/image'

const events = [
  { date: 'July 7', title: 'Peace & Love from Yerevan — Happy Birthday, Ringo!' },
  { date: 'October 9', title: "John Lennon's Birthday — Live at the Upper Floor" },
  { date: 'February 25', title: "George Harrison's Birthday with The Beertles" },
  { date: 'March 11', title: 'Beatles Pub Anniversary Concert' },
]

export function EventsSection() {
  return (
    <section id="events" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-2">
        <div className="relative order-2 aspect-[4/3] overflow-hidden lg:order-1">
          <Image
            src="/images/live-music.png"
            alt="Live band playing under warm amber light at The Beatles Pub"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">Live Music</p>
          <h2 className="font-display text-4xl font-600 uppercase leading-tight tracking-tight text-foreground md:text-6xl text-balance">
            The band plays on
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-foreground/80 text-pretty">
            We celebrate the Beatles&apos; milestones with live tribute concerts — especially the band members&apos;
            birthdays. Our videos have been shared by Ringo Starr and the Beatles&apos; official pages.
          </p>

          <ul className="mt-8 divide-y divide-border border-y border-border">
            {events.map((e) => (
              <li key={e.title} className="flex items-baseline gap-6 py-4">
                <span className="w-24 shrink-0 font-display text-sm uppercase tracking-widest text-primary">
                  {e.date}
                </span>
                <span className="text-foreground/90">{e.title}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://www.instagram.com/beatlespubyerevan/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border border-foreground/40 px-6 py-3.5 font-display text-sm uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Follow for upcoming events
          </a>
        </div>
      </div>
    </section>
  )
}
