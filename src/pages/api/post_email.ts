// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: Response;
};

const emailUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body } = req;
  const response = await fetch(emailUrl!, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/JSON",
    },
  });

  const message = await response.json();
  if (message.err) {
    return res.status(500).json({ message: response });
  } else {
    return res.status(200).json({ message: response });
  }
}
