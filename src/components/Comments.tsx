import Image from "next/image";
import { getComments } from "@/actions";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";

const Comments = ({ postId }: { postId: number }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(postId).then(res => {
      setComments(res);
    })
  }, [postId]);

  return (
    <div className="">
      <CommentList list={comments} postId={postId} />
    </div>
  );
};

export default Comments;
