import { client } from '@/data/axios'
import { ProductsDataResponse } from './type'

export const getProducts = async (): Promise<ProductsDataResponse> => {
  const response = await client.get('/product/list')

  return response.data
}
