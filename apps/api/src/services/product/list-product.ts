import { Products } from '../../repositories/products'

export class ListProductService {
    constructor(
        private productRepository: Products
    ) { }

    async execute() {
        const products = await this.productRepository.list()

        return products
    }
}