import Image from 'next/image'
import { MdOutlineShoppingCart } from 'react-icons/md'

export type ProductCardProps = {
  slidePosition?: number
  addToCart?: boolean
  productDescription?: string
  productImage?: string
  productPrice?: number
  productName?: string
}

export const ProductCard = ({
  slidePosition,
  addToCart,
  productDescription,
  productImage,
  productPrice,
  productName,
}: ProductCardProps) => {
  const handleAddToCart = () => {
    const productData = {
      productDescription,
      productImage,
      productPrice,
      productName,
    }
    const arrayString = localStorage.getItem('myCartUicommerce')
    const cartItems = arrayString ? JSON.parse(arrayString) : []

    cartItems.push(productData)

    localStorage.setItem('myCartUicommerce', JSON.stringify(cartItems))
  }

  return (
    <div
      className={`h-80 w-72 flex flex-col items-center justify-start cursor-pointer mx-5 keen-slider__slide number-slide${slidePosition}`}
    >
      <div className="h-56 w-full flex items-center justify-center bg-gray-300 rounded-lg">
        <Image
          alt="product image"
          src={productImage ?? ''}
          height={20}
          width={20}
        />
      </div>
      <div className="h-24 w-full flex flex-col items-start justify-start gap-2 p-2">
        <p className="font-semibold mt-3">{productDescription}</p>
        <div className="w-full flex items-center justify-between">
          <p className="text-red-500">${productPrice}</p>
          {addToCart && (
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center text-gray-500 cursor-pointer gap-x-3 hover:text-gray-700"
            >
              Add to cart <MdOutlineShoppingCart />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
