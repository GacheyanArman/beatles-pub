import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  eventDate: timestamp('eventDate').notNull(),
  imageUrl: text('imageUrl'),
  published: boolean('published').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export type Event = typeof events.$inferSelect
