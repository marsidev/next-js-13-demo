// convert this component into a client component, as all components are server components as default
'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: any
}) {
  const segment = useSelectedLayoutSegments()
  const active = href === `/${segment}`

  return (
    <Link className={active ? 'underline' : ''} href={href}>
      {children}
    </Link>
  )
}
