'use client'

import { useTranslations } from 'next-intl'

export function SiteFooter() {
  const t = useTranslations('Footer')

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl font-700 uppercase tracking-widest text-foreground">
              {t('brand')} <span className="text-accent">{t('city')}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t('details')}
            </p>
          </div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            {t('quote')}
          </p>
        </div>
        <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
          {t('copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  )
}
