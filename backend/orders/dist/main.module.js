"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./services/prisma.service");
const auth_service_1 = require("./services/auth.service");
const auth_middleware_1 = require("./middlewares/auth.middleware");
const axios_1 = require("@nestjs/axios");
const orders_controller_1 = require("./controllers/orders.controller");
const orders_service_1 = require("./services/orders.service");
let MainModule = class MainModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes('*');
    }
};
exports.MainModule = MainModule;
exports.MainModule = MainModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [orders_controller_1.OrdersController],
        providers: [prisma_service_1.PrismaService, orders_service_1.OrdersService, auth_service_1.AuthService],
    })
], MainModule);
//# sourceMappingURL=main.module.js.map