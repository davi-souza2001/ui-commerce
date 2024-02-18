import { client } from '@/data/axios'
import { MessageDataResponse } from './type'

export const getMessages = async (): Promise<MessageDataResponse[]> => {
  const response = await client.get('/message/list')

  return response.data
}

export const createMessage = async ({
  text,
  userId,
}: MessageDataResponse): Promise<void> => {
  await client.post('/message/create', { text, userId })
}
