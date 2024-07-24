import ProfileCard from "./ProfileCard";
import Image from "next/image";
import Link from "next/link";
import Ad from "./Infor/Ad";

const Page = ({ type = "home" }: { type?: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type == "home" ? <ProfileCard  /> : null}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gary-500 flex flex-col gap-2">
        {
          [
            {src: "/posts.png"},
            {src: "/activity.png"},
            {src: "/market.png"},
            {src: "/events.png"},
            {src: "/albums.png"},
            {src: "/videos.png"},
            {src: "/news.png"},
            {src: "/courses.png"},
            {src: "/lists.png"},
            {src: "/settings.png"},
          ].map((item, idx) => (
            <>
              <Link key={idx} href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
                <Image src={item.src} alt="" width={20} height={20} />
                <span>xxx xxx</span>
              </Link>
              {/* <hr className="border-t-1 border-gray-50 w-36 self-center" /> */}
            </>
          ))
        }
      </div>
      <Ad size="sm" />
    </div>
  );
};
export default Page;
