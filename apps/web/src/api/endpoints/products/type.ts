export interface ProductProps {
  id?: string
  name?: string
  description?: string
  price?: number
  image?: string
}

export interface ProductsDataResponse {
  products: ProductProps[]
}
