import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Driver')
@Entity({ name: 'driver' })
export class DriverEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  surname: string;

  @Field()
  @Column({ type: 'date' })
  birthDate: string;

  // TODO: Use some enum here in the future
  @Field()
  @Column()
  nationality: string;
}
