import { useQuery } from '@tanstack/react-query'
import { getMessages } from '../endpoints/message'

export const useGetMessages = () =>
  useQuery({
    queryKey: ['messages'],
    queryFn: () => getMessages(),
  })
