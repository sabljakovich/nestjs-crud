import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductsService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductsService]
})
export class ProductModule {}
