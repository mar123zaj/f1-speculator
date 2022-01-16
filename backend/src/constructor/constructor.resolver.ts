import { ConstructorRepository } from '@constructor/constructor.repository';
import { AddConstructorInput } from '@constructor/inputs/add-constructor.input';
import { UpdateConstructorInput } from '@constructor/inputs/update-constructor.input';
import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { ConstructorEntity } from './constructor.entity';

@Resolver(() => ConstructorEntity)
export class ConstructorResolver {
  @Inject() constructorRepository: ConstructorRepository;

  @Mutation(() => ConstructorEntity)
  async addConstructor(
    @Args('addConstructorInput') addConstructorInput: AddConstructorInput
  ): Promise<ConstructorEntity> {
    return this.constructorRepository.create(addConstructorInput);
  }

  @Mutation(() => ConstructorEntity)
  async updateConstructor(
    @Args('updateConstructorInput')
    updateConstructorInput: UpdateConstructorInput
  ): Promise<ConstructorEntity> {
    return this.constructorRepository.update(
      updateConstructorInput.id,
      updateConstructorInput
    );
  }

  @Query(() => ConstructorEntity, { name: 'constructor' })
  async getConstructor(@Args('id') id: number): Promise<ConstructorEntity> {
    return this.constructorRepository.findOneOrFail(id);
  }

  @Mutation(() => ConstructorEntity)
  async deleteConstructor(@Args('id') id: number): Promise<ConstructorEntity> {
    return this.constructorRepository.delete(id);
  }

  @Query(() => [ConstructorEntity])
  async constructors(): Promise<ConstructorEntity[]> {
    // TODO: Add search method with pagination and filtering instead of findAll
    return this.constructorRepository.findAll();
  }
}
