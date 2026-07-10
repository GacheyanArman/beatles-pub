import Image from 'next/image'

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <Image
        src="/images/facade-day.png"
        alt="The red facade of The Beatles Pub on Pushkin Street, Yerevan"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-40 md:px-6 md:pb-14">
        <p className="mb-4 font-display text-sm uppercase tracking-[0.35em] text-accent md:text-base">
          Est. 2008 &middot; 60 Pushkin St., Yerevan
        </p>
        <h1 className="font-display text-[17vw] font-700 uppercase leading-[0.9] tracking-tight text-foreground md:text-[9rem] lg:text-[11rem] text-balance">
          The Beatles Pub
        </h1>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-foreground/85 text-pretty">
            The oldest pub in Yerevan. Two floors of dark wood, warm light, classic rock — and everything the Beatles
            left us.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-primary px-6 py-3.5 font-display text-sm uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a Table
            </a>
            <a
              href="#menu"
              className="border border-foreground/40 px-6 py-3.5 font-display text-sm uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Food &amp; Drinks
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
