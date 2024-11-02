//

import { type NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  const types: {
    [key: string]: string;
  } = {
    "ruanyifeng": "https://www.ruanyifeng.com/blog/atom.xml",
  };

  if (!types[params.type]) {
    return Response.json({data: []});
  }

  const res = await fetch(types[params.type]);

  const data = await res.text();
  return Response.json({data})
}

