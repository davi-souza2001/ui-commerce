import { FastifyInstance } from 'fastify'

import { PrismaMessage } from '../repositories/prisma/prisma-message'
import { CreateMessageService, CreateMessageServiceRequest } from '../services/message/create-message'
import { voting } from '../utils/pubSub'

const prismaMessageRepository = new PrismaMessage()

export async function messageRoutes(app: FastifyInstance) {
    app.post('/message/create', async (req, res) => {
        const info = req.body as CreateMessageServiceRequest
        const { text, userId } = info.data ?? info
        const createMessageService = new CreateMessageService(prismaMessageRepository)

        try {
            await createMessageService.execute({data: {
                text,
                userId
            }})

            voting.publish(userId, { pollOptionId: '1', votes: 1 })

            return res.status(201).send({ message: 'Message created' })
        } catch (error) {
            if (error instanceof Error) {
                return res.status(401).send({ message: error.message })
            } else {
                return res.status(500).send({ message: 'Internal server error' })
            }
        }
    })

    // app.get('/message/list',  async (req, res) => {
    //     const listMessageService = new ListMessageService(prismaMessageRepository)

    //     try {
    //         const messages = await listMessageService.execute()

    //         return res.status(201).send(messages)
    //     } catch (error) {
    //         if (error instanceof Error) {
    //             return res.status(401).send({ message: error.message })
    //         } else {
    //             return res.status(500).send({ message: 'Internal server error' })
    //         }
    //     }
    // })
    
    app.get('/message/list/:id', { websocket: true }, async (connection, req) => {
        const { id } = req.params as { id: string }

        voting.subscribe(id, (message) => {
            connection.socket.send(JSON.stringify(message))
        })

        // connection.socket.on('message', async () => {
        //     const listMessageService = new ListMessageService(prismaMessageRepository)
        //     const messages = await listMessageService.execute()
        //     const parseJson = JSON.stringify(messages)
        //     connection.socket.send('teste' + parseJson)
        // })
    })
}