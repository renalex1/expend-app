import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tea } from './tea.entity';

@ObjectType()
@Entity()
export class TeaFlavor {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  name: string;

  @ManyToMany(() => Tea, (tea) => tea.flavors)
  teas?: Tea[];
}
