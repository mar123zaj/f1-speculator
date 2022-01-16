import { BaseRepository } from '@core/repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamEntity } from '@team/entities/team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamRepository extends BaseRepository<TeamEntity> {
  constructor(
    @InjectRepository(TeamEntity)
    teamRepository: Repository<TeamEntity>
  ) {
    super(teamRepository);
  }
}
