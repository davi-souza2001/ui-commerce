import { Users } from '../../repositories/user'


export class DeleteUserService {
    constructor(
        private userRepository: Users
    ) { }

    async execute(email: string) {
        await this.userRepository.delete(email)
    }
}