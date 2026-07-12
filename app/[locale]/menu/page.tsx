import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MenuGallery } from '@/components/menu-section'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore all eleven food menu pages from The Beatles Pub Yerevan.',
}

export default function FoodMenuPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-card pt-16">
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <Link href="/#menu" className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-accent transition-opacity hover:opacity-80">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to home
            </Link>
            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">Food Menu</p>
                <h1 className="text-balance font-display text-5xl font-600 uppercase leading-tight tracking-tight text-foreground md:text-7xl">The complete menu</h1>
              </div>
              <p className="max-w-sm text-pretty text-lg leading-relaxed text-muted-foreground">All eleven menu pages. Tap on any page to view it in full screen.</p>
            </div>
          </div>
        </section>

        <section aria-label="All food menu pages">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
            <MenuGallery />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
