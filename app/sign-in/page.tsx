import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { verifyAdminSession } from '@/lib/admin-auth'
import { AdminLoginForm } from '@/components/auth-form'

export default async function SignInPage() {
  const isAdmin = await verifyAdminSession()
  if (isAdmin) redirect('/admin')

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md border border-border bg-card p-7 md:p-10 relative">
        <Link href="/" className="absolute -top-12 left-0 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-accent transition-opacity hover:opacity-80">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>
        <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Beatles Pub</p>
        <h1 className="mt-3 font-display text-4xl uppercase text-foreground">Admin Panel</h1>
        <p className="mb-8 mt-3 text-muted-foreground">Enter your password to access the control panel.</p>
        <AdminLoginForm />
      </div>
    </main>
  )
}
