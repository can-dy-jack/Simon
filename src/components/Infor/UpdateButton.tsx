"use client";

import { useFormStatus } from "react-dom";

const UpdateButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-2 rounded-md cursor-pointer m-2 border hover:shadow-[0_0_0_3px_#eef] transition-shadow"
    >
      { pending ? "更新中..." : "更新" }
    </button>
  );
};

export default UpdateButton;
