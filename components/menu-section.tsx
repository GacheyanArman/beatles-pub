'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { MenuLightbox } from '@/components/menu-lightbox'

const ALL_MENU_IMAGES = Array.from({ length: 11 }, (_, i) => `/images/${i + 1}.webp`)

export function MenuGallery({ images = ALL_MENU_IMAGES }: { images?: string[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <article key={src} className="group relative aspect-[3/4] overflow-hidden border border-border bg-background p-1">
            <button
              onClick={() => setLightboxIndex(i)}
              className="relative block h-full w-full overflow-hidden border border-border cursor-pointer"
              aria-label={`Open menu page ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Menu page ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                <span className="translate-y-2 font-display text-sm uppercase tracking-wider text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Tap to view
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {lightboxIndex !== null && (
        <MenuLightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}

export function MenuSection() {
  const previewImages = ALL_MENU_IMAGES.slice(0, 3)

  return (
    <section id="menu" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">Food Menu</p>
            <h2 className="text-balance font-display text-4xl font-600 uppercase leading-tight tracking-tight text-foreground md:text-6xl">A taste of our menu</h2>
          </div>
          <p className="max-w-sm text-pretty text-lg leading-relaxed text-muted-foreground">Explore three featured menu pages here, then open the full menu to see all eleven pages.</p>
        </div>

        <div className="mt-12">
          <MenuGallery images={previewImages} />
        </div>

        <Link href="/menu" className="mt-8 inline-flex items-center gap-2 bg-primary px-5 py-3 font-display text-sm uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90">
          View all 11 menu pages
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
