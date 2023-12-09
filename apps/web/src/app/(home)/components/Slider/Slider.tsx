'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export const Slider = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
    },
  })

  return (
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1 bg-slate-600 h-20 w-20">
        1
      </div>
      <div className="keen-slider__slide number-slide2 bg-red-600 h-20 w-20">
        2
      </div>
      <div className="keen-slider__slide number-slide3 bg-blue-600 h-20 w-20">
        3
      </div>
      <div className="keen-slider__slide number-slide4 bg-orange-600 h-20 w-20">
        4
      </div>
      <div className="keen-slider__slide number-slide5 bg-green-600 h-20 w-20">
        5
      </div>
      <div className="keen-slider__slide number-slide6 bg-yellow-600 h-20 w-20">
        6
      </div>
    </div>
  )
}
