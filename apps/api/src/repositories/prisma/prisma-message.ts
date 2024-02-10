import { prisma } from '../../prisma'
import { Message, MessageCreateData } from '../message'

export class PrismaMessage implements Message {
    async create(data: MessageCreateData) {
        await prisma.message.create({
            data: {
                text: data.text,
                user: {
                    connect: {
                        id: data.userId
                    }
                },
            }
        })
    }

    async list() {
        const messages = await prisma.message.findMany()

        return messages
    }
}