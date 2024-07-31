import prisma from "@/lib/client";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(request, result) {
  let { userId } = getAuth(request); // clerk userId

  if (!userId) {
    const res = await request.json();  // 没有 userId 就去 body里找
    userId = res.userId;
    if (!userId) {
      return Response.json({ error: "Not authenticated" });
    }
  }

  try {
    const userInfo = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        _count: {
          select: {
            follower: true
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
