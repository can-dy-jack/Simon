import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";
import { useCallback, useEffect, useRef, useState } from "react";
import "./userinfo.css";
import UserInforInteraction from "./UserInforInteraction";
import { getUserId } from "@/actions/special";
import UpdateUser from "./UpdateUser";

const UserInfo = ({
  userInfo,
  username,
}: {
  userInfo?: User;
  username?: string;
}) => {
  let [currentUserId, setCurrentUserId] = useState<null | string>(null);

  const formateDate = useCallback((date: Date | string | undefined) => {
    if (date) {
      return new Date(date).toLocaleString("zh-cn", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return "";
  }, []);

  useEffect(() => {
    getUserId().then(res => {
      setCurrentUserId(res);
    });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md text-sm card">
      {/* <div className="flex items-center justify-between font-medium p-4 pb-0">
        <span className="text-gray-500">个人信息</span>
        <Link href="/" className="text-blue-500 text-xs">
          查看更多
        </Link>
      </div> */}
      <div className="flex flex-col gap-4 text-gary-500">
        <div className="p-4 pb-0">
          <div className="flex items-center gap-2 flex-wrap w-[80%]">
            <span className="text-xl text-black">{username}</span>
            <span className="text-sm text-gray-400">@{username}</span>
            {currentUserId && userInfo && userInfo.id == currentUserId ? (
              <UpdateUser userInfo={userInfo} />
            ) : (
              // <Link href="/" className="text-blue-500 text-xs more">
              //   查看更多
                // </Link>
                null
            )}
          </div>
        </div>
        {userInfo?.description && (
          <div
            className="text-gray-800 bg-slate-50 px-4 py-2 desc"
            style={{ whiteSpace: "pre-wrap" }}
            dangerouslySetInnerHTML={{
              __html: userInfo.description.replace(/\\n/g, "<br/>"),
            }}
          >
            { }
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 p-4 text-gary-500">
        {userInfo?.city && (
          <div className="flex items-center gap-2">
            <Image src="/map.svg" alt="" height={16} width={16} />
            <span>
              城市：<b>{userInfo.city}</b>
            </span>
          </div>
        )}
        {userInfo?.school && (
          <div className="flex items-center gap-2">
            <Image src="/school.svg" alt="" height={16} width={16} />
            <span>
              学校：<b>{userInfo.school}</b>
            </span>
          </div>
        )}
        {userInfo?.work && (
          <div className="flex items-center gap-2">
            <Image src="/city.svg" alt="" height={16} width={16} />
            <span>
            工作：<b>{userInfo.work}</b>
            </span>
          </div>
        )}
        {userInfo?.website && (
          <div className="flex items-center gap-2">
            <Image src="/link.svg" alt="" height={16} width={16} />
            <Link
              href={userInfo.website}
              target="_blank"
              className="text-blue-500 font-medium"
            >
              {userInfo.website}
            </Link>
          </div>
        )}
        {userInfo?.createAt && (
          <div className="flex items-center gap-2">
            <Image src="/calendar-plus.svg" alt="" height={16} width={16} />
            <span>{formateDate(userInfo.createAt)} 加入</span>
          </div>
        )}
      </div>
      {currentUserId && userInfo && userInfo.id !== currentUserId && (
        <UserInforInteraction userInfo={userInfo} />
      )}
    </div>
  );
};
export default UserInfo;
