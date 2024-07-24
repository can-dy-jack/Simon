import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.unsplash.com/photo-1721587352217-ecc89e9a0d81?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="rounded-md"
        />
        <Image
          src="/avatar.jpg"
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z10"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="font-semibold">User name</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="/avatar.jpg"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src="/avatar.jpg"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src="/avatar.jpg"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover"
            />
          </div>
          <span className="text-xs text-gray-500">999 粉丝</span>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md text-xs">
          <Link href="/profile/kartjim">我的主页</Link>
        </button>
      </div>
    </div>
  );
};
export default ProfileCard;
