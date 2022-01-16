import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Constructor')
@Entity({ name: 'constructor' })
export class ConstructorEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  nationality: string;
}
