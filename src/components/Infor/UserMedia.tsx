import Link from "next/link";
import Image from "next/image";
import { Post, User } from "@prisma/client";
import { useEffect, useState } from "react";
import { getMedia } from "@/actions";
import Load from "../partial/Load";

const UserMedia = ({ userInfo }: { userInfo?: User }) => {
  const [postsWithMedia, setMedia] = useState([] as Post[]);
  const [loading, setLoad] = useState(false);

  useEffect(() => {
    if (userInfo && userInfo.id) {
      setTimeout(() => {
        setLoad(true);
      }, 0)
      getMedia().then(res => {
        setMedia(res);
      }).finally(() => {
        setLoad(false);
      })
    }
  }, [userInfo]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between font-medium mb-4">
        <span className="text-gray-500">相册</span>
        <Link href="/" className="text-blue-500 text-xs">
          查看更多
        </Link>
      </div>
      <div className="flex gap-2 justify-between flex-wrap">
        {loading ? <Load /> : postsWithMedia.length ? postsWithMedia.map((item) => (
          <div className="relative w-1/5 h-24" key={item.id}>
            <Image
              src={item.img || "/avatar.jpg"}
              fill
              alt=""
              className="object-cover rounded-md"
            />
          </div>
        )) : "暂无图片"}
      </div>
    </div>
  );
};
export default UserMedia;
