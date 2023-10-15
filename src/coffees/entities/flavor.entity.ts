import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@ObjectType()
@Entity()
export class Flavor {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  name: string;

  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  // @Field(() => [Coffee])
  coffees?: Coffee[];
}
