'use client'

import { useRouter } from 'next/navigation'

export function SignOutButton() {
  const router = useRouter()

  async function handleSignOut() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/sign-in')
    router.refresh()
  }

  return (
    <button
      onClick={handleSignOut}
      className="border border-border px-4 py-2 font-display text-sm uppercase tracking-widest text-foreground hover:border-accent"
    >
      Sign out
    </button>
  )
}
