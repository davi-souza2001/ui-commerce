'use client'
import { useGetProducts } from '@/api/endpoints'
import { ProductCard } from '../components/Slider/components/ProductCard'

const WishList = () => {
  const { data } = useGetProducts()

  return (
    <main className="min-h-screen w-full p-5">
      <div className="py-5 pl-6">
        <h1 className="text-2xl font-bold font-roboto">WishList (4)</h1>
      </div>
      <div className="">
        {data?.products.map((product) => {
          return (
            <ProductCard
              addToCart
              key={product.id}
              productName={product.name}
              productImage={product.image}
              productPrice={product.price}
              productDescription={product.description}
            />
          )
        })}
      </div>
    </main>
  )
}

export default WishList
