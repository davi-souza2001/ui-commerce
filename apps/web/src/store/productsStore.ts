import { ProductProps } from '@/service/context/ProductContext'
import { create } from 'zustand'

interface ProductsStore {
  products: ProductProps[]
  setProducts: (products: ProductProps[]) => void
}

export const useProductStore = create<ProductsStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}))
