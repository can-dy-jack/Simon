import { useEffect, useState } from "react";
import StoryList from "./StoryList";
import { getStories } from "@/actions";

const Stories = ({userId}: {userId: string}) => {

  const [state, setState] = useState([]);
  useEffect(() => {
    getStories().then(res => setState(res));
  }, []);

  return (
    <div
      className="cursor-pointer p-4 bg-white rounded-lg shadow-md text-sm overflow-x-auto"
      title="按住shift键加滚轮，可以滚动横向内容！"
    >
      <StoryList stories={state} userId={userId} />
    </div>
  );
};
export default Stories;
