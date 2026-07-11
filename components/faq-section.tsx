const faqs = [
  ['What are your working hours?', 'Upstairs opens at 12:00 daily and closes at 00:00 Sun–Thu or 01:00 Fri–Sat. Downstairs opens at 18:00 and closes at 02:30 Sun–Thu or 03:30 Fri–Sat. Last order is 30 minutes before closing.'],
  ['What’s the difference between the two floors?', 'Upstairs opened in 2024, with high ceilings, brighter lighting, slightly lower volume, and a new wooden interior. Downstairs is the original 2008 pub: later hours, louder music, dimmer lighting, and a classic pub atmosphere.'],
  ['Which floor do you recommend for first-time visitors?', 'We suggest starting upstairs for the brighter ambiance. You are welcome to move between floors, and when upstairs closes you can continue downstairs.'],
  ['Can I move between floors?', 'Yes. You can go up or down anytime, including moving downstairs when the upper floor closes.'],
  ['Are menu items and prices the same on both floors?', 'Almost identical. Only a few local Armenian bottled beers are not served upstairs.'],
  ['Is smoking allowed?', 'We are a non-smoking venue, but dedicated smoking areas are available.'],
  ['Where can I smoke?', 'Upstairs has a special open-air area where you may take your drink. You can also smoke near the main entrance, but drinks must stay inside there.'],
  ['How many restrooms do you have?', 'There are three restrooms downstairs and two upstairs. All are unisex.'],
  ['Can I reserve a seat at the bar?', 'Yes. Bar spots can be reserved in advance.'],
  ['What is the best way to contact you?', 'Instagram or Facebook messaging is the fastest and preferred way to reach us.'],
  ['When should I make a reservation?', 'We recommend booking online between 12:00 and 18:00. For Fridays and Saturdays, please book 3–4 days in advance.'],
  ['Are phone numbers available?', 'Yes: 041 522-023 from 12:00–18:00 and 010 522-023 after 18:00.'],
  ['Do you host live performances?', 'As of 2025, live performances are occasional—usually no more than one concert a month, often on Beatles band members’ birthdays.'],
]

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 md:px-6 md:py-28">
      <div className="text-center">
        <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">Good to know</p>
        <h2 className="text-balance font-display text-4xl font-600 uppercase tracking-tight text-foreground md:text-6xl">Frequently asked questions</h2>
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
