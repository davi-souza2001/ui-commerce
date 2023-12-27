'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ProductCard } from './components/ProductCard'

export const Slider = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 6,
    },
  })

  const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div ref={ref} className="keen-slider">
      {itens.map((item, index) => {
        return <ProductCard key={item} slidePosition={index} />
      })}
    </div>
  )
}
