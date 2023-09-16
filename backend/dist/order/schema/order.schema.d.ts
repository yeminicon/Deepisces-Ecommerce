import mongoose from 'mongoose';
export declare const OrderSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    price?: number;
    createdAt?: Date;
    nameofProduct?: string;
    details?: any;
    quantity?: number;
}, mongoose.Document<unknown, {}, {
    price?: number;
    createdAt?: Date;
    nameofProduct?: string;
    details?: any;
    quantity?: number;
}> & {
    price?: number;
    createdAt?: Date;
    nameofProduct?: string;
    details?: any;
    quantity?: number;
} & {
    _id: mongoose.Types.ObjectId;
}>;
