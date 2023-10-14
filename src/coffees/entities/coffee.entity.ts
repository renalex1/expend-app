import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({ description: 'Coffee Model' })
export class Coffee {
  @Field(() => ID, { description: 'A unique identifier' })
  id: number;

  @Field()
  name: string;

  @Field()
  brand: string;

  @Field(() => [String])
  flavors: string[];
}
