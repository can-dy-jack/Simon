import Image from "next/image";

const Stories = () => {
  return (
    <div
      className="cursor-pointer p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm scroll-hide"
      title="按住shift键加滚轮，可以滚动横向内容！"
    >
      <div className="flex gap-8 w-max select-none">
        {[1, 2, 3, 4, 5, 6, 7, 11, 8, 9].map((item) => (
          <div
            key={item}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1721405380977-d27241902a74?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={80}
              height={80}
              className="h-20 w-20 rounded-full ring-2"
            />
            <span className="font-medium">故事标题</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Stories;
