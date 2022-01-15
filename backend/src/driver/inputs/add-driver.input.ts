import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsOptional, IsString } from 'class-validator';

@InputType()
export class AddDriverInput {
  @Field()
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  secondName?: string;

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
