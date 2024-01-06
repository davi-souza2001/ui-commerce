import { ProductCard } from '../components/Slider/components/ProductCard'

const WishList = () => {
  return (
    <main className="min-h-screen w-full p-5">
      <div className="py-5 pl-6">
        <h1 className="text-2xl font-bold font-roboto">WishList (4)</h1>
      </div>
      <div className="grid grid-cols-4 gap-y-5">
        <ProductCard addToCart />
        <ProductCard addToCart />
        <ProductCard addToCart />
        <ProductCard addToCart />
        <ProductCard addToCart />
        <ProductCard addToCart />
        <ProductCard addToCart />
        <ProductCard addToCart />
      </div>
    </main>
  )
}

export default WishList
