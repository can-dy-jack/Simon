import Friends from "./Infor/Friends";
import Ad from "./Infor/Ad";
import Birthdays from "./Infor/Birthdays";
import UserInfo from "./Infor/UserInfo";
import UserMedia from "./Infor/UserMedia";
import { User } from "@prisma/client";

const Information = ({ userInfo, username }: {userInfo?: User, username: string}) => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {
        userInfo && (
          <>
            <UserInfo userInfo={userInfo} username={username} />
            <UserMedia userInfo={userInfo} />
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
