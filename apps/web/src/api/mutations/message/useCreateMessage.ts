import { createMessage } from '@/api/endpoints/message'
import { useMutation } from '@tanstack/react-query'

export const useCreateMessage = () =>
  useMutation({
    mutationFn: createMessage,
  })
