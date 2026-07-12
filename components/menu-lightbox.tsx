'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface MenuLightboxProps {
  images: string[]
  initialIndex: number
  onClose: () => void
}

export function MenuLightbox({ images, initialIndex, onClose }: MenuLightboxProps) {
  const t = useTranslations('MenuLightbox')
  const [index, setIndex] = useState(initialIndex)
  const [scale, setScale] = useState(1)
  const touchStart = useRef<{ x: number; y: number; time: number } | null>(null)
  const pinchStart = useRef<number | null>(null)

  const prev = useCallback(() => { setIndex((i) => (i > 0 ? i - 1 : images.length - 1)); setScale(1) }, [images.length])
  const next = useCallback(() => { setIndex((i) => (i < images.length - 1 ? i + 1 : 0)); setScale(1) }, [images.length])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  function handleTouchStart(e: React.TouchEvent) {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      )
      pinchStart.current = dist
    } else if (e.touches.length === 1) {
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, time: Date.now() }
    }
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (e.touches.length === 2 && pinchStart.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      )
      const newScale = Math.max(1, Math.min(3, scale * (dist / pinchStart.current)))
      setScale(newScale)
      pinchStart.current = dist
    }
  }

  function handleTouchEnd(e: React.TouchEvent) {
    pinchStart.current = null
    if (!touchStart.current) return
    if (e.changedTouches.length !== 1) return

    const dx = e.changedTouches[0].clientX - touchStart.current.x
    const dy = e.changedTouches[0].clientY - touchStart.current.y
    const dt = Date.now() - touchStart.current.time

    // Only count as swipe if horizontal distance > 50px, fast enough, and more horizontal than vertical
    if (Math.abs(dx) > 50 && dt < 400 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx > 0) prev()
      else next()
    }
    touchStart.current = null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Close"
      >
        <X className="size-6" />
      </button>

      {/* Counter */}
      <div className="absolute left-1/2 top-4 z-50 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 font-display text-sm tracking-wider text-white/80 backdrop-blur-sm">
        {index + 1} / {images.length}
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-2 z-50 hidden rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:block md:left-4 md:p-3"
        aria-label="Previous"
      >
        <ChevronLeft className="size-6" />
      </button>

      {/* Image */}
      <div
        className="relative h-[85vh] w-[90vw] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={index}
          src={images[index]}
          alt={`Menu page ${index + 1}`}
          fill
          className="object-contain transition-transform duration-200"
          style={{ transform: `scale(${scale})` }}
          sizes="90vw"
          priority
        />
      </div>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-2 z-50 hidden rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:block md:right-4 md:p-3"
        aria-label="Next"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Mobile swipe hint */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/40 md:hidden">
        {t('swipe')}
      </p>
    </div>
  )
}
