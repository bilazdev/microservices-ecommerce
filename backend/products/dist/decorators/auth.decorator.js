"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAuth = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../guards/auth.guard");
const DAuth = () => (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_guard_1.AuthGuard));
exports.DAuth = DAuth;
//# sourceMappingURL=auth.decorator.js.map