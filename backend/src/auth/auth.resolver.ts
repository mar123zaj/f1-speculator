import { Query, Resolver } from '@nestjs/graphql';

@Resolver(() => String)
export class AuthResolver {
  @Query(() => String)
  me(): string {
    return 'me';
  }
}
