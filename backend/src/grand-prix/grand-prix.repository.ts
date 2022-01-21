import { BaseRepository } from '@core/repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GrandPrixEntity } from './entities/grand-prix.entity';

@Injectable()
export class GrandPrixRepository extends BaseRepository<GrandPrixEntity> {
  constructor(
    @InjectRepository(GrandPrixEntity)
    grandPrixRepository: Repository<GrandPrixEntity>
  ) {
    super(grandPrixRepository);
  }
}
