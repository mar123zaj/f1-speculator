import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID } from '@nestjs/graphql';
import { SeasonEntity } from './season.entity';
import { TeamDriverEntity } from '@team/entities/team-driver.entity';

@Entity({ name: 'team_driver_in_season' })
export class TeamDriverInSeasonEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SeasonEntity, (season) => season.teams)
  season: SeasonEntity;

  @ManyToOne(() => TeamDriverEntity, (teamDriver) => teamDriver.seasons)
  teamDriver: TeamDriverEntity;

  @Column()
  number: number;
}
