import { useEffect, useState } from "react";
import Post from "./Post";
import { getPosts } from "@/actions";

const Feed = ({ username, currentUserId }: { username?: string, currentUserId: string }) => {
  const [posts, setPosts] = useState<any[]>([]);
  
  useEffect(() => {
    getPosts(username || "").then(res => {
      setPosts(res);
    })
  }, [username]);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      {
        posts.length ? posts.map(post => (
          <Post key={post.id} post={post} currentUserId={currentUserId} />
        )) : "暂无数据"
      }
    </div>
  )
}
export default Feed;
