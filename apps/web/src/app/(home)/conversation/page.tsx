'use client'
import { useGetMessages } from '@/api/endpoints'
import { MessageCard } from './components/MessageCard'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import { useCreateMessage } from '@/api/mutations/message/useCreateMessage'
import { useEffect, useState } from 'react'
import { MessageDataResponse } from '@/api/endpoints/message/type'

interface UserProps {
  id: string
  name: string
  email: string
  password: string
}

const Conversation = () => {
  const [messageSend, setMessageSend] = useState<string>('')
  const [messages, setMessages] = useState<MessageDataResponse[]>([])
  const { data } = useGetMessages()
  const { mutate: createMessage } = useCreateMessage()

  const decodeToken = (token: string) => {
    try {
      const decoded = jwt.decode(token, { complete: true }) as jwt.JwtPayload
      return decoded
    } catch (err) {
      console.error('Error: ', err)
      return null
    }
  }

  const userToken = Cookies.get('token-login-ui-commerce')
  const user: UserProps | null = decodeToken(userToken ?? '')?.payload?.payload

  const handleCreateMessage = () => {
    if (user && user?.id !== '' && messageSend !== '') {
      createMessage({
        text: messageSend,
        userId: user.id,
      })
    }
  }

  useEffect(() => {
    const ws = new WebSocket(
      'ws://localhost:3333/message/list/8a308c2a-9a6f-431f-a1c6-0d3debdeee2c',
    )

    ws.onopen = () => {
      console.log('WebSocket Connected')
    }

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data)
      if (message) {
        setMessages((prev) => [...prev, message])
      }
    }

    ws.onerror = (error) => {
      console.error('WebSocket Error: ', error)
    }

    return () => {
      ws.close()
    }
  }, [])

  useEffect(() => {
    if (data) {
      setMessages(data)
    }
  }, [data])

  return (
    <div className="min-h-screen w-full p-5">
      <div className="h-96 w-96 bg-gray-300 flex items-center justify-start flex-col overflow-y-auto">
        {messages?.map((message, index) => {
          return <MessageCard message={message.text} key={index} />
        })}
      </div>
      <div className="w-full h-20 flex items-center justify-start gap-x-2">
        <input
          type="text"
          className="bg-gray-100 w-96 rounded-lg h-8"
          onChange={(e) => setMessageSend(e.target.value)}
        />
        <button
          onClick={handleCreateMessage}
          className="h-8 w-16 flex items-center justify-center rounded-md bg-gray-100"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}

export default Conversation
