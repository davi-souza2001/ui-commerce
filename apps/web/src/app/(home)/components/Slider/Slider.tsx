'use client'
import { Carousel, CarouselContent } from '@/components/ui/carousel'
import { ProductCard } from './components/ProductCard'
import { ProductProps } from '@/api/endpoints/products/type'

interface SliderProps {
  products?: ProductProps[]
}

export const Slider = ({ products }: SliderProps) => {
  return (
    <Carousel className='w-full h-full'>
      <CarouselContent>
      {products?.map((item, index) => {
        return (
          <ProductCard
            addToCart
            key={item.id}
            slidePosition={index}
            productName={item.name}
            productImage={item.image}
            productPrice={item.price}
            productDescription={item.description}
          />
        )
      })}
      </CarouselContent>
    </Carousel>
  )
}
