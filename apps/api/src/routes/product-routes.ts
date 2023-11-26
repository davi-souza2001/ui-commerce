import { FastifyInstance } from 'fastify'

import { PrismaProducts } from '../repositories/prisma/prisma-products'
import { CreateProductService, CreateProductServiceRequest } from '../services/product/create-product'
import { ListProductService } from '../services/product/list-product'

const prismaProductRepository = new PrismaProducts()

export async function productRoutes(app: FastifyInstance) {
    app.post('/product/create', async (req, res) => {
        const { name, description, price, image } = req.body as CreateProductServiceRequest
        const createProductService = new CreateProductService(prismaProductRepository)

        try {
            await createProductService.execute({
                name,
                description,
                price,
                image,
            })

            return res.status(201).send({ message: 'Product created' })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(401).send({ message: error.message })
            } else {
                return res.status(500).send({ message: 'Internal server error' })
            }
        }
    })

    app.get('/product/list', async (req, res) => {
        try {
            const listUserService = new ListProductService(prismaProductRepository)
            const products = await listUserService.execute()

            return res.status(200).send({ products })
        } catch (error) {
            if (error instanceof Error) {
                return res.status(401).send({ message: error.message })
            } else {
                return res.status(500).send({ message: 'Internal server error' })
            }
        }
    })
}