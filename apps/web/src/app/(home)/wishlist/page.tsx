import { ProductCard } from '../components/Slider/components/ProductCard'

const WishList = () => {
  return (
    <main className="min-h-screen w-full p-5 grid grid-cols-4">
      <ProductCard addToCart />
      <ProductCard addToCart />
      <ProductCard addToCart />
      <ProductCard addToCart />
      <ProductCard addToCart />
      <ProductCard addToCart />
      <ProductCard addToCart />
      <ProductCard addToCart />
    </main>
  )
}

export default WishList
