'use client'
import { client } from '@/data/axios'
import { useToast } from '@chakra-ui/react'
import { createContext, useEffect, useState } from 'react'

export interface ProductProps {
  id?: string
  name?: string
  description?: string
  price?: number
  image?: string
}

export interface ProductContextProps {
  products: ProductProps[]
}

const ProductContext = createContext({} as ProductContextProps)

export function ProductProvider(props: any) {
  const toast = useToast()
  const [products, setProduct] = useState<ProductProps[]>([])

  const getProducts = async () => {
    try {
      const response = await client.get('/product/list')

      if (response?.data?.products) {
        setProduct(response.data.products)
      }
    } catch (error: any) {
      toast({
        position: 'top-right',
        title: error.response.data.message ?? 'Error',
        isClosable: true,
        status: 'error',
      })
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContext
