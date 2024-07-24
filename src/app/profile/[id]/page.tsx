"use client";

import Sidebar from "../../../components/Sidebar";
import Information from "../../../components/Information";
import Feed from "../../../components/Feed";
import Image from "next/image";

const ProfilePage = () => {
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
                src="https://images.unsplash.com/photo-1721587352217-ecc89e9a0d81?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                fill
                className="rounded-md object-cover"
              />
              <Image
                src="/avatar.jpg"
                alt=""
                width={128}
                height={128}
                className="rounded-full w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z10"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Kart Jim</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">999</span>
                <span className="text-sm">文章</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">999</span>
                <span className="text-sm">粉丝</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">999</span>
                <span className="text-sm">关注</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <Information userId="test" />
      </div>
    </div>
  );
};

export default ProfilePage;
