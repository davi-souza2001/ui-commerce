import { Message } from '../../repositories/message'

export class ListMessageService {
    constructor(
        private messageRepository: Message
    ) { }

    async execute() {
        const messages = await this.messageRepository.list()

        return messages
    }
}