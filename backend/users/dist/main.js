"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const main_module_1 = require("./main.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(main_module_1.MainModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({ origin: '*' });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map