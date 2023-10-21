import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateTeaInput {
  @MinLength(3)
  @Field(() => String, { description: 'A new tea name' })
  name: string;

  @MinLength(3)
  @Field(() => String, { description: 'A new tea brand name' })
  brand: string;

  @Field(() => [String], { description: 'A new tea flavors []' })
  flavors: string[];
}
