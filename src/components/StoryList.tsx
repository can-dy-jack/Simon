"use client";

import { addStory } from "@/actions/special";
import { Stories, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useEffect, useOptimistic, useState } from "react";

type StoriesWithUser = Stories & {
  user: User;
};

const StoryList = ({
  stories,
  userId,
}: {
  stories: StoriesWithUser[];
  userId: string;
}) => {
  const [story, setStory] = useState<StoriesWithUser[]>([]);
  const [img, setImg] = useState<any>();
  useEffect(() => {
    setStory(stories);
  }, [stories]);

  const [opticStory, addOpticStory] = useOptimistic(
    story,
    (prev, value: StoriesWithUser) => [value, ...prev]
  );

  const add = async () => {
    if (!img || !img.secure_url) {
      return;
    }

    addOpticStory({
      id: Math.random(),
      createAt: new Date(Date.now()),
      img: img.secure_url,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: userId,
      user: {
        id: userId,
        avatar: "/avatar.jpg",
        username: "",
        createAt: new Date(Date.now()),
        cover: null,
        name: null,
        surname: null,
        description: null,
        city: null,
        school: null,
        work: null,
        website: null
      }
    });
    try {
      let createdStory = await addStory(img.secure_url);
      setStory(pre => [createdStory!, ...pre])
      setImg("");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="flex gap-8 w-max select-none">
        <CldUploadWidget
          uploadPreset="socail"
          onSuccess={(res) => setImg(res.info)}
        >
          {({ open }) => {
            return (
              <div
                className="flex flex-col items-center gap-2 cursor-pointer relative"                
                title="上传图片"
              >
                <Image
                  src={img ? img?.secure_url : "/avatar.jpg"}
                  alt=""
                  
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full ring-2 object-cover"
                />
                {
                  img ? (
                    <form action={add}>
                      <button className="text-xs bg-blue-500 p-1 rounded-md text-white">发布</button>
                    </form>
                  ) : (
                    <span className="font-medium">新增故事</span>
                  )
                }
                <div className="absolute text-6xl text-white top-1 w-full text-center" onClick={() => open()}>+</div>
              </div>
            );
          }}
        </CldUploadWidget>
        {opticStory.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <Image
              src={item.user.avatar || ""}
              alt=""
              width={80}
              height={80}
              className="h-20 w-20 rounded-full ring-2"
            />
            <span className="font-medium">{item.user.username}</span>
          </div>
        ))}
      </div>
    </>
  );
};
export default StoryList;
