export interface UserCreateData {
    name: string
    email: string
    password: string
}

export interface Users {
    create(data: UserCreateData): Promise<void>
}