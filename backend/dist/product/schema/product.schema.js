"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.default.Schema({
    name: String,
    category: String,
    price: Number,
    detail: String,
    imageUrl: String,
    sellerId: String,
});
//# sourceMappingURL=product.schema.js.map