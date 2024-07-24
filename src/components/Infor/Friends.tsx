import Link from "next/link";
import Image from "next/image";

const Friends = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">好友申请</span>
        <Link href="/" className="text-blue-500 text-xs">
          查看更多
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {[
          {},
          {},
        ].map((item, idx) => (
          <div className="flex items-center justify-between" key={idx}>
            <div className="flex items-center gap-4">
              <Image src="/avatar.jpg" alt="" width={20} height={20} className="w-10 h-10 rounded-full object-cover" />
              <span>张三</span>
            </div>
            <div className="flex gap-3 justify-end">
              <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer" />
              <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Friends;
