import { Module } from '@nestjs/common';
import { CoffeeResolver } from './coffee.resolver';

@Module({
  providers: [CoffeeResolver]
})
export class CoffeeModule {}
