import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Data', () => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = 'Date custom scale type';

  parseValue(value: number): Date {
    return new Date(value);
  }

  serialize(value: Date): number {
    console.log(`Serializing: ${value}`);
    return value.getTime();
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
