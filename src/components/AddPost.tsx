import { addPost } from "@/actions/special";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Load from "./partial/Load";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import AddPostBtn from "./AddPostBtn";

const AddPost = () => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>({});

  if (!isLoaded) {
    return <Load />;
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src={user?.imageUrl || "/avatar.jpg"}
        alt="avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <form action={async (formDate) => addPost(formDate, img?.secure_url || "")} className="flex gap-4 relative">
          <textarea
            name="desc"
            id="desc"
            autoFocus
            placeholder="输出你的想法？"
            onChange={(e) => setDesc(e.target.value)}
            className="resize-y bg-slate-100 rounded-lg flex-1 p-2 outline-none focus:outline-1 focus:outline-blue-400 transition-all"
          ></textarea>

          <Image
            src="/emoji.svg"
            alt="emoji"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
          <AddPostBtn />
        </form>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-2 flex-wrap items-center">
            {img && img?.secure_url
              ? (<Image
                key={img.secure_url}
                src={img.secure_url}
                alt=""
                height={60}
                width={60}
              />)
              : ""}
          </div>
          <div className="flex items-center gap-4 text-gray-400 flex-wrap">
            <CldUploadWidget
              uploadPreset="socail"
              onSuccess={(res) => setImg(res.info)}
            >
              {({ open }) => {
                return (
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => open()}
                    title="上传图片"
                  >
                    <Image
                      src="/media-image.svg"
                      alt="avatar"
                      width={20}
                      height={20}
                      className="gray-svg"
                    ></Image>
                  </div>
                );
              }}
            </CldUploadWidget>
            {[
              // { text: "图片", src: "/media-image.svg" },
              { text: "视频", src: "/media-video.svg" },
              { text: "事件", src: "/calendar.svg" },
              { text: "投票", src: "/vote.svg" },
            ].map((item) => (
              <div
                key={item.src}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.text}
                  height={20}
                  width={20}
                  className="gray-svg"
                />
                {/* {item.text} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPost;
