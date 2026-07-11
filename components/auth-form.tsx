'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function AdminLoginForm() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const password = String(formData.get('password'))

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Login failed.')
        setPending(false)
        return
      }

      router.push('/admin')
      router.refresh()
    } catch {
      setError('Network error. Please try again.')
      setPending(false)
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <label className="flex flex-col gap-2 text-sm text-muted-foreground">
        Password
        <input
          name="password"
          type="password"
          required
          minLength={4}
          autoComplete="current-password"
          autoFocus
          className="border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-accent"
          placeholder="Enter administrator password"
        />
      </label>
      {error && <p role="alert" className="text-sm text-primary">{error}</p>}
      <button
        disabled={pending}
        className="bg-primary px-5 py-3 font-display uppercase tracking-widest text-primary-foreground disabled:opacity-50"
      >
        {pending ? 'Checking…' : 'Sign in'}
      </button>
    </form>
  )
}
