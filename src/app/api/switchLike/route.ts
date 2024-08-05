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
    const existingLike = await prisma.like.findFirst({
      where: {
        postId,
        userId,
      },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
      return Response.json({msg: "取消关注成功"})
    } else {
      await prisma.like.create({
        data: {
          postId,
          userId,
        },
      });
      return Response.json({msg: "关注成功"})
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: err });
  }
}
