import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class AddConstructorInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  nationality: string;
}
