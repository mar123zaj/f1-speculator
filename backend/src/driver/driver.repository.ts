import { BaseRepository } from '@core/repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverEntity } from './driver.entity';

@Injectable()
export class DriverRepository extends BaseRepository<DriverEntity> {
  constructor(
    @InjectRepository(DriverEntity) driverRepository: Repository<DriverEntity>
  ) {
    super(driverRepository);
  }
}
