import { Products } from '../../repositories/products'

export interface CreateProductServiceRequest {
    name: string
    description: string
    price: number
    image?: string
}

export class CreateProductService {
    constructor(
        private productRepository: Products
    ) { }

    async execute(request: CreateProductServiceRequest) {
        const { description, name, price, image } = request

        if (!description) {
            throw new Error('Description is required')
        }

        if (!name) {
            throw new Error('Name is required')
        }

        if (!price) {
            throw new Error('Price is required')
        }

        await this.productRepository.create({
            description,
            name,
            price,
            image: image ?? ''
        })

    }
}