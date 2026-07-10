export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl font-700 uppercase tracking-widest text-foreground">
              The Beatles Pub <span className="text-accent">Yerevan</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              60 Pushkin St., Yerevan 0002, Armenia &middot; (010) 522-023 &middot; info@beatles.am
            </p>
          </div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            {'"And in the end, the love you take is equal to the love you make."'}
          </p>
        </div>
        <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} The Beatles Pub Yerevan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
