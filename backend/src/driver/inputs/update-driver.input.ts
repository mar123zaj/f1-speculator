import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { GraphQLInt } from 'graphql';
import { AddDriverInput } from './add-driver.input';

@InputType()
export class UpdateDriverInput extends PartialType(AddDriverInput) {
  @Field(() => GraphQLInt)
  @IsNumber()
  id: number;
}
