import Image from 'next/image'

const floors = [
  {
    name: 'Upstairs',
    tagline: 'Opened 2024 · brighter, high ceilings, lower volume',
    rows: [
      ['Opens', '12:00 every day'],
      ['Closes', '00:00 (Sun–Thu)'],
      ['Closes', '01:00 (Fri–Sat)'],
    ],
  },
  {
    name: 'Downstairs',
    tagline: 'The original 2008 basement · classic pub vibe',
    rows: [
      ['Opens', '18:00 every day'],
      ['Closes', '02:30 (Sun–Thu)'],
      ['Closes', '03:30 (Fri–Sat)'],
    ],
  },
]

export function HoursSection() {
  return (
    <section id="hours" className="relative overflow-hidden">
      <Image
        src="/images/facade-drum.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/85" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">Working Hours</p>
        <h2 className="font-display text-4xl font-600 uppercase leading-tight tracking-tight text-foreground md:text-6xl text-balance">
          Eight days a week
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground/80 text-pretty">
          Two floors, each with its own vibe. Start upstairs from noon, then move down when the night gets going. Last
          order is always 30 minutes before closing.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {floors.map((f) => (
            <div key={f.name} className="border border-border bg-background/90 p-8 backdrop-blur-sm">
              <h3 className="font-display text-3xl font-600 uppercase tracking-wide text-accent">{f.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.tagline}</p>
              <dl className="mt-6 space-y-3">
                {f.rows.map(([label, value], i) => (
                  <div key={i} className="flex items-baseline justify-between border-b border-border pb-3">
                    <dt className="font-display text-sm uppercase tracking-widest text-muted-foreground">{label}</dt>
                    <dd className="text-lg text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
