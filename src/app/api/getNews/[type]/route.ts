import { type NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  const types: {
    [key: string]: string;
  } = {
    "weibo": "https://weibo.com/ajax/side/hotSearch",
    "zhihu": "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=20&desktop=true",
  };
  if (!types[params.type]) {
    return Response.json({data: []});
  }
  const res = await fetch(types[params.type]);
  const data = await res.json();
  return Response.json({
    data: params.type === 'weibo' ? data.data.realtime : data.data
  });
}
