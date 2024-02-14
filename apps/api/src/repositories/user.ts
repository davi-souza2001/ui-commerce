export interface UserCreateData {
    name: string
    email: string
    password: string
}

export interface Users {
    create(data: UserCreateData): Promise<UserCreateData>
    list(): Promise<UserCreateData[]>
    login(email: string, password: string): Promise<UserCreateData | null>
    delete(email: string): Promise<void>
}