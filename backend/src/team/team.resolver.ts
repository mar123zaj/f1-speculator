import { TeamRepository } from '@team/team.repository';
import { AddTeamInput } from '@team/inputs/add-team.input';
import { UpdateTeamInput } from '@team/inputs/update-team.input';
import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { TeamEntity } from './team.entity';

@Resolver(() => TeamEntity)
export class TeamResolver {
  @Inject() teamRepository: TeamRepository;

  @Mutation(() => TeamEntity)
  async addTeam(
    @Args('addTeamInput') addTeamInput: AddTeamInput
  ): Promise<TeamEntity> {
    return this.teamRepository.create(addTeamInput);
  }

  @Mutation(() => TeamEntity)
  async updateTeam(
    @Args('updateTeamInput')
    updateTeamInput: UpdateTeamInput
  ): Promise<TeamEntity> {
    return this.teamRepository.update(updateTeamInput.id, updateTeamInput);
  }

  @Query(() => TeamEntity)
  async team(@Args('id') id: number): Promise<TeamEntity> {
    return this.teamRepository.findOneOrFail(id);
  }

  @Mutation(() => TeamEntity)
  async deleteTeam(@Args('id') id: number): Promise<TeamEntity> {
    return this.teamRepository.delete(id);
  }

  @Query(() => [TeamEntity])
  async teams(): Promise<TeamEntity[]> {
    // TODO: Add search method with pagination and filtering instead of findAll
    return this.teamRepository.findAll();
  }
}
