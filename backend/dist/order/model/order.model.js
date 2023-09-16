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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.Order = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const details_schema_1 = require("../schema/details.schema");
let Order = class Order extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "name", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: details_schema_1.DetailSchema, required: true }),
    __metadata("design:type", Array)
], Order.prototype, "details", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", Number)
], Order.prototype, "price", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", Number)
], Order.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true, default: Date.now }),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
Order = __decorate([
    (0, mongoose_2.Schema)()
], Order);
exports.Order = Order;
exports.OrderModel = mongoose_2.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.model.js.map