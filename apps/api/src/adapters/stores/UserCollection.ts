import { User, UserProps, UserRepository } from '../../core/user'
import { prisma } from '../../prisma'
import { comparePassword, encryptPassword } from '../../utils/EncryptPassword'

export default class UserCollection implements UserRepository {
    async create(data: UserProps): Promise<User> {
        const passwordHash = encryptPassword(data.password)

        const userData = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: passwordHash,
            }
        })

        const user = new User({
            id: userData.id,
            name: userData.name,
            email: userData.email,
            password: userData.password,
        })

        return user
    }

    async list(): Promise<User[]> {
        const usersData = await prisma.user.findMany()

        const users = usersData.map(userData => {
            return new User({
                id: userData.id,
                name: userData.name,
                email: userData.email,
                password: userData.password,
            })
        })

        return users
    }

    async login(email: string, password: string): Promise<User | null> {
        const userRequest = await prisma.user.findUnique({
            where: {
                email
            }
        })

        const passwordMatch = comparePassword(password, userRequest?.password ?? '')

        if (passwordMatch) {
            const user = new User({
                id: userRequest?.id ?? '',
                name: userRequest?.name ?? '',
                email: userRequest?.email ?? '',
                password: userRequest?.password ?? '',
            })

            return user
        }

        return null
    }

    async delete(email: string): Promise<void> {
        await prisma.user.delete({
            where: {
                email
            }
        })
    }
}