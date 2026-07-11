'use client'

import { useRef } from 'react'
import { useFormStatus } from 'react-dom'
import type { Event } from '@/lib/db/schema'

function SubmitButton({ isEdit }: { isEdit: boolean }) {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} className="bg-primary px-5 py-3 font-display uppercase tracking-widest text-primary-foreground disabled:opacity-50 transition-opacity">
      {pending ? 'Saving...' : (isEdit ? 'Save changes' : 'Create event')}
    </button>
  )
}

export function EventForm({ event, action }: { event?: Event; action: (formData: FormData) => Promise<void> }) {
  const formRef = useRef<HTMLFormElement>(null)
  const dateValue = event?.eventDate ? new Date(event.eventDate.getTime() - event.eventDate.getTimezoneOffset() * 60000).toISOString().slice(0, 16) : ''

  return (
    <form 
      ref={formRef}
      action={async (formData) => {
        await action(formData)
        if (!event) formRef.current?.reset()
      }} 
      className="grid gap-4"
    >
      {event && <input type="hidden" name="id" value={event.id} />}
      <label className="grid gap-2 text-sm text-muted-foreground">Title<input name="title" defaultValue={event?.title} required minLength={3} maxLength={160} className="border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-accent" /></label>
      <label className="grid gap-2 text-sm text-muted-foreground">Date and time<input name="eventDate" type="datetime-local" defaultValue={dateValue} required className="border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-accent" /></label>
      <label className="grid gap-2 text-sm text-muted-foreground">Description<textarea name="description" defaultValue={event?.description} required minLength={10} rows={5} className="resize-y border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-accent" /></label>
      <label className="flex items-center gap-3 text-sm text-foreground"><input name="published" type="checkbox" defaultChecked={event?.published} className="size-4 accent-primary" />Published on the website</label>
      <SubmitButton isEdit={!!event} />
    </form>
  )
}
