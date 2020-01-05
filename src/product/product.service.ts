import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Product } from './product';

@Injectable()
export class ProductsService
 extends TypeOrmCrudService<Product> {
  constructor(@InjectRepository(Product) repo) {
    super(repo);
  }
}
