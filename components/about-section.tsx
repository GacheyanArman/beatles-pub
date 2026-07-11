import Image from 'next/image'

const stats = [
  { value: '2008', label: 'Founded in Yerevan' },
  { value: '250+', label: 'Guests on two floors' },
  { value: '300+', label: 'Whiskeys' },
  { value: '1,000+', label: 'Varieties of drinks' },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
        <div>
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">Our Story</p>
          <h2 className="text-balance font-display text-4xl font-600 uppercase leading-tight tracking-tight text-foreground md:text-6xl">One of Yerevan&apos;s oldest pubs</h2>
          <div className="mt-7 flex flex-col gap-5 text-base leading-relaxed text-foreground/80 md:text-lg">
            <p>Founded in March 2008 in Yerevan, Beatles Pub began as a cozy underground spot with roughly 60 seats and a single bar. Today, it&apos;s widely considered one of the oldest—if not the oldest—pubs in Yerevan.</p>
            <p>Over the years we expanded, and in April 2024 we opened an upper floor above the original basement. With two floors, we can now welcome more than 250 guests.</p>
            <p>We now have two large bars—one on each floor—stocked with an extensive collection of whiskey, beer, and other drinks. We currently offer over 300 whiskeys, 20 draft beers, and more than 100 bottled beers. Altogether, the bar carries more than 1,000 varieties of drinks.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden"><Image src="/images/oldpub.webp" alt="The original downstairs Beatles Pub bar" fill className="object-cover" sizes="25vw" /></div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden"><Image src="/images/nitro_cold_brew_armenia.webp" alt="The upper floor bar opened in 2024" fill className="object-cover" sizes="25vw" /></div>
        </div>
      </div>

      <dl className="my-14 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
        {stats.map((stat) => <div key={stat.label} className="bg-background p-5 md:p-7"><dd className="font-display text-3xl font-600 text-accent md:text-4xl">{stat.value}</dd><dt className="mt-1 text-sm text-muted-foreground">{stat.label}</dt></div>)}
      </dl>

      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/sunday_roast.webp" alt="Classic pub food served upstairs" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" /></div>
        <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/80 md:text-lg">
          <p>The upper floor opens at 12 pm and serves a classic pub menu, including Fish &amp; Chips, Bangers &amp; Mash, Scotch Eggs, ribs, burgers, sausages, and much more.</p>
          <p>While we don&apos;t host live performances every night, we celebrate the Beatles&apos; milestones—especially the band members&apos; birthdays and memorial days. We&apos;ve participated in seven Ringo Starr birthday events and have been featured several times by the Beatles&apos; official page and Ringo Starr&apos;s official page.</p>
          <p>The pub is often busy, even on weekdays, so we recommend booking in advance to secure a seat. Bar reservations are welcome as well. The preferred way to book is by sending a DM to our Instagram or Facebook pages, though you can also call the numbers listed on the contacts page.</p>
          <p>You can read more about booking, smoking, and opening times in our <a href="#faq" className="font-medium text-accent underline decoration-accent/40 underline-offset-4">FAQ below</a>.</p>
        </div>
      </div>
    </section>
  )
}
