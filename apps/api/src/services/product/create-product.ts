import { Products } from '../../repositories/products'

interface ProductService{
    name: string
    description: string
    price: number
    image?: string
}

export interface CreateProductServiceRequest {
    data: ProductService
}

export class CreateProductService {
    constructor(
        private productRepository: Products
    ) { }

    async execute(request: CreateProductServiceRequest) {
        const { description, name, price, image } = request.data

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