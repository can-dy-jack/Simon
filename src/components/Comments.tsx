import Image from "next/image";
import { getComments } from "@/actions";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";

const Comments = ({ postId }: { postId: number }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(postId).then(res => {
      setComments(res);
    })
  }, [postId]);

  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          height={16}
          width={16}
          className="h-8 w-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-4 py-2 w-full">
          <input
            type="text"
            placeholder="畅所欲言"
            className="bg-transparent outline-none flex-1"
          />
          <Image
            alt="emoji"
            src="/emoji.svg"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <CommentList list={comments} postId={postId} />
    </div>
  );
};

export default Comments;
