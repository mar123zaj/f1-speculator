import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { QualifyingPeriodName } from '@grand-prix/types/qualifying-period-name.type';
import { QualifyingEntity } from '@grand-prix/entities/qualifying.entity';

@ObjectType('QualifyingPeriod')
@Unique('UQ_name_qualifyingId', ['name', 'qualifying'])
@Entity({ name: 'qualifying_period' })
export class QualifyingPeriodEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({
    type: 'enum',
    enum: QualifyingPeriodName,
  })
  name: QualifyingPeriodName;

  @ManyToOne(() => QualifyingEntity, (qualifying) => qualifying.periods)
  qualifying: QualifyingEntity;
}
