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
  try {
    const res = await prisma.followRequest.findMany({
      where: {
        receiverId: userId
      },
      include: {
        sender: true,
      }
    })

    return Response.json(res)
  } catch (err) {
    console.log(err);
    return Response.json({ error: err });
  }
}
