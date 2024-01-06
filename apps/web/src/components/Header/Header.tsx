import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { CiHeart } from 'react-icons/ci'
import { MdOutlineShoppingCart } from 'react-icons/md'

export const Header = () => {
  return (
    <header className="h-20 w-full flex items-center justify-between border-[1px] border-b-gray-200">
      <Link href="/" className="h-full w-96 flex items-center justify-center">
        <h1 className="text-2xl font-bold font-roboto">Exclusive</h1>
      </Link>
      <div className="h-full w-full flex items-center justify-center">
        <ul className="h-full w-96 flex items-center justify-around">
          <li className="font-semibold text-md cursor-pointer rounded-md p-2 transition-all hover:bg-black hover:text-white">
            Home
          </li>
          <li className="font-semibold text-md cursor-pointer rounded-md p-2 transition-all hover:bg-black hover:text-white">
            Contact
          </li>
          <li className="font-semibold text-md cursor-pointer rounded-md p-2 transition-all hover:bg-black hover:text-white">
            About
          </li>
          <li className="font-semibold text-md cursor-pointer rounded-md p-2 transition-all hover:bg-black hover:text-white">
            Sign Up
          </li>
        </ul>
      </div>
      <div className="h-full w-96 flex items-center justify-center">
        <InputGroup w="13rem" textColor="white">
          <Input placeholder="Search for products" fontWeight="medium" />
          <InputRightElement>
            <Image
              src="/assets/search.svg"
              alt="Search Icon"
              width={16}
              height={16}
            />
          </InputRightElement>
        </InputGroup>
        <Link
          href="/wishlist"
          className="ml-5 cursor-pointer text-2xl p-2 rounded-md transition-all hover:bg-red-500 hover:text-white"
        >
          <CiHeart />
        </Link>
        <p className="mx-5 cursor-pointer text-2xl p-2">
          <MdOutlineShoppingCart />
        </p>
      </div>
    </header>
  )
}
