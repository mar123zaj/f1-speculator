import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DriverEntity } from '@driver/driver.entity';
import { TeamEntity } from '@team/entities/team.entity';

@ObjectType('TeamDriver')
@Entity({ name: 'team_driver' })
// TODO: Add uniqueness depending on the team-driver pair
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
}
