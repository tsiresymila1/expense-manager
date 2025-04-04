import { Authorized, ObjectType, Query, Resolver } from "type-graphql";
import { CurrentUser, type User } from "../../decorator";

// Define GraphQL Object Type
@ObjectType()
@Resolver()
@Authorized()
export class AppResolver {
  @Query(() => String)
  test(@CurrentUser() user: User): string {
    return `Ok  with user :: ${user?.name}`;
  }
}
