import { User } from '@prisma/client'
import { UserProps } from './User'
import UserRepository from './UserRepository'

export default class UserService {
    private _repo: UserRepository

    constructor(repo: UserRepository) {
        this._repo = repo
    }

    async create(data: UserProps): Promise<User> {
        return await this._repo.create(data)
    }

    async list(): Promise<User[]> {
        return await this._repo.list()
    }

    async login(email: string, password: string): Promise<User | null> {
        return await this._repo.login(email, password)
    }

    async delete(email: string): Promise<void> {
        return await this._repo.delete(email)
    }
}