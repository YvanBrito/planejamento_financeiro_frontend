'use client'
import { signOut } from 'next-auth/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Button from '../design_system/button'
import { Session } from 'next-auth'
import { Breadcrumb } from '../design_system/breadcrumb'

export default function Header({ session }: { session: Session | null }) {
  return (
    <header className="flex justify-between items-center gap-4 w-full py-3 px-7">
      <div>
        <Breadcrumb />
      </div>
      <div>
        {session?.user.email}
        <Button onClick={() => signOut()} variant="link">
          Sair <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </Button>
      </div>
    </header>
  )
}
