import prisma from "@/lib/client";
import { getAuth } from "@clerk/nextjs/server";

// TODO 不起作用？
export async function POST(request) {
  let { userId: currentUserId } = getAuth(request);

  const body = await request.json();
  if (!currentUserId) {
    currentUserId = body.userId;
    if (!currentUserId) {
      return Response.json({ error: "Not authenticated" });
    }
  }

  const userId = body.userId;
  if (!userId) {
    return Response.json({ error: "no userId!" });
  }

  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });

      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
      }
    }

    return Response.json({})
  } catch (err) {
    console.log(err);
    return Response.json({ error: err });
  }
}
