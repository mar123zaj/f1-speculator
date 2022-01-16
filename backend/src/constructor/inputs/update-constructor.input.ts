import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { GraphQLInt } from 'graphql';
import { AddConstructorInput } from './add-constructor.input';

@InputType()
export class UpdateConstructorInput extends PartialType(AddConstructorInput) {
  @Field(() => GraphQLInt)
  @IsNumber()
  id: number;
}
