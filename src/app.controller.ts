import { Controller, Get, Post, Req, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './product.entity';
import { Category } from './category.entity';
import { createQueryBuilder, getRepository } from 'typeorm';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/products')
  async getProducts(@Query() q): Promise<Product[]> {
    let where = '1=1';

    if(q.pageSize && q.skip){
      where = `1=1 LIMIT ${q.pageSize} OFFSET ${q.skip}`;
    }

    const ps = await createQueryBuilder(Product, 'product')
    .leftJoinAndSelect('product.categories', 'categories')
    .where(where)
    .getMany();
    return ps;
  }

  @Get('/categories')
  async getCategories(@Query() q): Promise<Category[]> {

    let where = '1=1';

    if(q.pageSize && q.skip){
      where = `1=1 LIMIT ${q.pageSize} OFFSET ${q.skip}`;
    }

    const cats = await createQueryBuilder(Category, 'category')
    .leftJoinAndSelect('category.products', 'products')
    .where(where)
    .getMany();
    return cats;
  }
}
