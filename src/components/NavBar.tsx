import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import ClerkMenu from "./ClerkMenu";

const NavBar = () => {
  return (
    <div className="h-20 flex items-center justify-between">
      {/* left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl flex gap-1 items-center">
          <Image src="/chat.png" alt="favicon" height={30} width={30} />
          Simon
        </Link>
      </div>
      {/*  */}
      <div className="hidden md:flex w-[50%] text-base items-center justify-between">
        {/* links */}
        <div className="flex gap-6 text-gray-600">
          {
            [
              { href: "/", alt: "首页", src: "/home.svg" },
              { href: "/", alt: "友链", src: "/link.svg" },
              { href: "/", alt: "故事", src: "/add.svg" },
            ].map(item => (
              <Link key={item.src} href={item.href} className="flex gap-1 items-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  height={24}
                  className="w-5 h-5 text-sky-400"
                />
                <span>{item.alt}</span>
              </Link>
            ))
          }
          {/* <Link href="/" className="flex gap-1 items-center">
            <Image
              src="/home.svg"
              alt="首页"
              width={24}
              height={24}
              className="w-5 h-5 text-sky-400"
            />
            <span>首页</span>
          </Link> */}
          {/* <Link href="/" className="flex gap-1 items-center">
            <Image
              src="/link.svg"
              alt="友链"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>友链</span>
          </Link> */}
          {/* <Link href="/" className="flex gap-1 items-center">
            <Image
              src="/add.svg"
              alt="故事"
              width={16}
              height={16}
              className="w-5 h-5"
            />
            <span>故事</span>
          </Link> */}
        </div>
        <div className="hidden xl:flex p-2 items-center ">
          <div className="relative flex">
            <input
              type="search"
              className="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-sm font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              id="exampleFormControlInput2"
              aria-describedby="button-addon2"
            />
            <span
              className="cursor-pointer flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
              id="button-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkMenu />
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavBar;
