import Link from "next/link";
import Image from "next/image";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">好友生日</span>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {[{}, {}].map((item, idx) => (
          <div className="flex items-center justify-between" key={idx}>
            <div className="flex items-center gap-4">
              <Image
                src="/avatar.jpg"
                alt=""
                width={20}
                height={20}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span>张三</span>
            </div>
            <div className="flex gap-3 justify-end">
              <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
                祝福
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4 mt-2">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">近期生日</span>
          <span className="text-gray-500">近期有 999 个好友生日</span>
        </Link>
      </div>
    </div>
  );
};
export default Birthdays;
