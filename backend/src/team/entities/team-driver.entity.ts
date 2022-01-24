import {
  BaseEntity,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Field, ID } from '@nestjs/graphql';
import { DriverEntity } from '@driver/driver.entity';
import { TeamEntity } from '@team/entities/team.entity';
import { TeamDriverInSeasonEntity } from '@season/entities/team-driver-in-season.entity';

@Unique('UQ_teamId_driverId', ['team', 'driver'])
@Entity({ name: 'team_driver' })
export class TeamDriverEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => TeamEntity)
  @ManyToOne(() => TeamEntity, (team) => team.drivers)
  team: TeamEntity;

  @Field(() => DriverEntity)
  @ManyToOne(() => DriverEntity, (driver) => driver.teams)
  driver: DriverEntity;

  @OneToMany(() => TeamDriverInSeasonEntity, (season) => season.teamDriver)
  seasons: TeamDriverInSeasonEntity[];
}
