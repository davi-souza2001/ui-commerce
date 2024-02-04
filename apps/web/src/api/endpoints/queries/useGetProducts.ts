import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../products'

export const useGetProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  })
