import "server-only";
import { getUser } from "@/app/actions/get-user";
import prisma from "@/lib/prisma";
import { cache } from "react";

export const getCurrency = cache(async () => {
  const user = await getUser();
  if (!user) return null;

  const currency = await prisma.setting.findUnique({
    where: {
      userId: user.id,
      key: `${user.id}_currency_symbol`,
    },
  });

  return `${currency?.value ?? '$'} `;
});
