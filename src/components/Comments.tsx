import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image src="/avatar.jpg" alt="avatar" height={16} width={16} className="h-8 w-8 rounded-full" />
      </div>
      <div className=""></div>
    </div>
  );
}

export default Comments;
