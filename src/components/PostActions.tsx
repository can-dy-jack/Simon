"use client";

import { deletePost } from "@/actions/special";
import Image from "next/image";
import { useState } from "react";

const actionItemStyle = "cursor-pointer p-2 hover:bg-slate-100 rounded-md transition";

const PostActions = ({ postId }: { postId: number }) => {
  const [isOpen, setOpen] = useState(false);

  const deleteAction = async () => {
    if (!postId) {
      return;
    }
    await deletePost(postId);
  };

  return (
    <div className="relative">
      <Image
        src="/more.png"
        alt="avatar"
        height={16}
        width={16}
        className="cursor-pointer"
        onClick={() => setOpen(pre => !pre)}
      />

      {isOpen && (
        <div className="border border-slate-300 absolute top-4 right-1 bg-white p-1 w-20 text-sm rounded-lg flex flex-col shadow-lg z-30">
          <span className={actionItemStyle}>查看</span>
          <span className={actionItemStyle}>复制</span>
          <form action={deleteAction} className={actionItemStyle}>
            <button>
              <span className="text-red-600">删除</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostActions;
