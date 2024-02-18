'use client'
import { useGetMessages } from '@/api/endpoints'
import { MessageCard } from './components/MessageCard'

const Conversation = () => {
  const { data } = useGetMessages()
  //   const { mutate: createMessage } = useCreateMessage()

  //   const handleCreateMessage = () => {}

  return (
    <div className="min-h-screen w-full p-5">
      <div className="h-96 w-96 bg-gray-300 flex items-center justify-start flex-col overflow-y-auto">
        {data?.map((message, index) => {
          return <MessageCard message={message.text} key={index} />
        })}
      </div>
      <div className="w-full h-20 flex items-center justify-start gap-x-2">
        <input type="text" className="bg-gray-100 w-96 rounded-lg h-8" />
        <button className="h-8 w-16 flex items-center justify-center rounded-md bg-gray-100">
          Enviar
        </button>
      </div>
    </div>
  )
}

export default Conversation
