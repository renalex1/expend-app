import { Module } from '@nestjs/common';
import { CoffeesResolver } from './coffees.resolver';
import { CoffeesService } from './coffees.service'; // Import CoffeesService

@Module({
  providers: [CoffeesResolver, CoffeesService],
})
export class CoffeesModule {}
