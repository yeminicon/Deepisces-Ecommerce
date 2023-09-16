"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.OrderSchema = new mongoose_1.default.Schema({
    nameofProduct: String,
    details: Object,
    price: Number,
    quantity: Number,
    createdAt: Date,
});
//# sourceMappingURL=order.schema.js.map