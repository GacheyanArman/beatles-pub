import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { TickerStrip } from '@/components/ticker-strip'
import { AboutSection } from '@/components/about-section'
import { MenuSection } from '@/components/menu-section'
import { HoursSection } from '@/components/hours-section'
import { EventsSection } from '@/components/events-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TickerStrip />
        <AboutSection />
        <MenuSection />
        <HoursSection />
        <EventsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
