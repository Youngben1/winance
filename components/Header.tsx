import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import UserDropdown from './UserDropdown'

const Header = () => {
  return (
    <header className='sticky top-0 header'>
        <div className='container header-wrapper'>
            <Link href="/" className='font-bold text-xl'>Winance</Link>

            <nav className='hidden sm:block'>
                <NavItems />
            </nav>
            <UserDropdown />
        </div>
    </header>
  )
}

export default Header