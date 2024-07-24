import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/avatar.jpg"
            alt="avatar"
            height={40}
            width={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">name</span>
        </div>
        <Image src="/more.png" alt="avatar" height={16} width={16} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image src="https://images.unsplash.com/photo-1721587352217-ecc89e9a0d81?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" className="object-cover" fill />
        </div>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
          ultricies leo integer malesuada nunc vel risus commodo viverra.
          Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis
          eleifend quam adipiscing. In hac habitasse platea dictumst vestibulum.
          Sagittis purus sit amet volutpat. Netus et malesuada fames ac turpis
          egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum
          lorem. Varius sit amet mattis vulputate enim. Habitasse platea
          dictumst quisque sagittis. Integer quis auctor elit sed vulputate mi.
          Dictumst quisque sagittis purus sit amet.
        </p>
      </div>
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-full">
            <Image
              src="/thumbs-up.svg"
              alt="links"
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              999 <span className="hidden md:inline">点赞</span>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-full">
            <Image
              src="/message.svg"
              alt="links"
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              999 <span className="hidden md:inline">评论</span>
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-full">
            <Image
              src="/share.svg"
              alt="links"
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              999 <span className="hidden md:inline">分享</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};
export default Post;
