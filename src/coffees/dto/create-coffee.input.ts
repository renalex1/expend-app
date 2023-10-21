import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { CoffeeType } from 'src/common/enums/coffee-type.enum';

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

  @Field(() => CoffeeType, { description: 'The type of the coffee' })
  type: CoffeeType;
}
