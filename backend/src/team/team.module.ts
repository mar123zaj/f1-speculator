import { TeamEntity } from '@team/entities/team.entity';
import { TeamRepository } from '@team/repositories/team.repository';
import { TeamResolver } from '@team/team.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverModule } from '@driver/driver.module';
import { TeamDriverEntity } from '@team/entities/team-driver.entity';
import { TeamDriverRepository } from '@team/repositories/team-driver.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeamEntity, TeamDriverEntity]),
    DriverModule,
  ],
  providers: [TeamResolver, TeamRepository, TeamDriverRepository],
})
export class TeamModule {}
