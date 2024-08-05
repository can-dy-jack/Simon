"use client";

import { Comment, User } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";

type CommentWithUser = Comment & {
  user: User
}

const CommentList = ({ list, postId }: { list: CommentWithUser[], postId: number }) => {
  return (
      <div className="">
        {[{}].map((item, idx) => (
          <div className="flex gap-4 justify-between mt-6" key={idx}>
            <Image
              src="/avatar.jpg"
              alt="avatar"
              height={40}
              width={40}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-medium">username</span>
              <p>It&apos;s goood!</p>
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
                  <span className="text-gray-500">999 Likes</span>
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
  );
};

export default CommentList;
