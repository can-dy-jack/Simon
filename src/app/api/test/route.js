// http://localhost:3000/api/test

export async function GET() {
  const data = {
    e: 233
  }
 
  return Response.json({ data })
}
