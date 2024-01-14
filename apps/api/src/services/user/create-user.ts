import { Users } from '../../repositories/user'

interface UserService{
    name: string
    email: string
    password: string
}
export interface CreateUserServiceRequest {
    data: UserService
}
export class CreateUserService {
    constructor(
        private userRepository: Users
    ) { }

    async execute(request: CreateUserServiceRequest) {
        const { email, name, password } = request.data

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