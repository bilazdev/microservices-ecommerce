import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';

export const DAuth = () => applyDecorators(UseGuards(AuthGuard));
