import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useOptimistic, useState } from "react";
import { switchLike } from "@/actions";

const PostInter = ({
  postId,
  likes,
  comments,
}: {
  postId: number;
  likes: string[];
  comments: number;
}) => {
  const { userId, isLoaded } = useAuth();
  const [likeState, setLikes] = useState({
    likeCount: likes.length,
    isLiked: userId ? likes.includes(userId) : false,
  });
  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    likeState,
    (pre, action) => ({
      likeCount: pre.isLiked ? pre.likeCount - 1 : pre.likeCount + 1,
      isLiked: !pre.isLiked,
    })
  );
  const setLike = async () => {
    switchOptimisticLike("");
    try {
      await switchLike(postId);
      setLikes((pre) => ({
        likeCount: pre.isLiked ? pre.likeCount - 1 : pre.likeCount + 1,
        isLiked: !pre.isLiked,
      }));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex items-center justify-between text-sm my-4">
      <div className="flex gap-4">
        <div className={
          `flex items-center gap-3 ${!optimisticLike.isLiked ? "bg-slate-50" : "bg-green-50"} py-1 px-4 rounded-full`
        }>
          <form action={setLike} className="flex-center">
            <button>
              <Image
                src={
                  optimisticLike.isLiked
                    ? "/thumbs-up-green.svg"
                    : "/thumbs-up.svg"
                }
                alt="links"
                height={16}
                width={16}
                className="cursor-pointer"
              />
            </button>
          </form>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            <span>{optimisticLike.likeCount}</span>
            {/* {" "} */}
            {/* <span className="hidden md:inline">点赞</span> */}
          </span>
        </div>
        <div className="flex items-center gap-3 bg-slate-50 py-1 px-4 rounded-full">
          <Image
            src="/message.svg"
            alt="links"
            height={16}
            width={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            <span>{comments}</span>{" "}
            {/* <span className="hidden md:inline">评论</span> */}
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center gap-2 bg-slate-50 py-1 px-4 rounded-full">
          <Image
            src="/share.svg"
            alt="links"
            height={16}
            width={16}
            className="cursor-pointer"
          />
          {/* <span className="text-gray-300">|</span> */}
          {/* <span className="text-gray-500">
            999 <span className="hidden md:inline">分享</span>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default PostInter;
