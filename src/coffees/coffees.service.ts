import { Injectable } from '@nestjs/common';
import { CreateCoffeeInput } from './dto/create-coffee.input';
// import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { ParseIntPipe } from '@nestjs/common';
// import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  async findAll() {
    return [];
  }

  async findOne(id: number) {
    console.log(id);

    return null;
  }

  async create(createCoffeeInput: CreateCoffeeInput) {
    console.log(createCoffeeInput);
    return null;
  }
}
