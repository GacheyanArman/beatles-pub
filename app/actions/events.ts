'use server'

import { desc, eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { verifyAdminSession } from '@/lib/admin-auth'
import { db } from '@/lib/db'
import { events } from '@/lib/db/schema'

async function requireAdmin() {
  const isAdmin = await verifyAdminSession()
  if (!isAdmin) throw new Error('Unauthorized')
}

function eventValues(formData: FormData) {
  const title = String(formData.get('title') ?? '').trim()
  const description = String(formData.get('description') ?? '').trim()
  const eventDate = new Date(String(formData.get('eventDate') ?? ''))
  const imageUrl = String(formData.get('imageUrl') ?? '').trim() || null
  const published = formData.get('published') === 'on'
  if (title.length < 3 || description.length < 10 || Number.isNaN(eventDate.getTime())) {
    throw new Error('Please complete all required event fields.')
  }
  return { title: title.slice(0, 160), description: description.slice(0, 2000), eventDate, imageUrl, published }
}

export async function getEditorEvents() {
  await requireAdmin()
  return db.select().from(events).where(eq(events.userId, 'admin')).orderBy(desc(events.eventDate))
}

export async function createEvent(formData: FormData) {
  await requireAdmin()
  await db.insert(events).values({ userId: 'admin', ...eventValues(formData) })
  revalidatePath('/')
  revalidatePath('/admin')
}

export async function updateEvent(formData: FormData) {
  await requireAdmin()
  const id = Number(formData.get('id'))
  if (!Number.isInteger(id)) throw new Error('Invalid event.')
  await db.update(events).set({ ...eventValues(formData), updatedAt: new Date() }).where(eq(events.id, id))
  revalidatePath('/')
  revalidatePath('/admin')
}

export async function deleteEvent(formData: FormData) {
  await requireAdmin()
  const id = Number(formData.get('id'))
  if (!Number.isInteger(id)) throw new Error('Invalid event.')
  await db.delete(events).where(eq(events.id, id))
  revalidatePath('/')
  revalidatePath('/admin')
}
