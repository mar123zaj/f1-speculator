import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsString } from 'class-validator';

@InputType()
export class AddDriverInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  surname: string;

  @Field()
  @IsDateString()
  birthDate: string;

  @Field()
  @IsString()
  nationality: string;
}
