"use client";

import Link from "next/link";
import Image from "next/image";
import {
  getFollowReqs,
  acceptFollowRequest,
  declineFollowRequest,
} from "@/actions";
import { useEffect, useOptimistic, useState } from "react";
import { FollowRequest, User } from "@prisma/client";

type Requests = FollowRequest & {
  sender: User;
};

const Friends = () => {
  let [requests, setRequests] = useState<Requests[]>([]);

  useEffect(() => {
    getFollowReqs().then((res) => {
      if (res) setRequests(res);
    });
  }, []);

  // useOptimistic 有bug？ -- 要加 async 和 try catch ？
  const accept = (requestId: number, userId: string) => {
    setRequests((prev) => prev.filter((req) => req.id !== requestId));

    acceptFollowRequest(userId).then((_) => {
      // setRequests((prev) => prev.filter((req) => req.id !== requestId));
    }).catch(e => {
      alert("操作失败！") // TODO 
    });
  };

  const reject = (requestId: number, userId: string) => {
    setRequests((prev) => prev.filter((req) => req.id !== requestId));

    declineFollowRequest(userId).then((_) => {
      // setRequests((prev) => prev.filter((req) => req.id !== requestId));
    }).catch(e => {
      alert("操作失败！") // TODO
    });
  };

  return requests.length === 0 ? null : (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">好友申请</span>
        <Link href="/" className="text-blue-500 text-xs">
          查看更多
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {requests.map((item, idx) => (
          <div className="flex items-center justify-between" key={item.id}>
            <div className="flex items-center gap-4">
              <Image
                src={item.sender.avatar || "/avatar.jpg"}
                alt=""
                width={20}
                height={20}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span>{item.sender.username}</span>
            </div>
            <div className="flex gap-3 justify-end">
              <form action={() => accept(item.id, item.sender.id)}>
                <button>
                  <Image
                    src="/check.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </button>
              </form>
              <form action={() => reject(item.id, item.sender.id)}>
                <button>
                  <Image
                    src="/reject.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Friends;
