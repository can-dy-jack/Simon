import prisma from "@/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  let { userId: currentUserId } = getAuth(request);

  const body = await request.json();
  if (!currentUserId) {
    currentUserId = body.currentUserId;
    if (!currentUserId) {
      return Response.json({ error: "Not authenticated" });
    }
  }

  const userId = body.userId;
  if (!userId) {
    return Response.json({ error: "no userId!" });
  }
  
  try {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: userId,
        blockedId: currentUserId
      }
    })

    return Response.json(res)
  } catch (err) {
    console.log(err);
    return Response.json({ error: err });
  }
}
