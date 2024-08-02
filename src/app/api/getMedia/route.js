import prisma from "@/prisma";
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
  
  try {
    const res = await prisma.post.findMany({
      where: {
        userId,
        img: {
          not: null,
        }
      },
      take: 8,
      orderBy: {
        createAt: "desc"
      }
    })

    return Response.json(res)
  } catch (err) {
    console.log(err);
    return Response.json({ error: err });
  }
}
