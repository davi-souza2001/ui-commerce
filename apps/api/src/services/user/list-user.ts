import { Users } from '../../repositories/user'

export class ListUserService {
    constructor(
        private userRepository: Users
    ) { }

    async execute() {
        const users = await this.userRepository.list()

        return users
       
    }
}