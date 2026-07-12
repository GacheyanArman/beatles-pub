'use client'

import { useTranslations } from 'next-intl'

export function TickerStrip() {
  const t = useTranslations('Ticker')
  const items = [
    t('items.whiskies'),
    t('items.draughtBeers'),
    t('items.seats'),
    t('items.twoFloors'),
    t('items.liveRock'),
    t('items.britishCuisine'),
    t('items.since2008'),
    t('items.ringoFeatured'),
  ]

  return (
    <div className="overflow-hidden border-y border-border bg-primary py-3" aria-hidden="true">
      <div className="flex w-max animate-ticker gap-0">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-8 px-4 font-display text-sm uppercase tracking-[0.25em] text-primary-foreground"
              >
                {item}
                <span className="text-primary-foreground/60">&#9670;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
