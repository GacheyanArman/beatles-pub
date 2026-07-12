'use client'

import { useTranslations } from 'next-intl'

export function FaqSection() {
  const t = useTranslations('Faq')

  const faqs = [
    [t('items.q1'), t('items.a1')],
    [t('items.q2'), t('items.a2')],
    [t('items.q3'), t('items.a3')],
    [t('items.q4'), t('items.a4')],
    [t('items.q5'), t('items.a5')],
    [t('items.q6'), t('items.a6')],
    [t('items.q7'), t('items.a7')],
    [t('items.q8'), t('items.a8')],
    [t('items.q9'), t('items.a9')],
    [t('items.q10'), t('items.a10')],
    [t('items.q11'), t('items.a11')],
    [t('items.q12'), t('items.a12')],
    [t('items.q13'), t('items.a13')],
  ]

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 md:px-6 md:py-28">
      <div className="text-center">
        <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">{t('eyebrow')}</p>
        <h2 className="text-balance font-display text-4xl font-600 uppercase tracking-tight text-foreground md:text-6xl">{t('title')}</h2>
      </div>
      <div className="mt-12 border-t border-border">
        {faqs.map(([question, answer]) => (
          <details key={question} className="group border-b border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg uppercase tracking-wide text-foreground marker:content-none">
              {question}<span aria-hidden="true" className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-3xl pb-6 leading-relaxed text-muted-foreground">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
