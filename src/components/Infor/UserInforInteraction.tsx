"use client";

import { switchFollow, switchBlock } from "@/lib/actions";
import { useEffect, useOptimistic, useState } from "react";
import {
  findBlocked,
  findFollowing,
  findFollowingReq,
  getUserId,
} from "@/lib/actions";
import { User } from "@prisma/client";

const UserInforInteraction = ({ userInfo }: { userInfo?: User }) => {
  const [state, setState] = useState({
    isUserBlocked: false,
    isFollowing: false,
    isFollowingSent: false,
  });

  useEffect(() => {
    if (userInfo && userInfo.id) {
      findBlocked(userInfo?.id).then((res) => {
        // setIsUserBlocked(res != null);
        setState((pre) => ({
          ...pre,
          isUserBlocked: res != null,
        }));
      });
      findFollowing(userInfo?.id).then((res) => {
        // setIsFollowing(res != null);
        setState((pre) => ({
          ...pre,
          isFollowing: res != null,
        }));
      });
      findFollowingReq(userInfo?.id).then((res) => {
        // setIsFollowingSent(res != null);
        setState((pre) => ({
          ...pre,
          isFollowingSent: res != null,
        }));
      });
    }
  }, [userInfo]);

  const [optimisticState, switchOptimisticState] = useOptimistic(
    state,
    (pre, value: "follow" | "block") =>
      value == "follow"
        ? {
            ...pre,
            isFollowing: pre.isFollowing && false,
            isFollowingSent: !pre.isFollowing && !pre.isFollowingSent,
          }
        : {
            ...pre,
            isUserBlocked: !pre.isUserBlocked,
          }
  );

  const follow = (form: FormData) => {
    if (userInfo && userInfo.id) {
      switchOptimisticState("follow"); // 立即切换状态 - 接口返回结果之后再判断有无问题
      switchFollow(userInfo.id).then(res => {
        setState(pre => ({
          ...pre,
          isFollowing: pre.isFollowing && false,
          isFollowingSent: !pre.isFollowing && !pre.isFollowingSent,
        }))
      });;
    }
  };

  const block = () => {
    if (userInfo && userInfo.id) {
      switchOptimisticState("block");
      switchBlock(userInfo.id).then(res => {
        setState(pre => ({
          ...pre,
          isUserBlocked: !pre.isUserBlocked,
        }))
      });
    }
  };

  return (
    <div className="flex p-4 bg-blue-50 items-center gap-4">
      <form action={follow} className="flex-1">
        {optimisticState.isFollowing ? (
          <button className="bg-gray-500/[0.1] border border-gray-500 text-gray-500 text-sm rounded-md p-2 w-full hover:bg-gray-500/[0.2] active:bg-gray-500/[0.1]">
            关注中
          </button>
        ) : optimisticState.isFollowingSent ? (
          <button className="bg-gray-500/[0.1] border border-gray-500 text-gray-500 text-sm rounded-md p-2 w-full hover:bg-gray-500/[0.2] active:bg-gray-500/[0.1]">
            取消关注
            {/* 好友请求已发送 */}
          </button>
        ) : (
          <button className="bg-blue-500 text-white text-sm rounded-md p-2 w-full hover:bg-blue-400 active:bg-blue-500">
            关注
          </button>
        )}
        {/* <button className="bg-blue-500 text-white text-sm rounded-md p-2 w-full hover:bg-blue-400 active:bg-blue-500">
          {isFollowing ? "取消关注" : isFollowingSent ? "好友申请" : "关注"}
        </button> */}
      </form>
      <form action={block} className="w-20 text-center">
        <button>
          <span className="text-red-400 text-xs cursor-pointer">
            {optimisticState.isUserBlocked ? "取消屏蔽" : "屏蔽"}
          </span>
        </button>
      </form>
    </div>
  );
};
export default UserInforInteraction;
