import { MessageCreateData } from '../repositories/message'

type Subscriber = (message: MessageCreateData) => void

class VotingPubSub {
    private channels: Record<string, Subscriber[]> = {}

    subscribe(pollId: string, subscriber: Subscriber) {
        if (!this.channels[pollId]) {
            this.channels[pollId] = []
        }

        this.channels[pollId]?.push(subscriber)
    }
 
    publish(pollId: string, message: MessageCreateData) {
        if (!this.channels[pollId]) {
            return
        }

        for (const subscriber of this.channels[pollId] ?? []) {
            subscriber(message)
        }
    }
}

export const voting = new VotingPubSub()
