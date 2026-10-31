/**
 * Shared form types + validation.
 * Imported by the Vue pages (client) and the Nitro API routes (server) so the
 * rules can never drift apart.
 */

export interface ContactPayload {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  /** Honeypot. Real visitors never fill this in. */
  website: string
}

export interface QuotePayload {
  name: string
  email: string
  phone: string
  organisation: string
  eventType: string
  eventDate: string
  guests: string
  service: string
  cuisine: string
  budget: string
  message: string
  /** Honeypot. Real visitors never fill this in. */
  website: string
}

export type FieldErrors<T> = Partial<Record<keyof T, string>>

export const contactSubjects = [
  'General enquiry',
  'Table reservation',
  'Group dining',
  'Feedback',
] as const

export const eventTypes = [
  'Birthday or family celebration',
  'Corporate lunch or meeting',
  'Wedding or engagement function',
  'Festival or community gathering',
  'Other',
] as const

export const serviceTypes = [
  'Group dining at Dining District',
  'Party or event booking',
  'Corporate or bulk order',
  'Something else',
] as const

export const cuisinePreferences = [
  'Vegetarian only',
  'Non-vegetarian only',
  'Both vegetarian and non-vegetarian',
] as const

const text = (value: unknown, max: number): string =>
  typeof value === 'string' ? value.trim().slice(0, max) : ''

const asRecord = (raw: unknown): Record<string, unknown> =>
  raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {}

export function normaliseContact(raw: unknown): ContactPayload {
  const r = asRecord(raw)
  return {
    name: text(r.name, 100),
    email: text(r.email, 160),
    phone: text(r.phone, 30),
    subject: text(r.subject, 80),
    message: text(r.message, 3000),
    website: text(r.website, 200),
  }
}

export function normaliseQuote(raw: unknown): QuotePayload {
  const r = asRecord(raw)
  return {
    name: text(r.name, 100),
    email: text(r.email, 160),
    phone: text(r.phone, 30),
    organisation: text(r.organisation, 120),
    eventType: text(r.eventType, 80),
    eventDate: text(r.eventDate, 10),
    guests: text(r.guests, 6),
    service: text(r.service, 80),
    cuisine: text(r.cuisine, 80),
    budget: text(r.budget, 80),
    message: text(r.message, 3000),
    website: text(r.website, 200),
  }
}

export const isEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)

/** Accepts Indian formats such as "086394 08555", "+91 86394 08555", "8639408555". */
export const isPhone = (value: string): boolean => {
  if (!/^[+\d\s()-]+$/.test(value)) return false
  const digits = value.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 13
}

/** True when an ISO date (yyyy-mm-dd) is today or later. One day of slack covers time zones. */
export const isNotPast = (iso: string, now: Date = new Date()): boolean => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false
  const [y, m, d] = iso.split('-').map(Number) as [number, number, number]
  const picked = Date.UTC(y, m - 1, d)
  if (Number.isNaN(picked)) return false
  const yesterday = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() - 1)
  return picked >= yesterday
}

export function validateContact(p: ContactPayload): FieldErrors<ContactPayload> {
  const errors: FieldErrors<ContactPayload> = {}
  if (p.name.length < 2) errors.name = 'Please enter your name.'
  if (!p.email) errors.email = 'Please enter your email address.'
  else if (!isEmail(p.email)) errors.email = 'Please enter a valid email address, for example name@example.com.'
  if (p.phone && !isPhone(p.phone)) errors.phone = 'Please enter a valid phone number, or leave this blank.'
  if (!p.subject) errors.subject = 'Please choose a subject.'
  if (p.message.length < 10) errors.message = 'Please tell us a little more (at least 10 characters).'
  return errors
}

export function validateQuote(p: QuotePayload): FieldErrors<QuotePayload> {
  const errors: FieldErrors<QuotePayload> = {}
  if (p.name.length < 2) errors.name = 'Please enter your name.'
  if (!p.email) errors.email = 'Please enter your email address.'
  else if (!isEmail(p.email)) errors.email = 'Please enter a valid email address, for example name@example.com.'
  if (!p.phone) errors.phone = 'Please enter a phone number so we can call you back.'
  else if (!isPhone(p.phone)) errors.phone = 'Please enter a valid phone number.'
  if (!p.eventType) errors.eventType = 'Please choose the type of occasion.'
  if (!p.eventDate) errors.eventDate = 'Please choose your event date.'
  else if (!isNotPast(p.eventDate)) errors.eventDate = 'Please choose today or a future date.'
  const guests = Number(p.guests)
  if (!p.guests) errors.guests = 'Please tell us roughly how many guests to expect.'
  else if (!Number.isInteger(guests) || guests < 1 || guests > 5000)
    errors.guests = 'Please enter a whole number between 1 and 5000.'
  if (!p.service) errors.service = 'Please choose the service you need.'
  if (!p.cuisine) errors.cuisine = 'Please choose a menu preference.'
  return errors
}
