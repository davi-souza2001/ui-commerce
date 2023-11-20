import { FastifyInstance } from 'fastify'

import { CreateUserService, CreateUserServiceRequest } from '../services/user/create-user'
import { PrismaUsers } from '../repositories/prisma/prisma-user'

const prismaUserRepository = new PrismaUsers()

export async function userRoutes(app: FastifyInstance) {
    app.post('/user/create', async (req, res) => {
        const { name, email, password } = req.body as CreateUserServiceRequest
        const createUserService = new CreateUserService(prismaUserRepository)

        try {
            await createUserService.executeCreate({
                name,
                email,
                password,
            })

            const token = app.jwt.sign({
                payload: {
                    name,
                    email,
                    password,
                }
            })

            return res.status(201).send({ token })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(401).send({ message: error.message })
            } else {
                return res.status(500).send({ message: 'Internal server error' })
            }
        }
    })
}