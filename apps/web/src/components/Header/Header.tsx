import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="h-20 w-full flex items-center justify-between bg-red-500">
      <div className="h-full w-96 flex items-center justify-center bg-blue-500">
        <h1 className="text-2xl font-bold font-roboto">Exclusive</h1>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <ul className="h-full w-96 flex items-center justify-around bg-orange-500">
          <li className="font-semibold text-md">Home</li>
          <li className="font-semibold text-md">Contact</li>
          <li className="font-semibold text-md">About</li>
          <li className="font-semibold text-md">Sign Up</li>
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
        <p className="ml-5">like</p>
        <p className="mx-5">cart</p>
      </div>
    </header>
  )
}
