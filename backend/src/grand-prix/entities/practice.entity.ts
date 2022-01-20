import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GrandPrixEntity } from '@grand-prix/entities/grand-prix.entity';

@ObjectType('Practice')
@Entity({ name: 'practice' })
export class PracticeEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ type: 'timestamptz' })
  date: Date;

  @ManyToOne(() => GrandPrixEntity, (grandPrix) => grandPrix.practices)
  grandPrix: GrandPrixEntity;
}
