import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TeaFlavor } from './flavor.entity';

@Entity()
@ObjectType({ description: 'Tea Model', implements: () => Drink })
export class Tea implements Drink {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'A unique identifier' })
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  brand: string;

  @JoinTable()
  @ManyToMany(() => TeaFlavor, (flavor) => flavor.teas, { cascade: true })
  flavors: TeaFlavor[];

  @CreateDateColumn()
  @Field()
  createdAt?: Date;
}
