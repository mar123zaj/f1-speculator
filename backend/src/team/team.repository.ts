import { BaseRepository } from '@core/repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamEntity } from './team.entity';

@Injectable()
export class TeamRepository extends BaseRepository<TeamEntity> {
  constructor(
    @InjectRepository(TeamEntity)
    teamRepository: Repository<TeamEntity>
  ) {
    super(teamRepository);
  }
}
