import Image from "next/image";
import Comments from "./Comments";
import { Post as PrismaPost, User } from "@prisma/client";
import PostInter from "./PostInter";

type FeedPostType = PrismaPost & {
  user: User;
} & {
  likes: [{ userId: string }];
} & {
  _count: {
    comments: number;
  };
};

const Post = ({ post }: { post: FeedPostType }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/avatar.jpg"}
            alt="avatar"
            height={40}
            width={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">{post.user.username || "佚名"}</span>
        </div>
        <Image src="/more.png" alt="avatar" height={16} width={16} />
      </div>
      <div className="flex flex-col gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image src={post.img} alt="avatar" className="object-cover" fill />
          </div>
        )}
        <p className="">{post.desc}</p>
      </div>
      <PostInter
        postId={post.id}
        likes={post.likes.map((item) => item.userId)}
        comments={post._count.comments}
      />
      <Comments postId={post.id} />
    </div>
  );
};
export default Post;
