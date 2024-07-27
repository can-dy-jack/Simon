import Friends from "./Infor/Friends";
import Ad from "./Infor/Ad";
import Birthdays from "./Infor/Birthdays";
import UserInfo from "./Infor/UserInfo";
import UserMedia from "./Infor/UserMedia";
import { User } from "@prisma/client";
import { Suspense } from "react";


const Information = ({ userInfo, username }: {userInfo?: User, username: string}) => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {
        userInfo && (
          <>
            <Suspense fallback="loading...">
              <UserInfo userInfo={userInfo} username={username} />
            </Suspense>
            <Suspense fallback="loading...">
              <UserMedia userInfo={userInfo} />
            </Suspense>
          </>
        )
      }
      <Friends />
      <Birthdays />
      <Ad size="md" />
    </div>
  )
}
export default Information;
