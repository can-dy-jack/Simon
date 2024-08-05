import prisma from "@/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  let { userId } = getAuth(request);
  const body = await request.json();
  if (!userId) {
    userId = body.userId;
    if (!userId) {
      return Response.json({ error: "Not authenticated" });
    }
  }
  const postId = body.postId;
  try {
    const res = await prisma.comment.findMany({
      where: {
        postId
      },
      include: {
        user: true
      }
    });

    return Response.json(res)
  } catch (err) {
    console.log(err);
    return Response.json({ error: err });
  }
}
