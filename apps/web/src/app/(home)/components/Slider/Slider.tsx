'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ProductCard } from './components/ProductCard'
import { ProductProps } from '@/service/context/ProductContext'

interface SliderProps {
  products?: ProductProps[]
}

export const Slider = ({ products }: SliderProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 6,
    },
  })

  console.log('products :>> ', typeof products)

  return (
    <div ref={ref} className="keen-slider">
      {Array.isArray(products) &&
        products?.map((item, index) => {
          return (
            <ProductCard
              key={item.id}
              productDescription={item.description}
              productImage={item.image}
              productPrice={item.price}
              slidePosition={index}
            />
          )
        })}
    </div>
  )
}
