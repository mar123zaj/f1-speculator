import { TeamEntity } from '@team/team.entity';
import { TeamRepository } from '@team/team.repository';
import { TeamResolver } from '@team/team.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TeamEntity])],
  providers: [TeamResolver, TeamRepository],
})
export class TeamModule {}
