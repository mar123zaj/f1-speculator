import { GrandPrixEntity } from '@grand-prix/entities/grand-prix.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrandPrixRepository } from './grand-prix.repository';

@Module({
  imports: [TypeOrmModule.forFeature([GrandPrixEntity])],
  providers: [GrandPrixRepository],
})
export class GrandPrixModule {}
