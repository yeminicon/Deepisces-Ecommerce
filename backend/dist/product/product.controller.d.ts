import { ProductsService } from './product.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(productData: any): Promise<import("./models/product.model").Product>;
    getAllProducts(): Promise<import("./models/product.model").Product[]>;
    getProductById(id: string): Promise<import("./models/product.model").Product>;
    updateProduct(id: string, productData: any): Promise<import("./models/product.model").Product>;
    deleteProduct(id: string): Promise<import("./models/product.model").Product>;
}
