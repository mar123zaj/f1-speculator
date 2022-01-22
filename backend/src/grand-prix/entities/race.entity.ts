import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GrandPrixEntity } from '@grand-prix/entities/grand-prix.entity';

@ObjectType('Race')
@Entity({ name: 'race' })
export class RaceEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'timestamptz' })
  date: Date;

  @OneToOne(() => GrandPrixEntity, (grandPrix) => grandPrix.race)
  grandPrix: GrandPrixEntity;
}
