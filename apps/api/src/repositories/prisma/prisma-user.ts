import { prisma } from '../../prisma'
import {  encryptPassword } from '../../utils/EncryptPassword'
import { UserCreateData, Users } from "../user"

export class PrismaUsers implements Users {
    async create(data: UserCreateData) {
        const passwordHash = encryptPassword(data.password)

        await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: passwordHash,
            }
        })
    }
}