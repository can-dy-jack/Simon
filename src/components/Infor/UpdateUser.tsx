"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { updateProfile } from "@/lib/actions";
import { UserButton } from "@clerk/nextjs";

const UpdateUser = ({ userInfo }: { userInfo: User }) => {
  const [isOpen, setOpen] = useState(false);
  const handleCancel = () => {
    setOpen(false);
  };

  const Update = (form: FormData) => {
    updateProfile(
      { success: true, error: false },
      { formData: form, cover: "" }
    ).then(res => {
    });
  };

  return (
    <div>
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        编辑
      </span>

      {isOpen ? (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            action={Update}
            className="relative flex flex-col bg-white rounded-lg shadow-md w-full md:w-1/2 xl:w-1/3 h-[70%]"
          >
            <div className="flex items-center justify-between p-4  border-b border-gray-100">
              <h1 className="text-base font-semibold">更新个人信息</h1>
              <Image
                className="cursor-pointer"
                onClick={handleCancel}
                src="/reject.svg"
                height={28}
                width={28}
                alt="close"
              ></Image>
            </div>
            <div className="p-4 flex-1 overflow-auto">
              <div className="text-sm text-gray-500 bg-slate-50 border-l-2 border-l-blue-400 p-4 mb-2 flex items-center gap-4 flex-wrap">
                <span>提示：更新用户名和用户图片等账户信息请使用clerk工具</span><UserButton />
              </div>

              {/* <div className="flex flex-col gap-4 mb-4">
                <label htmlFor="" className="text-xs text-gray-500">更新用户图像</label>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image
                    src={userInfo.cover || ""}
                    alt="avatar"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  ></Image>
                  <span className="underline text-gray-600">上传新图片</span>
                </div>
              </div> */}

              <div className="flex flex-col gap-4">
                {/* <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-xs text-gray-500">
                    用户名
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder={userInfo.username || ""}
                    className="ring-1 ring-gary-300 py-2 px-3 rounded-md text-sm"
                    defaultValue={userInfo.username || ""}
                  />
                </div> */}

                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-xs text-gray-500">
                    个人介绍
                  </label>
                  <textarea
                    name="description"
                    rows={5}
                    defaultValue={userInfo.description || ""}
                    className="ring-1 ring-gary-300 py-2 px-3 rounded-md text-sm"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-xs text-gray-500">
                    城市
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder={userInfo.city || ""}
                    defaultValue={userInfo.city || ""}
                    className="ring-1 ring-gary-300 py-2 px-3 rounded-md text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-xs text-gray-500">
                    学校
                  </label>
                  <input
                    type="text"
                    name="school"
                    placeholder={userInfo.school || ""}
                    defaultValue={userInfo.school || ""}
                    className="ring-1 ring-gary-300 py-2 px-3 rounded-md text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-xs text-gray-500">
                    工作
                  </label>
                  <input
                    type="text"
                    name="work"
                    placeholder={userInfo.work || ""}
                    defaultValue={userInfo.work || ""}
                    className="ring-1 ring-gary-300 py-2 px-3 rounded-md text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-xs text-gray-500">
                    个人网站
                  </label>
                  <input
                    type="text"
                    name="website"
                    placeholder={userInfo.website || ""}
                    defaultValue={userInfo.website || ""}
                    className="ring-1 ring-gary-300 py-2 px-3 rounded-md text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="p-2 text-right">
              <button
                type="submit"
                className="px-4 py-2 rounded-md cursor-pointer m-2 border hover:shadow-[0_0_0_3px_#eef] transition-shadow"
              >
                更新
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 rounded-md cursor-pointer m-2 border hover:shadow-[0_0_0_3px_#eee] transition-shadow"
              >
                取消
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};
export default UpdateUser;
