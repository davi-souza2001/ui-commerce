import { prisma } from '../../prisma'
import { comparePassword, encryptPassword } from '../../utils/EncryptPassword'
import { UserCreateData, Users } from '../user'

export class PrismaUsers implements Users {
    async create(data: UserCreateData) {
        const passwordHash = encryptPassword(data.password)

        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: passwordHash,
            }
        })

        return user
    }

    async list() {
        const users = await prisma.user.findMany()

        return users
    }

    async login(email: string, password: string) {
        const userRequest = await prisma.user.findUnique({
            where: {
                email
            }
        })

        const passwordMatch = comparePassword(password, userRequest?.password ?? '')

        if (passwordMatch) {
            const user: UserCreateData = {
                id: userRequest?.id ?? '',
                name: userRequest?.name ?? '',
                email: userRequest?.email ?? '',
                password: userRequest?.password ?? '',
            }

            return user
        }

        return null
    }

    async delete(email: string) {
        await prisma.user.delete({
            where: {
                email
            }
        })
    }
}