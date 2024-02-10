export interface MessageCreateData {
    text: string
    userId: string
}

export interface Message {
    create(data: MessageCreateData): Promise<void>
    list(): Promise<MessageCreateData[]>
}