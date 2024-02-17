'use client'
import { deleteCookie } from 'cookies-next'
import Link from 'next/link'
import { CiHeart } from 'react-icons/ci'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Combobox } from './components'

export const Header = () => {
  const logout = () => {
    deleteCookie('token-login-ui-commerce')
  }

  return (
    <header className="h-20 w-full flex items-center justify-between border-[1px] border-b-gray-200">
      <Link href="/" className="h-full w-96 flex items-center justify-center">
        <h1 className="text-2xl font-bold font-roboto">Exclusive</h1>
      </Link>
      <div className="h-full w-full flex items-center justify-center">
        <ul className="h-full w-96 flex items-center justify-around">
          <Link
            href="/"
            className="font-semibold text-md cursor-pointer rounded-md p-2 transition-all hover:bg-black hover:text-white"
          >
            Home
          </Link>
          <Link
            href="*"
            className="font-semibold text-md cursor-pointer rounded-md p-2 transition-all hover:bg-black hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="*"
            className="font-semibold text-md cursor-pointer rounded-md p-2 transition-all hover:bg-black hover:text-white"
          >
            About
          </Link>
          <Link
            onClick={logout}
            href="/login"
            className="font-semibold text-md cursor-pointer rounded-md p-2 transition-all hover:bg-black hover:text-white"
          >
            Sign Up
          </Link>
        </ul>
      </div>
      <div className="h-full w-96 flex items-center justify-center">
        <Combobox />
        <Link
          href="/wishlist"
          className="ml-5 cursor-pointer text-2xl p-2 rounded-md transition-all hover:bg-red-500 hover:text-white"
        >
          <CiHeart />
        </Link>
        <Link
          href="/cart"
          className="mx-5 cursor-pointer text-2xl p-2 rounded-md transition-all hover:bg-blue-500 hover:text-white"
        >
          <MdOutlineShoppingCart />
        </Link>
      </div>
    </header>
  )
}
