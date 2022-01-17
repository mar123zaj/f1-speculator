import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TeamDriverEntity } from '@team/entities/team-driver.entity';
import { DriverEntity } from '@driver/driver.entity';
import { TeamInSeasonEntity } from '@season/entities/team-in-season.entity';

@ObjectType('Team')
@Entity({ name: 'team' })
export class TeamEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  nationality: string;

  @OneToMany(() => TeamDriverEntity, (driver) => driver.team)
  drivers: TeamDriverEntity[];

  @OneToMany(() => TeamInSeasonEntity, (season) => season.team)
  seasons: TeamInSeasonEntity[];

  getDrivers(): DriverEntity[] {
    return this.drivers.map((teamDriver) => teamDriver.driver);
  }
}
