import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateCoffeeInput {
  @MinLength(3)
  @Field(() => String, { description: 'A new coffee name' })
  name: string;

  @MinLength(3)
  @Field(() => String, { description: 'A new coffee brand name' })
  brand: string;

  @Field(() => [String], { description: 'A new coffee flavors []' })
  flavors: string[];
}
