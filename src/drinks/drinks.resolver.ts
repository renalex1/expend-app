import { Query, Resolver } from '@nestjs/graphql';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Drink } from 'src/common/interfaces/drink.interface';
import { Tea } from 'src/teas/entities/tea.entity';
import { DrinksResultUnion } from '../common/unions/drinks-result.union';

@Resolver()
export class DrinksResolver {
  @Query(() => [DrinksResultUnion, Drink], { name: 'drinks' })
  async findAll(): Promise<(typeof DrinksResultUnion)[]> {
    const coffee = new Coffee();
    coffee.id = 1;
    coffee.name = 'Columbia';
    coffee.brand = 'Black Crow Coffee';

    const tea = new Tea();
    tea.name = 'Lipton';

    return [tea, coffee];
  }
}
