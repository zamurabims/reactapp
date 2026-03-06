import { http, HttpResponse } from 'msw'
import {products} from "./data"
import {Product} from "./types/products.types";

export const handlers = [
    http.get('/api/products', () => {
        return HttpResponse.json<Product[]>(products)
    }),


    http.get('/api/products/:id', ({ params }) => {
        const product = products.find(p => p.id === Number(params.id))
        if (!product) {
            return new HttpResponse(null, { status: 404 })
        }
        return HttpResponse.json<Product>(product)
    })
]