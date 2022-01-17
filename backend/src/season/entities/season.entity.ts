import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TeamInSeasonEntity } from './team-in-season.entity';

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

  @OneToMany(() => TeamInSeasonEntity, (team) => team.season)
  teams: TeamInSeasonEntity[];
}
