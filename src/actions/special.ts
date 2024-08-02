"use server";

import { auth } from "@clerk/nextjs/server";

export async function getUserId() {
  const { userId } = auth();
  if (!userId) throw new Error("User is not authenticated!");
  return userId;
}
