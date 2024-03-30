import { FastifyInstance } from 'fastify'

import {  CreateUserServiceRequest } from '../services/user/create-user'
import { PrismaUsers } from '../repositories/prisma/prisma-user'
import { ListUserService } from '../services/user/list-user'
import { LoginUserService, LoginUserServiceRequest } from '../services/user/login-user'
import { DeleteUserService } from '../services/user/delete-user'
import { UserService } from '../core/user'
import UserCollection from '../adapters/stores/UserCollection'

const prismaUserRepository = new PrismaUsers()

const userService = new UserService(new UserCollection())

export async function userRoutes(app: FastifyInstance) {
    app.post('/user/create', async (req, res) => {
        const info = req.body as CreateUserServiceRequest
        const { email, name, password } = info.data ?? info

        try {
            await userService.create({email, name, password})

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

    app.get('/user/list', async (_, res) => {
        try {
            const listUserService = new ListUserService(prismaUserRepository)
            const users = await listUserService.execute()

            return res.status(200).send({ users })
        } catch (error) {
            if (error instanceof Error) {
                return res.status(401).send({ message: error.message })
            } else {
                return res.status(500).send({ message: 'Internal server error' })
            }
        }
    })

    app.post('/user/login', async (req, res) => {
        const info = req.body as LoginUserServiceRequest
        const { email, password } = info.data ?? info
        const loginUserService = new LoginUserService(prismaUserRepository)

        try {
            const user = await loginUserService.execute({data: {email, password}})

            if (!user) {
                return res.status(401).send({ message: 'Invalid credentials' })
            }

            const token = app.jwt.sign({
                payload: user
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

    app.delete('/user/delete/:email', async (req, res) => {
        const { email } = req.params as { email: string }

        try {
            const deleteUserService = new DeleteUserService(prismaUserRepository)
            await deleteUserService.execute(email)

            return res.status(200).send({ message: 'User deleted!' })
        } catch (error) {
            if (error instanceof Error) {
                return res.status(401).send({ message: error.message })
            } else {
                return res.status(500).send({ message: 'Internal server error' })
            }
        }
    })
}