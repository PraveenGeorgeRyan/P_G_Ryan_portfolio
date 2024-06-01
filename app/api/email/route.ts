import { mailAction } from "@/lib/actions/sendEmail";

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
    email: reqBody.senderEmail,
    message: reqBody.message,
  });

  return Response.json({ data });
}
