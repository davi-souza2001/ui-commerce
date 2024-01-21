'use client'
import UseProduct from '@/service/hooks/UseProduct'
import { Slider } from '..'

type SalesTypeProps = {
  type: string
}

export const SalesType = ({ type }: SalesTypeProps) => {
  const { products } = UseProduct()

  return (
    <>
      <div className="h-12 w-full flex items-center justify-start mb-10 mt-5">
        <div className="h-full w-7 rounded-md bg-red-500" />
        <p className="ml-2 font-bold text-red-500">Today&apos;s</p>
      </div>
      <p className="text-2xl font-bold font-roboto mb-2">{type}</p>
      <Slider products={products} />
    </>
  )
}
