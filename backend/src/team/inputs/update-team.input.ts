import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { GraphQLInt } from 'graphql';
import { AddTeamInput } from './add-team.input';

@InputType()
export class UpdateTeamInput extends PartialType(AddTeamInput) {
  @Field(() => GraphQLInt)
  @IsNumber()
  id: number;
}
