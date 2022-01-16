import { BaseRepository } from '@core/repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConstructorEntity } from './constructor.entity';

@Injectable()
export class ConstructorRepository extends BaseRepository<ConstructorEntity> {
  constructor(
    @InjectRepository(ConstructorEntity)
    constructorRepository: Repository<ConstructorEntity>
  ) {
    super(constructorRepository);
  }
}
