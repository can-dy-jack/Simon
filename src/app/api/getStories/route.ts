import prisma from "@/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  let { userId: currentUserId } = getAuth(request);
  const body = await request.json();
  if (!currentUserId) {
    currentUserId = body.userId;
    if (!currentUserId) {
      return Response.json({ error: "Not authenticated" });
    }
  }

  try {
    const stories = await prisma.stories.findMany({
      where: {
        expiresAt: {
          gt: new Date(),
        },
        OR: [
          {
            user: {
              follower: {
                some: {
                  followerId: currentUserId,
                },
              },
            },
          },
          {
            userId: currentUserId,
          },
        ],
      },
      include: {
        user: true,
      },
    });

    return Response.json(stories)
  } catch (err) {
    console.log(err);
    return Response.json({ error: err });
  }
}
