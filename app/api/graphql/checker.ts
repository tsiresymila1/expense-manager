import { AuthCheckerInterface, ResolverData } from "type-graphql";
import { ContextType } from "./decorator";
import { auth } from "@/lib/auth";

export class CustomAuthChecker implements AuthCheckerInterface<ContextType> {
    async check({ context }: ResolverData<ContextType>, roles: string[]) {
      console.log("roles:::", roles);
      const res = await auth.api.getSession({
        headers: context.req.headers,
      });
      return (res?.user !== null && res?.session !== null) ?? false;
    }
  }