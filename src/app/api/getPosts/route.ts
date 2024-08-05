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
  const username = body.username;
  try {
    if (!username) {
      const following = await prisma.follower.findMany({
        where: {
          followerId: currentUserId
        },
        select: {
          followingId: true
        }
      });

      const followingIds = following.map(item => item.followingId);

      const posts = await prisma.post.findMany({
        where: {
          userId: {
            in: followingIds
          }
        },
        include: {
          user: true,
          likes: {
            select: {
              userId: true
            }
          },
          _count: {
            select: {
              comments: true
            }
          }
        },
        orderBy: {
          createAt: "desc"
        }
      })

      return Response.json(posts);
    };

    const res = await prisma.post.findMany({
      where: {
        user: {
          username
        }
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true
          }
        },
        _count: {
          select: {
            comments: true
          }
        }
      },
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
