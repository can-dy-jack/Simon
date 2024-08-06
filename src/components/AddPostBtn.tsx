import { useFormStatus } from "react-dom";

const AddPostBtn = () => {
  const { pending } = useFormStatus();

  return <button disabled={pending}>{ pending ? <span className="text-green-500">提交中</span> : <span className="text-gray-700">提交</span> }</button>
}

export default AddPostBtn;
