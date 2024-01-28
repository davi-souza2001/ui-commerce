'use client'
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Divider,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ProductCardProps } from '../components/Slider/components/ProductCard'

const Cart = () => {
  const [itemsCart, setItemsCart] = useState<ProductCardProps[]>([])

  const getItemsCart = () => {
    const arrayString = localStorage.getItem('myCartUicommerce')
    const cartItems = arrayString ? JSON.parse(arrayString) : []
    return cartItems
  }

  useEffect(() => {
    setItemsCart(getItemsCart())
  }, [])

  return (
    <main className="min-h-screen w-full p-5">
      <div className="py-5 pl-6">
        <h1 className="text-2xl font-bold font-roboto">Cart (4)</h1>
      </div>
      <div className="w-full px-20">
        <div>
          <TableContainer>
            <Table>
              <Thead className="shadow-lg rounded-md">
                <Tr>
                  <Th>Product</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                  <Th isNumeric>Subtotal</Th>
                </Tr>
              </Thead>
              <Tbody>
                {itemsCart.map((item, index) => {
                  return (
                    <Tr key={index}>
                      <Td>{item.productName}</Td>
                      <Td>{item.productPrice}</Td>
                      <Td>1</Td>
                      <Td isNumeric>{item.productPrice}</Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="h-72 w-96 mt-10 ml-6 gap-5 border border-black text-black">
        <h2 className="pl-3 pt-3 text-xl font-semibold">Cart Total:</h2>
        <div className="mt-2 pl-3 w-full flex items-center justify-between p-2">
          <p>Subtotal:</p>
          <p>23,00</p>
        </div>
        <div className="w-full px-5">
          <Divider />
        </div>
        <div className="pl-3 w-full flex items-center justify-between p-2">
          <p>Shipping:</p>
          <p>23,00</p>
        </div>
        <div className="w-full px-5">
          <Divider />
        </div>
        <div className="pl-3 w-full flex items-center justify-between p-2">
          <p>Total:</p>
          <p>23,00</p>
        </div>
        <div className="h-20 w-full flex items-center justify-center">
          <button className="w-56 h-12 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  )
}

export default Cart
