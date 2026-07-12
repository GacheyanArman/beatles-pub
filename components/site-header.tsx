'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { LanguageSwitcher } from './language-switcher'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const locale = useLocale()
  const t = useTranslations('Navigation')

  const links = [
    { href: '#about', label: t('about') },
    { href: '/menu', label: t('menu') },
    { href: '#hours', label: t('hours') },
    { href: '#events', label: t('events') },
    { href: '#faq', label: t('faq') },
    { href: '#contact', label: t('contact') },
  ]

  const buildHref = (path: string) => {
    if (path.startsWith('#')) return path
    return locale === 'en' ? path : `/${locale}${path}`
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href={buildHref('/')} className="font-display text-lg font-700 uppercase tracking-widest text-foreground">
          The Beatles Pub
          <span className="ml-2 hidden text-accent sm:inline">Yerevan</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={buildHref(l.href)}
              className="font-display text-sm uppercase tracking-wider text-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={buildHref('#contact')}
            className="bg-primary px-4 py-2 font-display text-sm uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t('bookTable')}
          </Link>
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? t('closeMenu') : t('openMenu')}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={buildHref(l.href)}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 font-display text-base uppercase tracking-wider text-foreground/90"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={buildHref('#contact')}
                onClick={() => setOpen(false)}
                className="mt-4 block bg-primary px-4 py-3 text-center font-display text-base uppercase tracking-wider text-primary-foreground"
              >
                {t('bookTable')}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
