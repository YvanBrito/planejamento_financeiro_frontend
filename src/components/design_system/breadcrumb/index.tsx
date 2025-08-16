'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter((segment) => segment)

  let currentPath = ''

  const breadcrumbs = segments.map((segment, index) => {
    currentPath += `/${segment}`

    const name = segment
      .replace(/-/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    const isLast = index === segments.length - 1

    return (
      <span key={currentPath} className="flex items-center">
        {isLast ? (
          <span className="text-gray-400">{name}</span>
        ) : (
          <>
            <Link href={currentPath}>
              <span className="text-blue-500 hover:underline">{name}</span>
            </Link>
            <span className="mx-2 text-gray-500">/</span>
          </>
        )}
      </span>
    )
  })

  return (
    <nav aria-label="breadcrumb" className="text-sm">
      <ol className="flex p-4">
        {breadcrumbs.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </nav>
  )
}
