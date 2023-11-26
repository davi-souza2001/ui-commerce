
export interface ProductCreateData {
    name: string
    description: string
    price: number
    image: string
}

export interface Products {
    create(data: ProductCreateData): Promise<void>
    list(): Promise<ProductCreateData[]>
}