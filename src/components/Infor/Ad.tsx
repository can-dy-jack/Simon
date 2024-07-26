import Image from "next/image";

const Ad = ({ size = "md" }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm sticky top-4 left-0">
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>广告</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div className={`relative w-full ${size == 'sm' ? 'h-24' : size == 'md' ? 'h-36' : 'h-48'}`}>
          <Image
            src="https://images.unsplash.com/photo-1721587352217-ecc89e9a0d81?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="avatar"
            className="object-cover rounded-lg"
            fill
          />
        </div>
        <div className="flex items-center gap-4">
        <Image
            src="https://images.unsplash.com/photo-1721587352217-ecc89e9a0d81?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="avatar"
            className="rounded-full w-6 h-6 object-cover"
            height={14}
            width={14}
          />
          <span className="font-medium text-blue-500">xxxxxxxxx</span>
        </div>
        <p className={size == 'sm' ? 'text-xs' : 'texts-sm'}>
          xxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxx
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn More</button>
      </div>
    </div>
  );
};
export default Ad;
