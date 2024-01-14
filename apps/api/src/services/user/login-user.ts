import { Users } from '../../repositories/user'

interface UserService{
    email: string
    password: string
}
export interface LoginUserServiceRequest {
    data: UserService
}

export class LoginUserService {
    constructor(
        private userRepository: Users
    ) { }

    async execute(request: LoginUserServiceRequest) {
        const { email, password, } = request.data

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