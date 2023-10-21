import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeaFlavor } from './entities/flavor.entity';
import { Tea } from './entities/tea.entity';

@Resolver(() => Tea)
export class TeaFlavorsResolver {
  constructor(
    @InjectRepository(TeaFlavor)
    private readonly flavorRepository: Repository<TeaFlavor>,
  ) {}

  @ResolveField('flavors', () => [TeaFlavor])
  async getFlavorsOfTea(@Parent() tea: Tea) {
    return this.flavorRepository
      .createQueryBuilder('flavor')
      .innerJoin('flavor.teas', 'teas', 'teas.id = :teaId', { teaId: tea.id })
      .getMany();
  }
}
