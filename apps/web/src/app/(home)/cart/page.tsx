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

const Cart = () => {
  const [itemsCart, setItemsCart] = useState([])

  const getItemsCart = () => {
    const arrayString = localStorage.getItem('myCartUicommerce')
    const cartItems = arrayString ? JSON.parse(arrayString) : []
    return cartItems
  }
  console.log('itemsCart :>> ', itemsCart)

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
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>30.48</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td>0.91444</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
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
