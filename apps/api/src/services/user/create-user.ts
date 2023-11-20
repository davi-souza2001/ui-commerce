import { Users } from '../../repositories/user'

export interface CreateUserServiceRequest {
    name: string
    email: string
    password: string
}

export class CreateUserService {
    constructor(
        private userRepository: Users
    ) { }

    async executeCreate(request: CreateUserServiceRequest) {
        const { email, name, password,  } = request

        if (!email) {
            throw new Error('Email is required!')
        }

        if (!name) {
            throw new Error('Name is required!')
        }

        if (!password) {
            throw new Error('Password is required!')
        }

        await this.userRepository.create({
            email,
            name,
            password,
        })
    }
}