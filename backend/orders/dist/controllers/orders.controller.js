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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../decorators/auth.decorator");
const user_injector_decorator_1 = require("../decorators/user-injector.decorator");
const create_order_dto_1 = require("../dto/create-order.dto");
const orders_service_1 = require("../services/orders.service");
let OrdersController = class OrdersController {
    constructor(service) {
        this.service = service;
    }
    async create(createOrderDto, user) {
        return await this.service.create(createOrderDto, user.id);
    }
    async read(user) {
        return await this.service.read(user.id);
    }
    async readOne(user, orderId) {
        return await this.service.readOne(user.id, orderId);
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, auth_decorator_1.DAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_injector_decorator_1.DUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "create", null);
__decorate([
    (0, auth_decorator_1.DAuth)(),
    (0, common_1.Get)(),
    __param(0, (0, user_injector_decorator_1.DUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "read", null);
__decorate([
    (0, auth_decorator_1.DAuth)(),
    (0, common_1.Get)(':orderId'),
    __param(0, (0, user_injector_decorator_1.DUser)()),
    __param(1, (0, common_1.Param)('orderId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "readOne", null);
exports.OrdersController = OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
//# sourceMappingURL=orders.controller.js.map