import { mailAction } from "@/lib/actions/sendEmailNew";

export async function POST(request: Request) {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY!,
  //   },
  //   body: JSON.stringify({ time: new Date().toISOString() }),
  // })

  // const data = await res.json()
  const reqBody = await request.json();

  const data = await mailAction({
    rating: reqBody.rating,
    feedback: reqBody.feedback,
    email: "dappuprashanth43@gmail.com"
  });

  return Response.json({ data });
}