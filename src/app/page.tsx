"use client";

import Sidebar from "../components/Sidebar";
import Information from "../components/Information";
import AddPost from "../components/AddPost";
import Feed from "../components/Feed";
import Stories from "../components/Stories";
import { useUser } from "@clerk/nextjs";

const Homepage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  // console.log(
  //   23333, user
  // )

  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]">
        <Sidebar />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="pb-3">
          <div className="text-slate-600">{user ? "欢迎您，" + user.username : ""}</div>
        </div>
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <Information />
      </div>
    </div>
  )
}

export default Homepage;
