import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GrandPrixEntity } from '@grand-prix/entities/grand-prix.entity';

@ObjectType('Sprint')
@Entity({ name: 'sprint' })
export class SprintEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'timestamptz' })
  date: Date;

  @OneToOne(() => GrandPrixEntity, (grandPrix) => grandPrix.sprint)
  grandPrix: GrandPrixEntity;
}
