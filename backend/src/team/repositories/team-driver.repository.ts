import { BaseRepository } from '@core/repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamDriverEntity } from '../entities/team-driver.entity';

@Injectable()
export class TeamDriverRepository extends BaseRepository<TeamDriverEntity> {
  constructor(
    @InjectRepository(TeamDriverEntity)
    teamDriverRepository: Repository<TeamDriverEntity>
  ) {
    super(teamDriverRepository);
  }
}
