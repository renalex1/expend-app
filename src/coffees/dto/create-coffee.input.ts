import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCoffeeInput {
  @Field(() => String, { description: 'A new coffee name' })
  name: string;
  @Field(() => String, { description: 'A new coffee brand name' })
  brand: string;
  @Field(() => [String], { description: 'A new coffee flavors []' })
  flavors: string[];
}
