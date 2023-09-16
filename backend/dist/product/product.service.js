"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_model_1 = require("./models/product.model");
const cloudinary_1 = require("cloudinary");
const cloudinary_config_1 = require("./cloudinary/cloudinary.config");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
        cloudinary_1.v2.config(cloudinary_config_1.CloudinaryConfig);
    }
    async createProduct(productData) {
        const createdProduct = new this.productModel(Object.assign({}, productData));
        return createdProduct.save();
    }
    getAllProducts() {
        return this.productModel.find().exec();
    }
    async getProductById(id) {
        return this.productModel.findById(id).exec();
    }
    async updateProduct(id, productData) {
        return this.productModel.findByIdAndUpdate(id, productData, { new: true });
    }
    async deleteProduct(id) {
        return this.productModel.findByIdAndRemove(id);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_model_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=product.service.js.map