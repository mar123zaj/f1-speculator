import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  Repository,
  SaveOptions,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseRepository<T> {
  protected constructor(readonly repository: Repository<T>) {}

  async findAll(options: FindManyOptions<T> = {}): Promise<T[]> {
    return this.repository.find(options);
  }

  async findOne(id: number, options: FindOneOptions<T> = {}): Promise<T> {
    return this.repository.findOne(id, options);
  }

  async findOneOrFail(id: number, options: FindOneOptions<T> = {}): Promise<T> {
    return this.repository.findOneOrFail(id, options);
  }

  async create(model: DeepPartial<T>, options: SaveOptions = {}): Promise<T> {
    const result = await this.repository.create(model);
    return this.repository.save(result, options);
  }

  async save(model: T, options: SaveOptions = {}): Promise<T> {
    return this.repository.save<T>(model, options);
  }

  async update(
    id: number,
    partial: QueryDeepPartialEntity<T>,
    options: FindOneOptions<T> = {}
  ): Promise<T> {
    const data = Object.entries(partial).reduce((all, [key, value]) => {
      if (value === undefined) return all;
      return { ...all, [key]: value };
    }, {});
    await this.repository.update(id, data);
    return this.findOne(id, options);
  }

  async delete(id: number, options: FindOneOptions<T> = {}): Promise<T> {
    const model = await this.repository.findOneOrFail(id, options);
    await this.repository.delete(id);
    return model;
  }
}
