import Image from 'next/image'

const stats = [
  { value: '2008', label: 'Open since' },
  { value: '300+', label: 'Whiskeys' },
  { value: '20+', label: 'Draught beers' },
  { value: '250+', label: 'Seats on two floors' },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">Our Story</p>
          <h2 className="font-display text-4xl font-600 uppercase leading-tight tracking-tight text-foreground md:text-6xl text-balance">
            The oldest pub in Yerevan
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/80">
            <p>
              Founded in March 2008 as a cozy underground spot with sixty seats and a single bar, The Beatles Pub grew
              into a city legend. In 2024 we opened a second floor above the original basement — brand-new wood, high
              ceilings, and the same soul.
            </p>
            <p>
              Two large bars carry more than 1,000 varieties of drinks. We celebrate the Beatles&apos; milestones all
              year round — and we&apos;ve been featured by the Beatles&apos; official page and Ringo Starr himself.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-5">
                <dt className="order-2 mt-1 block text-sm text-muted-foreground">{s.label}</dt>
                <dd className="font-display text-3xl font-600 text-accent">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/bar-interior.png"
              alt="Downstairs bar with whiskey shelves and the red telephone box"
              fill
              className="scale-110 object-cover object-[40%_40%]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden">
            <Image
              src="/images/upstairs-bar.png"
              alt="The new upstairs bar with brass globe lamps"
              fill
              className="scale-[2.4] object-cover object-[45%_0%]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
