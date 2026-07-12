'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function HoursSection() {
  const t = useTranslations('Hours')

  const floors = [
    {
      name: t('floors.upstairs.name'),
      tagline: t('floors.upstairs.tagline'),
      rows: [
        [t('rows.opens'), t('floors.upstairs.opens')],
        [t('rows.closes'), t('floors.upstairs.closesSunThu')],
        [t('rows.closes'), t('floors.upstairs.closesFriSat')],
      ],
    },
    {
      name: t('floors.downstairs.name'),
      tagline: t('floors.downstairs.tagline'),
      rows: [
        [t('rows.opens'), t('floors.downstairs.opens')],
        [t('rows.closes'), t('floors.downstairs.closesSunThu')],
        [t('rows.closes'), t('floors.downstairs.closesFriSat')],
      ],
    },
  ]

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
        <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">{t('eyebrow')}</p>
        <h2 className="font-display text-4xl font-600 uppercase leading-tight tracking-tight text-foreground md:text-6xl text-balance">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground/80 text-pretty">
          {t('description')}
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
