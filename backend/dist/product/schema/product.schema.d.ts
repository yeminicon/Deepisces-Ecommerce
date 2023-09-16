import mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    price?: number;
    category?: string;
    detail?: string;
    imageUrl?: string;
    sellerId?: string;
}, mongoose.Document<unknown, {}, {
    name?: string;
    price?: number;
    category?: string;
    detail?: string;
    imageUrl?: string;
    sellerId?: string;
}> & {
    name?: string;
    price?: number;
    category?: string;
    detail?: string;
    imageUrl?: string;
    sellerId?: string;
} & {
    _id: mongoose.Types.ObjectId;
}>;
