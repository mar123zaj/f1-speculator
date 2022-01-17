import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Unique('UQ_year', ['year'])
@ObjectType('Season')
@Entity({ name: 'season' })
export class SeasonEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  year: number;
}
