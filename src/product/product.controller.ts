import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Product } from './product';
import { ProductsService } from './product.service';

@Crud({
    model: {
      type: Product,
    },
  })
@Controller('product')
export class ProductController {
    constructor(public service: ProductsService) {}
}
