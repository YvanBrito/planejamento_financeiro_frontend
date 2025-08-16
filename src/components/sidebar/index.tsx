'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Orçamento', href: '/budget' },
  ]

  return (
    <aside className="bg-cyan-200 w-[15vw] h-dvh mr-6">
      <Image
        src="/rofin_head.png"
        alt="rofin"
        width={100}
        height={100}
        className="mt-10 mb-14 mx-auto"
      />
      <nav className="ml-10 flex flex-col gap-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="my-2">
              <Link href={item.href}>
                <span
                  className={`block px-4 py-2 rounded-l-md transition-colors 
                    ${
                      pathname === item.href
                        ? 'bg-cyan-500'
                        : 'hover:bg-cyan-100'
                    }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
