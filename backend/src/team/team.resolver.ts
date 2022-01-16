import { TeamRepository } from '@team/repositories/team.repository';
import { AddTeamInput } from '@team/inputs/add-team.input';
import { UpdateTeamInput } from '@team/inputs/update-team.input';
import { Inject } from '@nestjs/common';
import {
  Args,
  Mutation,
  Resolver,
  Query,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { DriverRepository } from '@driver/driver.repository';
import { TeamEntity } from '@team/entities/team.entity';
import { TeamDriverRepository } from '@team/repositories/team-driver.repository';
import { DriverEntity } from '@driver/driver.entity';
import { TeamDriverEntity } from '@team/entities/team-driver.entity';

@Resolver(() => TeamEntity)
export class TeamResolver {
  @Inject() teamRepository: TeamRepository;
  @Inject() teamDriverRepository: TeamDriverRepository;
  @Inject() driverRepository: DriverRepository;

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
    return this.teamRepository.findOneOrFail(id, {
      relations: ['drivers', 'drivers.driver'],
    });
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

  @Mutation(() => TeamEntity)
  async addDriverToTeam(
    @Args('driverId') driverId: number,
    @Args('teamId') teamId: number
  ): Promise<TeamEntity> {
    const driver = await this.driverRepository.findOneOrFail(driverId);
    const team = await this.teamRepository.findOneOrFail(teamId, {
      relations: ['drivers', 'drivers.driver'],
    });
    await this.teamDriverRepository.create({ team, driver });
    await team.reload();
    return team;
  }

  @ResolveField(() => [DriverEntity])
  async drivers(@Parent() team: TeamEntity): Promise<DriverEntity[]> {
    return team.getDrivers();
  }
}
