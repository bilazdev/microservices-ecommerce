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
const users_controller_1 = require("./controllers/users.controller");
const users_service_1 = require("./services/users.service");
const prisma_service_1 = require("./services/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const auth_controller_1 = require("./controllers/auth.controller");
const auth_service_1 = require("./services/auth.service");
const auth_middleware_1 = require("./middlewares/auth.middleware");
let MainModule = class MainModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes('*');
    }
};
exports.MainModule = MainModule;
exports.MainModule = MainModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.jwtSecret || 's!@#SAASD!@#',
            }),
        ],
        controllers: [users_controller_1.UsersController, auth_controller_1.AuthController],
        providers: [users_service_1.UsersService, prisma_service_1.PrismaService, auth_service_1.AuthService],
    })
], MainModule);
//# sourceMappingURL=main.module.js.map