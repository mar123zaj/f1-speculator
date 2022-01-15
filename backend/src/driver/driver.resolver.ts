import { DriverRepository } from '@driver/driver.repository';
import { AddDriverInput } from '@driver/inputs/add-driver.input';
import { UpdateDriverInput } from '@driver/inputs/update-driver.input';
import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { DriverEntity } from './driver.entity';

@Resolver(() => DriverEntity)
export class DriverResolver {
  @Inject() driverRepository: DriverRepository;

  @Mutation(() => DriverEntity)
  async addDriver(
    @Args('addDriverInput') addDriverInput: AddDriverInput
  ): Promise<DriverEntity> {
    return this.driverRepository.create(addDriverInput);
  }

  @Mutation(() => DriverEntity)
  async updateDriver(
    @Args('updateDriverInput') updateDriverInput: UpdateDriverInput
  ): Promise<DriverEntity> {
    return this.driverRepository.update(
      updateDriverInput.id,
      updateDriverInput
    );
  }

  @Query(() => DriverEntity)
  async driver(@Args('id') id: number): Promise<DriverEntity> {
    return this.driverRepository.findOneOrFail(id);
  }

  @Mutation(() => DriverEntity)
  async deleteDriver(@Args('id') id: number): Promise<DriverEntity> {
    return this.driverRepository.delete(id);
  }

  @Query(() => [DriverEntity])
  async drivers(): Promise<DriverEntity[]> {
    // TODO: Add search method with pagination and filtering instead of findAll
    return this.driverRepository.findAll();
  }
}
