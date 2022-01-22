import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GrandPrixEntity } from '@grand-prix/entities/grand-prix.entity';

@ObjectType('Circuit')
@Entity({ name: 'circuit' })
export class CircuitEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  country: string;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column()
  length: number;

  @Field()
  @Column()
  turns: number;

  @ManyToOne(() => GrandPrixEntity, (grandPrix) => grandPrix.circuits)
  grandPrix: GrandPrixEntity;
}
