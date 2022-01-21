import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GrandPrixEntity } from '@grand-prix/entities/grand-prix.entity';
import { PracticeSessionName } from '@grand-prix/types/practice-session-name.type';

@ObjectType('Practice')
@Unique('UQ_name_grandPrixId', ['name', 'grandPrix'])
@Entity({ name: 'practice' })
export class PracticeEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({
    type: 'enum',
    enum: PracticeSessionName,
  })
  name: PracticeSessionName;

  @Field()
  @Column({ type: 'timestamptz' })
  date: Date;

  @ManyToOne(() => GrandPrixEntity, (grandPrix) => grandPrix.practices)
  grandPrix: GrandPrixEntity;
}
