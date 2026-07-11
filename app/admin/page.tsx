import Link from 'next/link'
import { redirect } from 'next/navigation'
import { verifyAdminSession } from '@/lib/admin-auth'
import { createEvent, deleteEvent, getEditorEvents, updateEvent } from '@/app/actions/events'
import { EventForm } from '@/components/event-form'
import { SignOutButton } from '@/components/sign-out-button'

export default async function AdminPage() {
  const isAdmin = await verifyAdminSession()
  if (!isAdmin) redirect('/sign-in')
  const editorEvents = await getEditorEvents()

  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-border pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Beatles Pub</p><h1 className="mt-2 font-display text-4xl uppercase text-foreground md:text-6xl">Admin Panel</h1></div>
          <div className="flex items-center gap-3"><Link href="/" className="border border-border px-4 py-2 font-display text-sm uppercase tracking-widest text-foreground hover:border-accent">View site</Link><SignOutButton /></div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <section className="border border-border bg-card p-6"><h2 className="mb-6 font-display text-2xl uppercase text-foreground">Add an event or news item</h2><EventForm action={createEvent} /></section>
          <section><div className="flex items-end justify-between gap-4"><div><p className="font-display text-sm uppercase tracking-[0.25em] text-accent">Your entries</p><h2 className="mt-2 font-display text-3xl uppercase text-foreground">Published &amp; drafts</h2></div><span className="text-sm text-muted-foreground">{editorEvents.length} total</span></div>
            <div className="mt-6 flex flex-col gap-6">
              {editorEvents.length === 0 && <p className="border border-border p-6 text-muted-foreground">No entries yet. Create the first one using the form.</p>}
              {editorEvents.map((event) => (
                <details key={event.id} className="border border-border bg-card" open={editorEvents.length === 1}>
                  <summary className="cursor-pointer list-none p-5 marker:content-none"><div className="flex items-center justify-between gap-4"><div><p className="font-display text-xl uppercase text-foreground">{event.title}</p><p className="mt-1 text-sm text-muted-foreground">{event.eventDate.toLocaleString('en-GB')} · {event.published ? 'Published' : 'Draft'}</p></div><span className="text-accent">Edit</span></div></summary>
                  <div className="border-t border-border p-5"><EventForm event={event} action={updateEvent} /><form action={deleteEvent} className="mt-4"><input type="hidden" name="id" value={event.id} /><button className="text-sm text-primary underline underline-offset-4">Delete this entry</button></form></div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
