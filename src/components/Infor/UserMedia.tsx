import Link from "next/link";
import Image from "next/image";

const UserMedia = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between font-medium mb-4">
        <span className="text-gray-500">相册</span>
        <Link href="/" className="text-blue-500 text-xs">
          查看更多
        </Link>
      </div>
      <div className="flex gap-2 justify-between flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div className="relative w-1/5 h-24" key={item}>
            <Image
              src="/avatar.jpg"
              fill
              alt=""
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserMedia;
