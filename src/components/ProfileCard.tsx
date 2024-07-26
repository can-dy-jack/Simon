import Image from "next/image";
import Link from "next/link";
import { getUserInfo } from "@/lib/actions";
import { useEffect, useMemo, useState } from "react";
import type { UserInfo } from "../lib/types";

const ProfileCard = () => {
  const [userInfo, setUserInfo] = useState({} as UserInfo);

  useEffect(() => {
    getUserInfo().then((res) => {
      setUserInfo(res as UserInfo);
    });
  }, []);

  const username = useMemo(() => {
    if (userInfo.name && userInfo.surname) {
      return userInfo.name + " " + userInfo.surname;
    } else {
      return userInfo.username;
    }
  }, [userInfo]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={userInfo.cover || "/noCover.png"}
          alt=""
          fill
          className="rounded-md"
        />
        <Image
          src={userInfo.avatar || "/avatar.jpg"}
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z10"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="font-semibold">{username}</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="/avatar.jpg"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src="/avatar.jpg"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src="/avatar.jpg"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover"
            />
          </div>
          <span className="text-xs text-gray-500">
            {userInfo._count ? userInfo._count.follower : 9999} 粉丝
          </span>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md text-xs">
          <Link href="/profile/kartjim">我的主页</Link>
        </button>
      </div>
    </div>
  );
};
export default ProfileCard;
