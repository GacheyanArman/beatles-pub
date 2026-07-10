import Image from 'next/image'

const dishes = [
  {
    image: '/images/fish-and-chips.png',
    alt: 'Classic fish and chips with mushy peas',
    title: 'Fish & Chips',
    description: 'Golden beer-battered cod, thick-cut chips, mushy peas. The classic done right.',
  },
  {
    image: '/images/burger.png',
    alt: 'Pub burger with a knife through the bun and fries',
    title: 'Pub Burgers & Ribs',
    description: 'Juicy burgers, smoked ribs, bangers & mash, Scotch eggs — proper pub grub.',
  },
  {
    image: '/images/whiskey-pour.png',
    alt: 'Bartender pouring whiskey at the bar',
    title: '300+ Whiskeys',
    description: 'One of the largest whiskey collections in Armenia, plus 20+ draught beers on tap.',
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">Food &amp; Drinks</p>
            <h2 className="font-display text-4xl font-600 uppercase leading-tight tracking-tight text-foreground md:text-6xl text-balance">
              A hard day&apos;s night deserves a proper meal
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-muted-foreground text-pretty">
            Traditional British cuisine and more than 1,000 varieties of drinks across two bars.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {dishes.map((d) => (
            <article key={d.title} className="group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={d.image || "/placeholder.svg"}
                  alt={d.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-600 uppercase tracking-wide text-foreground">
                {d.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{d.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
