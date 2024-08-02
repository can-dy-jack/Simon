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
    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingFollowRequest.id,
        },
      });
      return Response.json({ meg: "成功！" })
    }
    return Response.json({ meg: "失败！" })
  } catch (err) {
    console.log(err);
    return Response.json({ error: err });
  }
}
