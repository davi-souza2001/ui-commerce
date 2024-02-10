import { Message } from '../../repositories/message'

interface MessageService {
    text: string
    userId: string
}

export interface CreateMessageServiceRequest {
    data: MessageService
}

export class CreateMessageService {
    constructor(
        private messageRepository: Message
    ) { }

    async execute(request: CreateMessageServiceRequest) {
        const { text, userId } = request.data

        if (!text) {
            throw new Error('Content in message is required')
        }

        if (!userId) {
            throw new Error('Need to have a user')
        }

        await this.messageRepository.create({
            text,
            userId
        })
    }
}