import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID } from '@nestjs/graphql';

export class ResultBaseEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  position: number;

  @Field()
  @Column()
  // miliseconds
  time: number;

  @Field()
  @Column()
  laps: number;

  @Field()
  @Column()
  avgSpeed: number;
}
