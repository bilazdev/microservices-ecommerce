import { Controller } from '@nestjs/common';
import { CategoriesService } from 'src/services/categories.service';

@Controller('auth')
export class CateogriesController {
  constructor(private service: CategoriesService) {}
}
