"use client";

import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import { useEffect, useOptimistic, useState } from "react";
import { addComment } from "@/actions/special";

type CommentWithUser = Comment & {
  user: User;
};

const CommentList = ({
  list,
  postId,
}: {
  list: CommentWithUser[];
  postId: number;
  }) => {
  const { user } = useUser();
  
  const [desc, setDesc] = useState("");
  const [comments, setComments] = useState(list);
  useEffect(() => {
    setComments(list);
  }, [list]);

  const add = async (form: FormData) => {
    if (!user || !desc) return;

    addOptimisticState({
      id: Math.random(),
      desc,
      createAt: new Date(Date.now()),
      updateAt: new Date(Date.now()),
      userId: user.id,
      postId: postId,
      user: {
        id: user.id,
        avatar: user.imageUrl || "/avatar.jpg",
        username: user.username || "",
        createAt: new Date(Date.now()),
        cover: null,
        name: null,
        surname: null,
        description: null,
        city: null,
        school: null,
        work: null,
        website: null
      }
    });
    try {
      const createdComment = await addComment(postId, desc);
      setComments((pre) => [createdComment, ...pre])
    } catch (e) {
      console.error(e)
    }
  }
  const [optimisticState, addOptimisticState] = useOptimistic(
    comments,
    (pre, value: CommentWithUser) => [value, ...pre]
  );

  return (
    <>
      {user && (
        <div className="flex items-center gap-4">
          <Image
            src={user?.imageUrl || "/avatar.jpg"}
            alt="avatar"
            height={16}
            width={16}
            className="h-8 w-8 rounded-full"
          />
          <form action={add} className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-4 py-2 w-full">
            <input
              type="text"
              placeholder="畅所欲言"
              className="bg-transparent outline-none flex-1"
              onChange={(e) => setDesc(e.target.value)}
            />
            <Image
              alt="emoji"
              src="/emoji.svg"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </form>
        </div>
      )}
      <div className="">
        {optimisticState.map((item) => (
          <div className="flex gap-4 justify-between mt-6" key={item.id}>
            <Image
              src={item.user.avatar || "/avatar.jpg"}
              alt="avatar"
              height={40}
              width={40}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-medium">{ item.user.username }</span>
              <p>{ item.desc }</p>
              <div className="flex items-center gap-8 text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <Image
                    src="/thumbs-up.svg"
                    alt="avatar"
                    height={12}
                    width={12}
                    className="cursor-pointer w-3 h-3"
                  />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">{ 999 }</span>
                </div>
                <div>回复</div>
              </div>
            </div>
            <Image
              src="/more.png"
              alt="avatar"
              height={16}
              width={16}
              className="cursor-pointer w-4 h-4"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentList;
