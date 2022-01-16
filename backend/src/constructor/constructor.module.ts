import { ConstructorEntity } from '@constructor/constructor.entity';
import { ConstructorRepository } from '@constructor/constructor.repository';
import { ConstructorResolver } from '@constructor/constructor.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ConstructorEntity])],
  providers: [ConstructorResolver, ConstructorRepository],
})
export class ConstructorModule {}
