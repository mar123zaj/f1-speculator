import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GrandPrixEntity } from '@grand-prix/entities/grand-prix.entity';
import { QualifyingPeriodEntity } from '@grand-prix/entities/qualifying-period.entity';

@ObjectType('Qualifying')
@Entity({ name: 'qualifying' })
export class QualifyingEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'timestamptz' })
  date: Date;

  @Field(() => [QualifyingPeriodEntity])
  @OneToMany(() => QualifyingPeriodEntity, (period) => period.qualifying)
  periods: QualifyingPeriodEntity[];

  @OneToOne(() => GrandPrixEntity, (grandPrix) => grandPrix.qualifying)
  grandPrix: GrandPrixEntity;
}
