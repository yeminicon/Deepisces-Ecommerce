import { Model } from 'mongoose';
import { Product } from './models/product.model';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    createProduct(productData: any): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    updateProduct(id: string, productData: any): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
}
