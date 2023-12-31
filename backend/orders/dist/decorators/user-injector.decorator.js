"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DUser = void 0;
const common_1 = require("@nestjs/common");
exports.DUser = (0, common_1.createParamDecorator)((_data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=user-injector.decorator.js.map