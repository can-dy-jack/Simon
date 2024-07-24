import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const ClerkMenu = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <ClerkLoading>
        <div
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <div className="cursor-pointer">
            <Image src="/group.svg" alt="" width={20} height={20}></Image>
          </div>
          <div className="cursor-pointer">
            <Image src="/message.svg" alt="" width={20} height={20}></Image>
          </div>
          <div className="cursor-pointer">
            <Image
              src="/bell.svg"
              alt=""
              width={20}
              height={20}
            ></Image>
          </div>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-1 text-sm">
            <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path d="M19 12H12M12 12L15 15M12 12L15 9" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <Link href="/sign-in">登录</Link>
            <Link href="/sign-up">注册</Link>
          </div>
        </SignedOut>
      </ClerkLoaded>
    </div>
  );
};

export default ClerkMenu;
