import { prisma } from '../../prisma'
import { Products, ProductCreateData } from '../products'

export class PrismaProducts implements Products {
    async create(data: ProductCreateData) {
        await prisma.product.create({
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                image: data.image
            }
        })
    }

    async list() {
        const users = await prisma.product.findMany()

        return users
    }

}