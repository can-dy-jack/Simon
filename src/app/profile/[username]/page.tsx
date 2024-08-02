"use client";

import Sidebar from "../../../components/Sidebar";
import Information from "../../../components/Information";
import Feed from "../../../components/Feed";
import Image from "next/image";
import { getUserInfoByUsername, findBlocked } from "@/actions";
import { useEffect, useMemo, useState } from "react";
import { User } from "@prisma/client";
import { notFound } from "next/navigation";

type UserInfo = User & {
  _count: {
    follower: number;
    following: number;
    posts: number;
  }
}

const ProfilePage = ({ params }: { params: { username: string } }) => {
  const [isLoading, setLoad] = useState(true);
  const [userInfo, setUserInfo] = useState({} as UserInfo);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    getUserInfoByUsername(params.username).then((res) => {
      setUserInfo(res as UserInfo);
      setLoad(false);

      if (res) {
        findBlocked(res.id).then(res2 => {
          setIsBlocked(res2 != null ? true : false);
        })
      }
    });
  }, [params]);

  const username = useMemo(() => {
    if (!userInfo) return "";
    if (userInfo.name && userInfo.surname) {
      return userInfo.name + " " + userInfo.surname;
    } else {
      return userInfo.username;
    }
  }, [userInfo]);

  if (isLoading) return (
    <div className="text-blue-500 flex flex-col gap-4 items-center justify-center h-full">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      <div>Loading......</div>
    </div>
  );
  if (!userInfo) return notFound();
  // if (isBlocked) return notFound();

  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <Sidebar type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={userInfo.cover || "/noCover.png"}
                alt=""
                fill
                className="rounded-md object-cover"
              />
              <Image
                src={userInfo.avatar || "/avatar.jpg"}
                alt=""
                width={128}
                height={128}
                className="rounded-full w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z10"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">{username}</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">
                  {userInfo._count ? userInfo._count.posts : 999}
                </span>
                <span className="text-sm">文章</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">
                  {userInfo._count ? userInfo._count.follower : 999}
                </span>
                <span className="text-sm">粉丝</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">
                  {userInfo._count ? userInfo._count.following : 999}
                </span>
                <span className="text-sm">关注</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <Information userInfo={userInfo} username={username} />
      </div>
      </div>
  );
};

export default ProfilePage;
