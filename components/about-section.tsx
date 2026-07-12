'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function AboutSection() {
  const t = useTranslations('About')

  const stats = [
    { value: '2008', label: t('stats.founded') },
    { value: '250+', label: t('stats.guests') },
    { value: '300+', label: t('stats.whiskies') },
    { value: '1,000+', label: t('stats.drinks') },
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
        <div>
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">{t('eyebrow')}</p>
          <h2 className="text-balance font-display text-4xl font-600 uppercase leading-tight tracking-tight text-foreground md:text-6xl">{t('title')}</h2>
          <div className="mt-7 flex flex-col gap-5 text-base leading-relaxed text-foreground/80 md:text-lg">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden"><Image src="/images/oldpub.webp" alt={t('images.oldPub')} fill className="object-cover" sizes="25vw" /></div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden"><Image src="/images/nitro_cold_brew_armenia.webp" alt={t('images.upperFloor')} fill className="object-cover" sizes="25vw" /></div>
        </div>
      </div>

      <dl className="my-14 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
        {stats.map((stat) => <div key={stat.label} className="bg-background p-5 md:p-7"><dd className="font-display text-3xl font-600 text-accent md:text-4xl">{stat.value}</dd><dt className="mt-1 text-sm text-muted-foreground">{stat.label}</dt></div>)}
      </dl>

      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/sunday_roast.webp" alt={t('images.food')} fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" /></div>
        <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/80 md:text-lg">
          <p>{t('p4')}</p>
          <p>{t('p5')}</p>
          <p>{t('p6')}</p>
          <p>{t.rich('p7', {
            faq: (chunks) => <a href="#faq" className="font-medium text-accent underline decoration-accent/40 underline-offset-4">{chunks}</a>,
          })}</p>
        </div>
      </div>
    </section>
  )
}
