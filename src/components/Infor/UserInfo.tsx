import Link from "next/link";
import Image from "next/image";

const UserInfo = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between font-medium mb-4">
        <span className="text-gray-500">个人信息</span>
        <Link href="/" className="text-blue-500 text-xs">
          查看更多
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gary-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Kart</span>
          <span className="text-sm">jim</span>
        </div>
        <p>xxxx xxxx xxx xxx</p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" height={16} width={16} />
          <span>
            IP地址：<b>上海</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" height={16} width={16} />
          <span>
            IP地址：<b>上海</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" height={16} width={16} />
          <span>
            IP地址：<b>上海</b>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image src="/link.png" alt="" height={16} width={16} />
            <Link href="/" className="text-blue-500 font-medium">
              kartjim.cn
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/date.png" alt="" height={16} width={16} />
            <Link href="/">2024/07/24 加入</Link>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          关注
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          block user
        </span>
      </div>
    </div>
  );
};
export default UserInfo;
