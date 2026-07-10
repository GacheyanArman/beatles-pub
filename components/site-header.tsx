'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'Our Story' },
  { href: '#menu', label: 'Food & Drinks' },
  { href: '#hours', label: 'Hours' },
  { href: '#events', label: 'Live Music' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
        <Link href="#top" className="font-display text-lg font-700 uppercase tracking-widest text-foreground">
          The Beatles Pub
          <span className="ml-2 hidden text-accent sm:inline">Yerevan</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm uppercase tracking-wider text-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary px-4 py-2 font-display text-sm uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a Table
          </a>
        </nav>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 font-display text-base uppercase tracking-wider text-foreground/90"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 block bg-primary px-4 py-3 text-center font-display text-base uppercase tracking-wider text-primary-foreground"
              >
                Book a Table
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
