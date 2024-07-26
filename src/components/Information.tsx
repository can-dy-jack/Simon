import Friends from "./Infor/Friends";
import Ad from "./Infor/Ad";
import Birthdays from "./Infor/Birthdays";
import UserInfo from "./Infor/UserInfo";
import UserMedia from "./Infor/UserMedia";

const Information = ({ userId }: {userId?:string}) => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {
        userId && (
          <>
            <UserInfo userId={userId} />
            <UserMedia userId={userId} />
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
