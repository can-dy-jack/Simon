import prisma from "@/lib/client";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(request) {
  let { userId } = getAuth(request);

  const body = await request.json();
  if (!userId) {
    userId = body.userId;
    if (!userId) {
      return Response.json({ error: "Not authenticated" });
    }
  }

  const username = body.username;
  if (!username) {
    return Response.json({ error: "no username!" });
  }

  try {
    const userInfo = await prisma.user.findFirst({
      where: {
        username,
      },
      include: {
        _count: {
          select: {
            follower: true,
            following: true,
            posts: true
          }
        }
      }
    });

    return Response.json(userInfo)
  } catch (err) {
    console.log(err);
    return Response.json({ error: err });
  }
}
