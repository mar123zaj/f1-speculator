import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PracticeEntity } from '@grand-prix/entities/practice.entity';

@ObjectType('GrandPrix')
@Entity({ name: 'grand_prix' })
export class GrandPrixEntity extends BaseEntity {
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
  @Column({ type: 'date' })
  startDate: string;

  @Field()
  @Column({ type: 'date' })
  endDate: string;
}
