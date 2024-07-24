import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src="/avatar.jpg"
        alt="avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <div className="flex gap-4 relative">
          <textarea
            name="addpost"
            id="addpost"
            autoFocus
            placeholder="输出你的想法？"
            className="resize-y bg-slate-100 rounded-lg flex-1 p-2 outline-none focus:outline-1 focus:outline-blue-400 transition-all"
          ></textarea>
          {/* <textarea
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="addpost"
            rows={3}
            placeholder="输出你的想法？"
          ></textarea>
          <label
            htmlFor="addpost"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
          >
            表达你的想法
          </label> */}
          <Image
            src="/emoji.svg"
            alt="emoji"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          {[
            { text: "图片", src: "/media-image.svg" },
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
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AddPost;
