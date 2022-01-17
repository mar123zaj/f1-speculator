import {
  BaseEntity,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Field, ID } from '@nestjs/graphql';
import { TeamEntity } from '@team/entities/team.entity';
import { SeasonEntity } from './season.entity';

@Unique('UQ_teamId_seasonId', ['team', 'season'])
@Entity({ name: 'team_in_season' })
export class TeamInSeasonEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TeamEntity, (team) => team.seasons)
  team: TeamEntity;

  @ManyToOne(() => SeasonEntity, (season) => season.teams)
  season: SeasonEntity;
}
