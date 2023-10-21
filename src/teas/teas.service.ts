import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tea } from './entities/tea.entity';
import { Repository } from 'typeorm';
import { TeaFlavor } from './entities/flavor.entity';
import { UserInputError } from '@nestjs/apollo';
import { CreateTeaInput } from './dto/create-tea.input';
import { UpdateTeaInput } from './dto/update-tea.input';

@Injectable()
export class TeasService {
  constructor(
    @InjectRepository(Tea)
    private readonly teasRepository: Repository<Tea>,
    @InjectRepository(TeaFlavor)
    private readonly flavorRepository: Repository<TeaFlavor>,
  ) {}

  async findAll() {
    return this.teasRepository.find();
  }

  async findOne(id: number) {
    const tea = await this.teasRepository.findOne({ where: { id } });

    if (!tea) {
      throw new UserInputError(`Tea #${id} does not exist!`);
    }

    return tea;
  }

  async create(createTeaInput: CreateTeaInput) {
    const flavors = await Promise.all(
      createTeaInput.flavors.map((name) => this.preloadFavorByName(name)),
    );

    const tea = this.teasRepository.create({ ...createTeaInput, flavors });
    console.log(tea);
    return this.teasRepository.save(tea);
  }

  async update(id: number, updateTeaInput: UpdateTeaInput) {
    const flavors =
      updateTeaInput.flavors &&
      (await Promise.all(updateTeaInput.flavors.map((name) => this.preloadFavorByName(name))));
    const tea = await this.teasRepository.preload({
      id,
      ...updateTeaInput,
      flavors,
    });

    if (!tea) {
      throw new UserInputError(`Coffee #${id} does not exist!`);
    }

    return this.teasRepository.save(tea);
  }

  async remove(id: number) {
    const coffee = await this.findOne(id);
    return this.teasRepository.remove(coffee);
  }

  private async preloadFavorByName(name: string): Promise<TeaFlavor> {
    const existingFlavor = await this.flavorRepository.findOne({ where: { name } });

    if (existingFlavor) {
      return existingFlavor;
    }

    return this.flavorRepository.create({ name });
  }
}
