import { NextResponse } from 'next/server'
import { verifyPassword, createSession, sessionCookieOptions } from '@/lib/admin-auth'

const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const MAX_ATTEMPTS = 5
const attempts = new Map<string, { count: number; firstAttempt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = attempts.get(ip)
  if (!record || now - record.firstAttempt > RATE_LIMIT_WINDOW) {
    attempts.set(ip, { count: 1, firstAttempt: now })
    return false
  }
  record.count++
  return record.count > MAX_ATTEMPTS
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many attempts. Please try again in 15 minutes.' },
      { status: 429 }
    )
  }

  try {
    const { password } = await request.json()

    if (!password || typeof password !== 'string') {
      return NextResponse.json({ error: 'Please enter a password.' }, { status: 400 })
    }

    const valid = await verifyPassword(password)

    if (!valid) {
      return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 })
    }

    // Reset rate limit on success
    attempts.delete(ip)

    const token = await createSession()
    const response = NextResponse.json({ success: true })
    response.cookies.set(sessionCookieOptions(token))
    return response
  } catch {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
