import User, { UserProps } from './User'

export default interface UserRepository {
    create(data: UserProps): Promise<User>
    list(): Promise<User[]>
    login(email: string, password: string): Promise<User | null>
    delete(email: string): Promise<void>
}