import { Users } from '../../repositories/user'

export interface LoginUserServiceRequest {
    email: string
    password: string
}

export class LoginUserService {
    constructor(
        private userRepository: Users
    ) { }

    async execute(request: LoginUserServiceRequest) {
        const { email, password, } = request

        if (!email) {
            throw new Error('Email is required!')
        }

        if (!password) {
            throw new Error('Password is required!')
        }

        const user = await this.userRepository.login(
            email,
            password,
        )

        return user
    }
}