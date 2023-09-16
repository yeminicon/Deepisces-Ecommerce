import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
export declare enum Category {
    ADVENTURE = "Adventure",
    CLASSICS = "Classics",
    CRIME = "Crime",
    FANTASY = "Fantasy"
}
export declare class Book {
    title: string;
    description: string;
    author: string;
    price: number;
    category: Category;
    user: User;
}
export declare const BookSchemma: mongoose.Schema<Book, mongoose.Model<Book, any, any, any, mongoose.Document<unknown, any, Book> & Book & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Book, mongoose.Document<unknown, {}, Book> & Book & {
    _id: mongoose.Types.ObjectId;
}>;
